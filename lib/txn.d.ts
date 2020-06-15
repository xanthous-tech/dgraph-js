import * as grpc from "grpc";
import { api } from "../generated/api";
import { DgraphClient } from "./client";
export declare type TxnOptions = {
    readOnly?: boolean;
    bestEffort?: boolean;
};
export declare class Txn {
    private readonly dc;
    private readonly ctx;
    private finished;
    private mutated;
    private readonly useReadOnly;
    private readonly useBestEffort;
    constructor(dc: DgraphClient, txnOpts?: TxnOptions);
    query(q: string, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    queryWithVars(q: string, vars?: {
        [k: string]: any;
    }, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    mutate(mu: api.Mutation, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    doRequest(req: api.Request, metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<api.Response>;
    commit(metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<void>;
    discard(metadata?: grpc.Metadata, options?: grpc.CallOptions): Promise<void>;
    private mergeContext;
}
