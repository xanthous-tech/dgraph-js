import * as grpc from "grpc";
import { loadSync } from "@grpc/proto-loader";
import { resolve } from "path";

import { api } from "../generated/api";

import { ERR_REFRESH_JWT_EMPTY } from "./errors";

const SERVICE_NAME = "api.Dgraph";

/**
 * Stub is a stub/client connecting to a single dgraph server instance.
 */
export class DgraphClientStub {
    private readonly stub: grpc.Client;

    private accessJwt: string = "";
    private refreshJwt: string = "";

    constructor(
        addr?: string,
        credentials?: grpc.ChannelCredentials,
        options?: object
    ) {
        if (addr === undefined) {
            // tslint:disable-next-line no-parameter-reassignment
            addr = "localhost:9080";
        }
        if (credentials === undefined) {
            // tslint:disable-next-line no-parameter-reassignment
            credentials = grpc.credentials.createInsecure();
        }

        const serviceDefinition = loadSync(
            resolve(__dirname, "..", "protos", "api.proto")
        )[SERVICE_NAME] as grpc.ServiceDefinition<any>;
        const Client = grpc.makeGenericClientConstructor(
            serviceDefinition,
            SERVICE_NAME,
            {}
        );

        this.stub = new Client(addr, credentials, options);
    }

    public async login(
        userid?: string,
        password?: string,
        refreshJwt?: string,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Jwt> {
        const req: api.ILoginRequest = {};

        if (userid !== undefined) {
            req.userid = userid;
            req.password = password;
        } else if (refreshJwt !== undefined) {
            // Use the caller-supplied refreshJwt
            req.refreshToken = refreshJwt;
        } else {
            req.refreshToken = this.refreshJwt;
        }

        const jwtResponse = await new Promise<api.Jwt>((resolve, reject) => {
            // @ts-ignore
            this.stub.login(
                new api.LoginRequest(req),
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, payload: api.Jwt) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(payload);
                }
            );
        });

        this.accessJwt = jwtResponse.accessJwt;
        this.refreshJwt = jwtResponse.refreshJwt;
        return jwtResponse;
    }

    public alter(
        op: api.Operation,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Payload> {
        return new Promise<api.Payload>((resolve, reject) => {
            // @ts-ignore
            this.stub.alter(
                op,
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, payload: api.Payload) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(payload);
                }
            );
        });
    }

    public async retryLogin(
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Jwt> {
        if (this.refreshJwt.length === 0) {
            throw ERR_REFRESH_JWT_EMPTY;
        }

        const req: api.ILoginRequest = {};
        req.refreshToken = this.refreshJwt;

        const jwtResponse = await new Promise<api.Jwt>((resolve, reject) => {
            // @ts-ignore
            this.stub.login(
                new api.LoginRequest(req),
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, jwt: api.Jwt) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(jwt);
                }
            );
        });

        this.accessJwt = jwtResponse.accessJwt;
        this.refreshJwt = jwtResponse.refreshJwt;
        return jwtResponse;
    }

    public query(
        req: api.Request,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Response> {
        return new Promise<api.Response>((resolve, reject) => {
            // @ts-ignore
            this.stub.query(
                req,
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, response: api.Response) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(response);
                }
            );
        });
    }

    public mutate(
        mu: api.Mutation,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Response> {
        return new Promise<api.Response>((resolve, reject) => {
            // @ts-ignore
            this.stub.mutate(
                mu,
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, response: api.Response) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(response);
                }
            );
        });
    }

    public commitOrAbort(
        ctx: api.TxnContext,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.TxnContext> {
        return new Promise<api.TxnContext>((resolve, reject) => {
            // @ts-ignore
            this.stub.commitOrAbort(
                ctx,
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, txnContext: api.TxnContext) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(txnContext);
                }
            );
        });
    }

    public checkVersion(
        check: api.Check,
        metadata?: grpc.Metadata,
        options?: grpc.CallOptions
    ): Promise<api.Version> {
        return new Promise<api.Version>((resolve, reject) => {
            // @ts-ignore
            this.stub.mutate(
                check,
                this.ensureMetadata(metadata),
                ensureCallOptions(options),
                (error: grpc.ServiceError, version: api.Version) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(version);
                }
            );
        });
    }

    public waitForReady(deadline: grpc.Deadline): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.stub.waitForReady(deadline, (error) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve();
            });
        });
    }

    public close(): void {
        return this.stub.close();
    }

    public grpcClient(): grpc.Client {
        return this.stub;
    }

    private ensureMetadata(metadata?: grpc.Metadata): grpc.Metadata {
        const newMeta = metadata === undefined ? new grpc.Metadata() : metadata;
        if (this.accessJwt !== "") {
            newMeta.set("accessJwt", this.accessJwt);
        }
        return newMeta;
    }
}

function ensureCallOptions(options?: grpc.CallOptions): grpc.CallOptions {
    return options === undefined
        ? {
              propagate_flags: grpc.propagate.DEFAULTS,
              credentials: undefined,
          }
        : options;
}
