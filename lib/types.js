"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = exports.Response = exports.Payload = void 0;
var pbjs = require("protobufjs");
var api_1 = require("../generated/api");
var util_1 = require("./util");
var Payload = (function (_super) {
    __extends(Payload, _super);
    function Payload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Payload.prototype.getData = function () {
        var jsonStr;
        var value = this.Data;
        jsonStr = util_1.u8ToStr(value);
        return util_1.strToJson(jsonStr);
    };
    Payload.prototype.getData_asB64 = function () {
        var value = this.Data;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Payload.prototype.getData_asU8 = function () {
        var value = this.Data;
        return value;
    };
    Payload.prototype.setData = function (value) {
        if (value instanceof Uint8Array) {
            this.Data = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.Data = util_1.strToU8(value.toString());
            return;
        }
        var jsonStr = JSON.stringify(value);
        this.Data = util_1.strToU8(jsonStr);
    };
    return Payload;
}(api_1.api.Payload));
exports.Payload = Payload;
var Response = (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Response.prototype.getUidsMap = function () {
        if (!this.uidsMap) {
            this.uidsMap = new Map(Object.entries(this.uids));
        }
        return this.uidsMap;
    };
    Response.prototype.getJson = function () {
        var jsonStr;
        var value = this.json;
        if (value instanceof Uint8Array) {
            jsonStr = util_1.u8ToStr(value);
        }
        else {
            jsonStr = util_1.b64ToStr(value);
        }
        return util_1.strToJson(jsonStr);
    };
    Response.prototype.getJson_asB64 = function () {
        var value = this.json;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Response.prototype.getJson_asU8 = function () {
        var value = this.json;
        return value;
    };
    Response.prototype.setJson = function (value) {
        if (value instanceof Uint8Array) {
            this.json = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.json = util_1.strToU8(value.toString());
            return;
        }
        var jsonStr = JSON.stringify(value);
        this.json = util_1.strToU8(jsonStr);
    };
    return Response;
}(api_1.api.Response));
exports.Response = Response;
var Mutation = (function (_super) {
    __extends(Mutation, _super);
    function Mutation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mutation.prototype.getSetJson = function () {
        var jsonStr;
        var value = this.setJson;
        if (value instanceof Uint8Array) {
            jsonStr = util_1.u8ToStr(value);
        }
        else {
            jsonStr = util_1.b64ToStr(value);
        }
        return util_1.strToJson(jsonStr);
    };
    Mutation.prototype.getSetJson_asB64 = function () {
        var value = this.setJson;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Mutation.prototype.getSetJson_asU8 = function () {
        var value = this.setJson;
        return value;
    };
    Mutation.prototype.setSetJson = function (value) {
        if (value instanceof Uint8Array) {
            this.setJson = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.setJson = util_1.strToU8(value.toString());
            return;
        }
        var jsonStr = JSON.stringify(value);
        this.setJson = util_1.strToU8(jsonStr);
    };
    Mutation.prototype.getDeleteJson = function () {
        var jsonStr;
        var value = this.deleteJson;
        if (value instanceof Uint8Array) {
            jsonStr = util_1.u8ToStr(value);
        }
        else {
            jsonStr = util_1.b64ToStr(value);
        }
        return util_1.strToJson(jsonStr);
    };
    Mutation.prototype.getDeleteJson_asB64 = function () {
        var value = this.deleteJson;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Mutation.prototype.getDeleteJson_asU8 = function () {
        var value = this.deleteJson;
        return value;
    };
    Mutation.prototype.setDeleteJson = function (value) {
        if (value instanceof Uint8Array) {
            this.deleteJson = value;
            return;
        }
        if (typeof value === "string" || value instanceof String) {
            this.deleteJson = util_1.strToU8(value.toString());
            return;
        }
        var jsonStr = JSON.stringify(value);
        this.deleteJson = util_1.strToU8(jsonStr);
    };
    Mutation.prototype.getSetNquads = function () {
        var value = this.setNquads;
        if (value instanceof Uint8Array) {
            return util_1.u8ToStr(value);
        }
        return util_1.b64ToStr(value);
    };
    Mutation.prototype.getSetNquads_asB64 = function () {
        var value = this.setNquads;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Mutation.prototype.getSetNquads_asU8 = function () {
        var value = this.setNquads;
        return value;
    };
    Mutation.prototype.setSetNquads = function (value) {
        if (value instanceof Uint8Array) {
            this.setNquads = value;
            return;
        }
        if (util_1.isBase64(value)) {
            this.setNquads = new Uint8Array();
            pbjs.util.base64.decode(value, this.setNquads, 0);
            return;
        }
        this.setNquads = util_1.strToU8(value);
    };
    Mutation.prototype.getDelNquads = function () {
        var value = this.delNquads;
        if (value instanceof Uint8Array) {
            return util_1.u8ToStr(value);
        }
        return util_1.b64ToStr(value);
    };
    Mutation.prototype.getDelNquads_asB64 = function () {
        var value = this.delNquads;
        return pbjs.util.base64.encode(value, 0, value.byteLength);
    };
    Mutation.prototype.getDelNquads_asU8 = function () {
        var value = this.delNquads;
        return value;
    };
    Mutation.prototype.setDelNquads = function (value) {
        if (value instanceof Uint8Array) {
            this.delNquads = value;
            return;
        }
        if (util_1.isBase64(value)) {
            this.delNquads = new Uint8Array();
            pbjs.util.base64.decode(value, this.delNquads, 0);
            return;
        }
        this.delNquads = util_1.strToU8(value);
    };
    return Mutation;
}(api_1.api.Mutation));
exports.Mutation = Mutation;
