"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Latency = exports.Facet = exports.Value = exports.NQuad = exports.Version = exports.Check = exports.TxnContext = exports.Request = exports.Operation = exports.Mutation = exports.Response = exports.Payload = void 0;
var api_1 = require("../generated/api");
var Payload = api_1.api.Payload, Response = api_1.api.Response, Mutation = api_1.api.Mutation, Operation = api_1.api.Operation, Request = api_1.api.Request, TxnContext = api_1.api.TxnContext, Check = api_1.api.Check, Version = api_1.api.Version, NQuad = api_1.api.NQuad, Value = api_1.api.Value, Facet = api_1.api.Facet, Latency = api_1.api.Latency;
exports.Payload = Payload;
exports.Response = Response;
exports.Mutation = Mutation;
exports.Operation = Operation;
exports.Request = Request;
exports.TxnContext = TxnContext;
exports.Check = Check;
exports.Version = Version;
exports.NQuad = NQuad;
exports.Value = Value;
exports.Facet = Facet;
exports.Latency = Latency;
Response.prototype.getJson = function () {
    return JSON.stringify(_this.json);
};
__exportStar(require("./clientStub"), exports);
__exportStar(require("./client"), exports);
__exportStar(require("./txn"), exports);
__exportStar(require("./errors"), exports);
