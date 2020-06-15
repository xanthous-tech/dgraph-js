import * as grpc from "grpc";
import { api } from "../generated/api";
export declare class DgraphClientStub {
    private readonly stub;
    private accessJwt;
    private refreshJwt;
    constructor(addr?: string, credentials?: grpc.ChannelCredentials, options?: object);
    login(userid?: string, password?: string, refreshJwt?: string, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Jwt>;
    alter(op: api.Operation, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Payload>;
    retryLogin(metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Jwt>;
    query(req: api.Request, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    mutate(mu: api.Mutation, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    commitOrAbort(ctx: api.TxnContext, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.TxnContext>;
    checkVersion(check: api.Check, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Version>;
    waitForReady(deadline: grpc.Deadline): Promise<void>;
    close(): void;
    grpcClient(): grpc.Client;
    private ensureMetadata;
}
