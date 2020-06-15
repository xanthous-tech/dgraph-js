"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToJson = exports.u8ToStr = exports.b64ToStr = exports.strToU8 = exports.stringifyMessage = exports.isUnauthenticatedError = exports.isConflictError = exports.isAbortedError = exports.errorCode = void 0;
var grpc = require("grpc");
function errorCode(err) {
    if (err === undefined ||
        typeof err !== "object" ||
        !err.hasOwnProperty("code") ||
        typeof err.code !== "number") {
        return {
            valid: false,
            code: -1,
        };
    }
    return {
        valid: true,
        code: err.code,
    };
}
exports.errorCode = errorCode;
function isAbortedError(err) {
    var ec = errorCode(err);
    return ec.valid && ec.code === grpc.status.ABORTED;
}
exports.isAbortedError = isAbortedError;
function isConflictError(err) {
    var ec = errorCode(err);
    return ec.valid && (ec.code === grpc.status.ABORTED || ec.code === grpc.status.FAILED_PRECONDITION);
}
exports.isConflictError = isConflictError;
function isUnauthenticatedError(err) {
    var ec = errorCode(err);
    return ec.valid && (ec.code === grpc.status.UNAUTHENTICATED);
}
exports.isUnauthenticatedError = isUnauthenticatedError;
function stringifyMessage(msg) {
    if (typeof msg.toJSON === 'function') {
        return JSON.stringify(msg.toJSON());
    }
    else {
        return "" + JSON.stringify(msg);
    }
}
exports.stringifyMessage = stringifyMessage;
var is_base64_1 = require("is-base64");
Object.defineProperty(exports, "isBase64", { enumerable: true, get: function () { return is_base64_1.isBase64; } });
function strToU8(str) {
    return new Uint8Array(Buffer.from(str, "utf8"));
}
exports.strToU8 = strToU8;
function b64ToStr(b64Str) {
    return Buffer.from(b64Str, "base64").toString();
}
exports.b64ToStr = b64ToStr;
function u8ToStr(arr) {
    var buf = Buffer.from(arr.buffer);
    if (arr.byteLength !== arr.buffer.byteLength) {
        buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }
    return buf.toString();
}
exports.u8ToStr = u8ToStr;
function strToJson(jsonStr) {
    try {
        return JSON.parse(jsonStr);
    }
    catch (e) {
        return {};
    }
}
exports.strToJson = strToJson;
