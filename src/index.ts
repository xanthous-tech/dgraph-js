import { api } from "../generated/api";

const {
    Payload,
    Response,
    Mutation,
    Operation,
    Request,
    TxnContext,
    Check,
    Version,
    NQuad,
    Value,
    Facet,
    Latency,
} = api;

export {
    Payload,
    Response,
    Mutation,
    Operation,
    Request,
    TxnContext,
    Check,
    Version,
    NQuad,
    Value,
    Facet,
    Latency,
};

// Export DgraphClientStub class.
export * from "./clientStub";

// Export DgraphClient class and deleteEdges function.
export * from "./client";

// Export Txn class.
export * from "./txn";

// Export error constants.
export * from "./errors";
