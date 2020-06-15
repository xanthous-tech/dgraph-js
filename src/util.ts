import * as grpc from "grpc";

export function errorCode(err: any): { valid: boolean; code: number } { // tslint:disable-line no-any
    if (
        err === undefined ||
        typeof err !== "object" ||
        !err.hasOwnProperty("code") || // tslint:disable-line no-unsafe-any
        typeof err.code !== "number"   // tslint:disable-line no-unsafe-any
    ) {
        return {
            valid: false,
            code: -1,
        };
    }

    return {
        valid: true,
        code: (<{ code: number }>err).code,
    };
}

export function isAbortedError(err: any): boolean { // tslint:disable-line no-any
    const ec = errorCode(err);
    return ec.valid && ec.code === grpc.status.ABORTED;
}

export function isConflictError(err: any): boolean { // tslint:disable-line no-any
    const ec = errorCode(err);
    return ec.valid && (ec.code === grpc.status.ABORTED || ec.code === grpc.status.FAILED_PRECONDITION);
}

export function isUnauthenticatedError(err: any): boolean { // tslint:disable-line no-any
    const ec = errorCode(err);
    return ec.valid && (ec.code === grpc.status.UNAUTHENTICATED);
}

export function stringifyMessage(msg: any): string {
    if (typeof msg.toJSON === 'function') {
        return JSON.stringify(msg.toJSON());
    } else {
        return `${JSON.stringify(msg)}`;
    }
}

export { isBase64 } from "is-base64";

export function strToU8(str: string): Uint8Array {
    return new Uint8Array(Buffer.from(str, "utf8"));
}

export function b64ToStr(b64Str: string): string {
    return Buffer.from(b64Str, "base64").toString();
}

export function u8ToStr(arr: Uint8Array): string {
    let buf = Buffer.from(arr.buffer);
    if (arr.byteLength !== arr.buffer.byteLength) {
        // Respect the "view", i.e. byteOffset and byteLength, without doing a copy.
        buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }

    return buf.toString();
}

export function strToJson(jsonStr: string): any { // tslint:disable-line no-any
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        return {};
    }
}
