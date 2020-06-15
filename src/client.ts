import * as grpc from "grpc";

import { api } from "../generated/api";

import { DgraphClientStub } from "./clientStub";
import { ERR_NO_CLIENTS } from "./errors";
import { Txn, TxnOptions } from "./txn";
import { isUnauthenticatedError, stringifyMessage } from "./util";

/**
 * Client is a transaction aware client to a set of Dgraph server instances.
 */
export class DgraphClient {
    private readonly clients: DgraphClientStub[];
    private debugMode: boolean = false;

    /**
     * Creates a new Client for interacting with the Dgraph store.
     *
     * The client can be backed by multiple connections (to the same server, or
     * multiple servers in a cluster).
     */
    constructor(...clients: DgraphClientStub[]) {
        if (clients.length === 0) {
            throw ERR_NO_CLIENTS;
        }

        this.clients = clients;
    }

    /**
     * By setting various fields of api.Operation, alter can be used to do the
     * following:
     *
     * 1. Modify the schema.
     *
     * 2. Drop a predicate.
     *
     * 3. Drop the database.
     */
    public async alter(op: api.Operation, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): Promise<api.Payload> {
        this.debug(`Alter request:\n${stringifyMessage(op)}`);

        const c = this.anyClient();
        let payload: api.Payload;
        const operation = async () => c.alter(op, metadata, options);
        try {
            payload = await operation();
        } catch (e) {
            if (isJwtExpired(e) === true) {
                await c.retryLogin(metadata, options);
                payload = await operation();
            } else {
                throw e;
            }
        }
        this.debug(`Alter response:\n${stringifyMessage(payload)}`);

        return payload;
    }

    /**
     * newTxn creates a new transaction.
     */
    public newTxn(txnOpts?: TxnOptions): Txn {
        return new Txn(this, txnOpts);
    }

    /**
     * setDebugMode switches on/off the debug mode which prints helpful debug messages
     * while performing alters, queries and mutations.
     */
    public setDebugMode(mode: boolean = true): void {
        this.debugMode = mode;
    }

    /**
     * debug prints a message on the console if debug mode is switched on.
     */
    public debug(msg: string): void {
        if (this.debugMode) {
            // tslint:disable-next-line no-console
            console.log(msg);
        }
    }

    public anyClient(): DgraphClientStub {
        return this.clients[Math.floor(Math.random() * this.clients.length)];
    }
}

// isJwtExpired returns true if the error indicates that the jwt has expired.
export function isJwtExpired(err: any): Boolean { // tslint:disable-line no-any
    if (!err) {
        return false;
    }
    return isUnauthenticatedError(err);
}

/**
 * deleteEdges sets the edges corresponding to predicates on the node with the
 * given uid for deletion.
 *
 * This helper function doesn't run the mutation on the server. It must be done
 * by the user after the function returns.
 */
export function deleteEdges(mu: api.Mutation, uid: string, ...predicates: string[]): void {
    for (const predicate of predicates) {
        const nquad = new api.NQuad();
        nquad.subject = uid;
        nquad.predicate = predicate;

        const ov = new api.Value();
        ov.defaultVal = "_STAR_ALL";
        nquad.objectValue = ov;

        mu.del.push(nquad);
    }
}
