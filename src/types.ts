import * as pbjs from "protobufjs";

import { api } from "../generated/api";

import {
    b64ToStr,
    isBase64,
    strToJson,
    strToU8,
    u8ToStr,
} from "./util";

// Alter classes.

/**
 * Payload represents the return value of an alter operation.
 */
export class Payload extends api.Payload {
    public getData(): any {
        let jsonStr: string;

        const value = this.Data;

        jsonStr = u8ToStr(value);

        return strToJson(jsonStr);
    }

    public getData_asB64(): string {
        const value = this.Data;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getData_asU8(): Uint8Array {
        const value = this.Data;
        return value;
    }

    public setData(value: any): void {
        if (value instanceof Uint8Array) {
            this.Data = value;
            return;
        }

        if (typeof value === "string" || value instanceof String) {
            this.Data = strToU8(value.toString());
            return;
        }

        const jsonStr = JSON.stringify(value);
        this.Data = strToU8(jsonStr);
    }
}

// Mutation and Query classes.

/**
 * Response represents the return value of a mutation or query operations.
 */
export class Response extends api.Response {
    public uidsMap: Map<string, string>;

    public getUidsMap(): Map<string, string> {
        if (!this.uidsMap) {
            this.uidsMap = new Map(Object.entries(this.uids));
        }

        return this.uidsMap;
    }

    public getJson(): any {
        let jsonStr: string;
        const value = this.json;
        if (value instanceof Uint8Array) {
            jsonStr = u8ToStr(value);
        } else {
            jsonStr = b64ToStr(value);
        }

        return strToJson(jsonStr);
    }

    public getJson_asB64(): string {
        const value = this.json;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getJson_asU8(): Uint8Array {
        const value = this.json;
        return value;
    }

    public setJson(value: any): void {
        if (value instanceof Uint8Array) {
            this.json = value;
            return;
        }

        if (typeof value === "string" || value instanceof String) {
            this.json = strToU8(value.toString());
            return;
        }

        const jsonStr = JSON.stringify(value);
        this.json = strToU8(jsonStr);
    }
}

// Mutate classes.

/**
 * Mutation represents the request value of a muatate operation.
 */
export class Mutation extends api.Mutation {
    public getSetJson(): any {
        let jsonStr: string;
        const value = this.setJson;
        if (value instanceof Uint8Array) {
            jsonStr = u8ToStr(value);
        } else {
            jsonStr = b64ToStr(value);
        }

        return strToJson(jsonStr);
    }

    public getSetJson_asB64(): string {
        const value = this.setJson;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getSetJson_asU8(): Uint8Array {
        const value = this.setJson;
        return value;
    }

    public setSetJson(value: any): void {
        if (value instanceof Uint8Array) {
            this.setJson = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.setJson = strToU8(value.toString());
            return;
        }

        const jsonStr = JSON.stringify(value);
        this.setJson = strToU8(jsonStr);
    }

    public getDeleteJson(): any {
        let jsonStr: string;
        const value = this.deleteJson;
        if (value instanceof Uint8Array) {
            jsonStr = u8ToStr(value);
        } else {
            jsonStr = b64ToStr(value);
        }

        return strToJson(jsonStr);
    }

    public getDeleteJson_asB64(): string {
        const value = this.deleteJson;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getDeleteJson_asU8(): Uint8Array {
        const value = this.deleteJson;
        return value;
    }

    public setDeleteJson(value: any): void {
        if (value instanceof Uint8Array) {
            this.deleteJson = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.deleteJson = strToU8(value.toString());
            return;
        }

        const jsonStr = JSON.stringify(value);
        this.deleteJson = strToU8(jsonStr);
    }

    public getSetNquads(): Uint8Array | string {
        const value = this.setNquads;
        if (value instanceof Uint8Array) {
            return u8ToStr(value);
        }

        return b64ToStr(value);
    }

    public getSetNquads_asB64(): string {
        const value = this.setNquads;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getSetNquads_asU8(): Uint8Array {
        const value = this.setNquads;
        return value;
    }

    public setSetNquads(value: Uint8Array | string): void {
        if (value instanceof Uint8Array) {
            this.setNquads = value;
            return;
        }

        if (isBase64(value)) {
            this.setNquads = new Uint8Array();
            pbjs.util.base64.decode(value, this.setNquads, 0);
            return;
        }

        this.setNquads = strToU8(value);
    }

    public getDelNquads(): Uint8Array | string {
        const value = this.delNquads;
        if (value instanceof Uint8Array) {
            return u8ToStr(value);
        }

        return b64ToStr(value);
    }

    public getDelNquads_asB64(): string {
        const value = this.delNquads;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    }

    public getDelNquads_asU8(): Uint8Array {
        const value = this.delNquads;
        return value;
    }

    public setDelNquads(value: Uint8Array | string): void {
        if (value instanceof Uint8Array) {
            this.delNquads = value;
            return;
        }
        // tslint:disable-next-line no-unsafe-any
        if (isBase64(value)) {
            this.delNquads = new Uint8Array();
            pbjs.util.base64.decode(value, this.delNquads, 0);
            return;
        }

        this.delNquads = strToU8(value);
    }
}
