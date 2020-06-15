import { api } from "../generated/api";

export * from "./types";

const {
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
