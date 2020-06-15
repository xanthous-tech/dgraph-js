import * as grpc from "grpc";
import * as Long from "long";

import { api } from "../generated/api";

import { DgraphClient, isJwtExpired } from "./client";
import * as types from "./types";
import {
    ERR_ABORTED,
    ERR_BEST_EFFORT_REQUIRED_READ_ONLY,
    ERR_FINISHED,
    ERR_READ_ONLY,
} from "./errors";
import { isAbortedError, isConflictError, stringifyMessage } from "./util";

export type TxnOptions = {
    readOnly?: boolean;
    bestEffort?: boolean;
};

/**
 * Txn is a single atomic transaction.
 *
 * A transaction lifecycle is as follows:
 *
 * 1. Created using Client.newTxn.
 *
 * 2. Various query and mutate calls made.
 *
 * 3. commit or discard used. If any mutations have been made, It's important
 * that at least one of these methods is called to clean up resources. discard
 * is a no-op if commit has already been called, so it's safe to call discard
 * after calling commit.
 */
export class Txn {
    private readonly dc: DgraphClient;
    private readonly ctx: api.TxnContext;
    private finished: boolean = false;
    private mutated: boolean = false;
    private readonly useReadOnly: boolean = false;
    private readonly useBestEffort: boolean = false;

    constructor(dc: DgraphClient, txnOpts?: TxnOptions) {
        this.dc = dc;
        this.ctx = new api.TxnContext();
        const defaultedTxnOpts = {
            readOnly: false,
            bestEffort: false,
            ...txnOpts,
        };
        this.useReadOnly = defaultedTxnOpts.readOnly;
        this.useBestEffort = defaultedTxnOpts.bestEffort;
        if (this.useBestEffort && !this.useReadOnly) {
            this.dc.debug(
                `Client attempted to query using best-effort without setting the transaction to read-only`
            );
            throw ERR_BEST_EFFORT_REQUIRED_READ_ONLY;
        }
    }

    /**
     * query sends a query to one of the connected Dgraph instances. If no mutations
     * need to be made in the same transaction, it's convenient to chain the method,
     * e.g. client.newTxn().query("...").
     */
    public query(
        q: string,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<types.Response> {
        return this.queryWithVars(q, undefined, metadata, options);
    }

    /**
     * queryWithVars is like query, but allows a variable map to be used. This can
     * provide safety against injection attacks.
     */
    public async queryWithVars(
        q: string,
        vars?: { [k: string]: any }, // tslint:disable-line no-any
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<types.Response> {
        if (this.finished) {
            this.dc.debug(
                `Query request (ERR_FINISHED):\nquery = ${q}\nvars = ${vars}`
            );
            throw ERR_FINISHED;
        }

        const req = new api.Request();
        req.query = q;
        req.startTs = this.ctx.startTs;
        req.readOnly = this.useReadOnly;
        req.bestEffort = this.useBestEffort;
        req.vars = vars;

        return this.doRequest(req, metadata, options);
    }

    /**
     * mutate allows data stored on Dgraph instances to be modified. The fields in
     * Mutation come in pairs, set and delete. Mutations can either be encoded as
     * JSON or as RDFs.
     *
     * If commitNow is set, then this call will result in the transaction being
     * committed. In this case, an explicit call to commit doesn't need to
     * subsequently be made.
     *
     * If the mutation fails, then the transaction is discarded and all future
     * operations on it will fail.
     */
    public async mutate(
        mu: types.Mutation,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<types.Response> {
        const req = new api.Request();
        req.startTs = this.ctx.startTs;
        req.mutations = [mu];
        req.commitNow = mu.commitNow;

        return this.doRequest(req, metadata, options);
    }

    public async doRequest(
        req: api.Request,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<types.Response> {
        if (this.finished) {
            this.dc.debug(
                `Do request (ERR_FINISHED):\nquery = ${
                    req.query
                }\nvars = ${JSON.stringify(req.vars)}`
            );
            this.dc.debug(
                `Do request (ERR_FINISHED):\nmutation = ${stringifyMessage(
                    req.mutations[0]
                )}`
            );
            throw ERR_FINISHED;
        }

        if (req.mutations.length > 0) {
            if (this.useReadOnly) {
                this.dc.debug(
                    `Do request (ERR_READ_ONLY):\nmutation = ${stringifyMessage(
                        req.mutations[0]
                    )}`
                );
                throw ERR_READ_ONLY;
            }
            this.mutated = true;
        }

        req.startTs = this.ctx.startTs;
        this.dc.debug(`Do request:\n${stringifyMessage(req)}`);

        let resp: types.Response;
        const c = this.dc.anyClient();
        const operation = async () => c.query(req, metadata, options);

        try {
            resp = new types.Response(await operation());
        } catch (e) {
            if (isJwtExpired(e) === true) {
                await c.retryLogin(metadata, options);
                resp = new types.Response(await operation());
            } else {
                // Since a mutation error occurred, the txn should no longer be used (some
                // mutations could have applied but not others, but we don't know which ones).
                // Discarding the transaction enforces that the user cannot use the txn further.
                try {
                    await this.discard(metadata, options);
                } catch (e) {
                    // Ignore error - user should see the original error.
                }

                // Transaction could be aborted(status.ABORTED) if commitNow was true, or server
                // could send a message that this mutation conflicts(status.FAILED_PRECONDITION)
                // with another transaction.
                throw isAbortedError(e) || isConflictError(e) ? ERR_ABORTED : e;
            }
        }

        if (req.commitNow) {
            this.finished = true;
        }

        this.mergeContext(resp.txn);
        this.dc.debug(`Do request:\nresponse = ${stringifyMessage(resp)}`);

        return resp;
    }

    /**
     * commit commits any mutations that have been made in the transaction. Once
     * commit has been called, the lifespan of the transaction is complete.
     *
     * Errors could be thrown for various reasons. Notably, ERR_ABORTED could be
     * thrown if transactions that modify the same data are being run concurrently.
     * It's up to the user to decide if they wish to retry. In this case, the user
     * should create a new transaction.
     */
    public async commit(
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<void> {
        if (this.finished) {
            throw ERR_FINISHED;
        }

        this.finished = true;
        if (!this.mutated) {
            return;
        }

        const c = this.dc.anyClient();
        const operation = async () =>
            c.commitOrAbort(this.ctx, metadata, options);
        try {
            await operation();
        } catch (e) {
            if (isJwtExpired(e) === true) {
                await c.retryLogin(metadata, options);
                await operation();
            } else {
                throw isAbortedError(e) ? ERR_ABORTED : e;
            }
        }
    }

    /**
     * discard cleans up the resources associated with an uncommitted transaction
     * that contains mutations. It is a no-op on transactions that have already been
     * committed or don't contain mutations. Therefore it is safe (and recommended)
     * to call it in a finally block.
     *
     * In some cases, the transaction can't be discarded, e.g. the grpc connection
     * is unavailable. In these cases, the server will eventually do the transaction
     * clean up.
     */
    public async discard(
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<void> {
        if (this.finished) {
            return;
        }

        this.finished = true;
        if (!this.mutated) {
            return;
        }

        this.ctx.aborted = true;
        const c = this.dc.anyClient();
        const operation = async () =>
            c.commitOrAbort(this.ctx, metadata, options);
        try {
            await operation();
        } catch (e) {
            if (isJwtExpired(e) === true) {
                await c.retryLogin(metadata, options);
                await operation();
            } else {
                throw isAbortedError(e) ? ERR_ABORTED : e;
            }
        }
    }

    private mergeContext(src?: api.ITxnContext): void {
        if (src === undefined) {
            // This condition will be true only if the server doesn't return a txn context after a query or mutation.
            return;
        }

        if (Long.fromValue(this.ctx.startTs).toNumber() === 0) {
            this.ctx.startTs = src.startTs;
        } else if (Long.fromValue(this.ctx.startTs).notEquals(Long.fromValue(src.startTs))) {
            // This condition should never be true.
            throw new Error("StartTs mismatch");
        }

        if (src.keys && src.keys.length > 0) {
            if (!this.ctx.keys) {
                this.ctx.keys = [];
            }

            for (const key of src.keys) {
                this.ctx.keys.push(key);
            }
        }

    }
}
