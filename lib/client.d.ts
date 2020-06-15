import * as grpc from "grpc";
import { api } from "../generated/api";
import { DgraphClientStub } from "./clientStub";
import { Txn, TxnOptions } from "./txn";
export declare class DgraphClient {
    private readonly clients;
    private debugMode;
    constructor(...clients: DgraphClientStub[]);
    alter(op: api.Operation, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): Promise<api.Payload>;
    newTxn(txnOpts?: TxnOptions): Txn;
    setDebugMode(mode?: boolean): void;
    debug(msg: string): void;
    anyClient(): DgraphClientStub;
}
export declare function isJwtExpired(err: any): Boolean;
export declare function deleteEdges(mu: api.Mutation, uid: string, ...predicates: string[]): void;
