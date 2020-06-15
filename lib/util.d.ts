export declare function errorCode(err: any): {
    valid: boolean;
    code: number;
};
export declare function isAbortedError(err: any): boolean;
export declare function isConflictError(err: any): boolean;
export declare function isUnauthenticatedError(err: any): boolean;
export declare function stringifyMessage(msg: any): string;
export { isBase64 } from "is-base64";
export declare function strToU8(str: string): Uint8Array;
export declare function b64ToStr(b64Str: string): string;
export declare function u8ToStr(arr: Uint8Array): string;
export declare function strToJson(jsonStr: string): any;
