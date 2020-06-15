/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.api = (function() {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    var api = {};

    api.Dgraph = (function() {

        /**
         * Constructs a new Dgraph service.
         * @memberof api
         * @classdesc Represents a Dgraph
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Dgraph(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Dgraph.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Dgraph;

        /**
         * Creates new Dgraph service using the specified rpc implementation.
         * @function create
         * @memberof api.Dgraph
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Dgraph} RPC service. Useful where requests and/or responses are streamed.
         */
        Dgraph.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.Dgraph#login}.
         * @memberof api.Dgraph
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.Response} [response] Response
         */

        /**
         * Calls Login.
         * @function login
         * @memberof api.Dgraph
         * @instance
         * @param {api.ILoginRequest} request LoginRequest message or plain object
         * @param {api.Dgraph.LoginCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Dgraph.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.api.LoginRequest, $root.api.Response, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof api.Dgraph
         * @instance
         * @param {api.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<api.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Dgraph#query}.
         * @memberof api.Dgraph
         * @typedef QueryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.Response} [response] Response
         */

        /**
         * Calls Query.
         * @function query
         * @memberof api.Dgraph
         * @instance
         * @param {api.IRequest} request Request message or plain object
         * @param {api.Dgraph.QueryCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Dgraph.prototype.query = function query(request, callback) {
            return this.rpcCall(query, $root.api.Request, $root.api.Response, request, callback);
        }, "name", { value: "Query" });

        /**
         * Calls Query.
         * @function query
         * @memberof api.Dgraph
         * @instance
         * @param {api.IRequest} request Request message or plain object
         * @returns {Promise<api.Response>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Dgraph#alter}.
         * @memberof api.Dgraph
         * @typedef AlterCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.Payload} [response] Payload
         */

        /**
         * Calls Alter.
         * @function alter
         * @memberof api.Dgraph
         * @instance
         * @param {api.IOperation} request Operation message or plain object
         * @param {api.Dgraph.AlterCallback} callback Node-style callback called with the error, if any, and Payload
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Dgraph.prototype.alter = function alter(request, callback) {
            return this.rpcCall(alter, $root.api.Operation, $root.api.Payload, request, callback);
        }, "name", { value: "Alter" });

        /**
         * Calls Alter.
         * @function alter
         * @memberof api.Dgraph
         * @instance
         * @param {api.IOperation} request Operation message or plain object
         * @returns {Promise<api.Payload>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Dgraph#commitOrAbort}.
         * @memberof api.Dgraph
         * @typedef CommitOrAbortCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.TxnContext} [response] TxnContext
         */

        /**
         * Calls CommitOrAbort.
         * @function commitOrAbort
         * @memberof api.Dgraph
         * @instance
         * @param {api.ITxnContext} request TxnContext message or plain object
         * @param {api.Dgraph.CommitOrAbortCallback} callback Node-style callback called with the error, if any, and TxnContext
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Dgraph.prototype.commitOrAbort = function commitOrAbort(request, callback) {
            return this.rpcCall(commitOrAbort, $root.api.TxnContext, $root.api.TxnContext, request, callback);
        }, "name", { value: "CommitOrAbort" });

        /**
         * Calls CommitOrAbort.
         * @function commitOrAbort
         * @memberof api.Dgraph
         * @instance
         * @param {api.ITxnContext} request TxnContext message or plain object
         * @returns {Promise<api.TxnContext>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.Dgraph#checkVersion}.
         * @memberof api.Dgraph
         * @typedef CheckVersionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.Version} [response] Version
         */

        /**
         * Calls CheckVersion.
         * @function checkVersion
         * @memberof api.Dgraph
         * @instance
         * @param {api.ICheck} request Check message or plain object
         * @param {api.Dgraph.CheckVersionCallback} callback Node-style callback called with the error, if any, and Version
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Dgraph.prototype.checkVersion = function checkVersion(request, callback) {
            return this.rpcCall(checkVersion, $root.api.Check, $root.api.Version, request, callback);
        }, "name", { value: "CheckVersion" });

        /**
         * Calls CheckVersion.
         * @function checkVersion
         * @memberof api.Dgraph
         * @instance
         * @param {api.ICheck} request Check message or plain object
         * @returns {Promise<api.Version>} Promise
         * @variation 2
         */

        return Dgraph;
    })();

    api.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof api
         * @interface IRequest
         * @property {number|Long|null} [startTs] Request startTs
         * @property {string|null} [query] Request query
         * @property {Object.<string,string>|null} [vars] Request vars
         * @property {boolean|null} [readOnly] Request readOnly
         * @property {boolean|null} [bestEffort] Request bestEffort
         * @property {Array.<api.IMutation>|null} [mutations] Request mutations
         * @property {boolean|null} [commitNow] Request commitNow
         */

        /**
         * Constructs a new Request.
         * @memberof api
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {api.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            this.vars = {};
            this.mutations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request startTs.
         * @member {number|Long} startTs
         * @memberof api.Request
         * @instance
         */
        Request.prototype.startTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Request query.
         * @member {string} query
         * @memberof api.Request
         * @instance
         */
        Request.prototype.query = "";

        /**
         * Request vars.
         * @member {Object.<string,string>} vars
         * @memberof api.Request
         * @instance
         */
        Request.prototype.vars = $util.emptyObject;

        /**
         * Request readOnly.
         * @member {boolean} readOnly
         * @memberof api.Request
         * @instance
         */
        Request.prototype.readOnly = false;

        /**
         * Request bestEffort.
         * @member {boolean} bestEffort
         * @memberof api.Request
         * @instance
         */
        Request.prototype.bestEffort = false;

        /**
         * Request mutations.
         * @member {Array.<api.IMutation>} mutations
         * @memberof api.Request
         * @instance
         */
        Request.prototype.mutations = $util.emptyArray;

        /**
         * Request commitNow.
         * @member {boolean} commitNow
         * @memberof api.Request
         * @instance
         */
        Request.prototype.commitNow = false;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof api.Request
         * @static
         * @param {api.IRequest=} [properties] Properties to set
         * @returns {api.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link api.Request.verify|verify} messages.
         * @function encode
         * @memberof api.Request
         * @static
         * @param {api.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTs != null && Object.hasOwnProperty.call(message, "startTs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startTs);
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.query);
            if (message.vars != null && Object.hasOwnProperty.call(message, "vars"))
                for (var keys = Object.keys(message.vars), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.vars[keys[i]]).ldelim();
            if (message.readOnly != null && Object.hasOwnProperty.call(message, "readOnly"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.readOnly);
            if (message.bestEffort != null && Object.hasOwnProperty.call(message, "bestEffort"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.bestEffort);
            if (message.mutations != null && message.mutations.length)
                for (var i = 0; i < message.mutations.length; ++i)
                    $root.api.Mutation.encode(message.mutations[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.commitNow != null && Object.hasOwnProperty.call(message, "commitNow"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.commitNow);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link api.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Request
         * @static
         * @param {api.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof api.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Request(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startTs = reader.uint64();
                    break;
                case 4:
                    message.query = reader.string();
                    break;
                case 5:
                    reader.skip().pos++;
                    if (message.vars === $util.emptyObject)
                        message.vars = {};
                    key = reader.string();
                    reader.pos++;
                    message.vars[key] = reader.string();
                    break;
                case 6:
                    message.readOnly = reader.bool();
                    break;
                case 7:
                    message.bestEffort = reader.bool();
                    break;
                case 12:
                    if (!(message.mutations && message.mutations.length))
                        message.mutations = [];
                    message.mutations.push($root.api.Mutation.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.commitNow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof api.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTs != null && message.hasOwnProperty("startTs"))
                if (!$util.isInteger(message.startTs) && !(message.startTs && $util.isInteger(message.startTs.low) && $util.isInteger(message.startTs.high)))
                    return "startTs: integer|Long expected";
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            if (message.vars != null && message.hasOwnProperty("vars")) {
                if (!$util.isObject(message.vars))
                    return "vars: object expected";
                var key = Object.keys(message.vars);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.vars[key[i]]))
                        return "vars: string{k:string} expected";
            }
            if (message.readOnly != null && message.hasOwnProperty("readOnly"))
                if (typeof message.readOnly !== "boolean")
                    return "readOnly: boolean expected";
            if (message.bestEffort != null && message.hasOwnProperty("bestEffort"))
                if (typeof message.bestEffort !== "boolean")
                    return "bestEffort: boolean expected";
            if (message.mutations != null && message.hasOwnProperty("mutations")) {
                if (!Array.isArray(message.mutations))
                    return "mutations: array expected";
                for (var i = 0; i < message.mutations.length; ++i) {
                    var error = $root.api.Mutation.verify(message.mutations[i]);
                    if (error)
                        return "mutations." + error;
                }
            }
            if (message.commitNow != null && message.hasOwnProperty("commitNow"))
                if (typeof message.commitNow !== "boolean")
                    return "commitNow: boolean expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Request)
                return object;
            var message = new $root.api.Request();
            if (object.startTs != null)
                if ($util.Long)
                    (message.startTs = $util.Long.fromValue(object.startTs)).unsigned = true;
                else if (typeof object.startTs === "string")
                    message.startTs = parseInt(object.startTs, 10);
                else if (typeof object.startTs === "number")
                    message.startTs = object.startTs;
                else if (typeof object.startTs === "object")
                    message.startTs = new $util.LongBits(object.startTs.low >>> 0, object.startTs.high >>> 0).toNumber(true);
            if (object.query != null)
                message.query = String(object.query);
            if (object.vars) {
                if (typeof object.vars !== "object")
                    throw TypeError(".api.Request.vars: object expected");
                message.vars = {};
                for (var keys = Object.keys(object.vars), i = 0; i < keys.length; ++i)
                    message.vars[keys[i]] = String(object.vars[keys[i]]);
            }
            if (object.readOnly != null)
                message.readOnly = Boolean(object.readOnly);
            if (object.bestEffort != null)
                message.bestEffort = Boolean(object.bestEffort);
            if (object.mutations) {
                if (!Array.isArray(object.mutations))
                    throw TypeError(".api.Request.mutations: array expected");
                message.mutations = [];
                for (var i = 0; i < object.mutations.length; ++i) {
                    if (typeof object.mutations[i] !== "object")
                        throw TypeError(".api.Request.mutations: object expected");
                    message.mutations[i] = $root.api.Mutation.fromObject(object.mutations[i]);
                }
            }
            if (object.commitNow != null)
                message.commitNow = Boolean(object.commitNow);
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Request
         * @static
         * @param {api.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mutations = [];
            if (options.objects || options.defaults)
                object.vars = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.startTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTs = options.longs === String ? "0" : 0;
                object.query = "";
                object.readOnly = false;
                object.bestEffort = false;
                object.commitNow = false;
            }
            if (message.startTs != null && message.hasOwnProperty("startTs"))
                if (typeof message.startTs === "number")
                    object.startTs = options.longs === String ? String(message.startTs) : message.startTs;
                else
                    object.startTs = options.longs === String ? $util.Long.prototype.toString.call(message.startTs) : options.longs === Number ? new $util.LongBits(message.startTs.low >>> 0, message.startTs.high >>> 0).toNumber(true) : message.startTs;
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = message.query;
            var keys2;
            if (message.vars && (keys2 = Object.keys(message.vars)).length) {
                object.vars = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.vars[keys2[j]] = message.vars[keys2[j]];
            }
            if (message.readOnly != null && message.hasOwnProperty("readOnly"))
                object.readOnly = message.readOnly;
            if (message.bestEffort != null && message.hasOwnProperty("bestEffort"))
                object.bestEffort = message.bestEffort;
            if (message.mutations && message.mutations.length) {
                object.mutations = [];
                for (var j = 0; j < message.mutations.length; ++j)
                    object.mutations[j] = $root.api.Mutation.toObject(message.mutations[j], options);
            }
            if (message.commitNow != null && message.hasOwnProperty("commitNow"))
                object.commitNow = message.commitNow;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof api.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    api.Uids = (function() {

        /**
         * Properties of an Uids.
         * @memberof api
         * @interface IUids
         * @property {Array.<string>|null} [uids] Uids uids
         */

        /**
         * Constructs a new Uids.
         * @memberof api
         * @classdesc Represents an Uids.
         * @implements IUids
         * @constructor
         * @param {api.IUids=} [properties] Properties to set
         */
        function Uids(properties) {
            this.uids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Uids uids.
         * @member {Array.<string>} uids
         * @memberof api.Uids
         * @instance
         */
        Uids.prototype.uids = $util.emptyArray;

        /**
         * Creates a new Uids instance using the specified properties.
         * @function create
         * @memberof api.Uids
         * @static
         * @param {api.IUids=} [properties] Properties to set
         * @returns {api.Uids} Uids instance
         */
        Uids.create = function create(properties) {
            return new Uids(properties);
        };

        /**
         * Encodes the specified Uids message. Does not implicitly {@link api.Uids.verify|verify} messages.
         * @function encode
         * @memberof api.Uids
         * @static
         * @param {api.IUids} message Uids message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Uids.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uids != null && message.uids.length)
                for (var i = 0; i < message.uids.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uids[i]);
            return writer;
        };

        /**
         * Encodes the specified Uids message, length delimited. Does not implicitly {@link api.Uids.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Uids
         * @static
         * @param {api.IUids} message Uids message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Uids.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Uids message from the specified reader or buffer.
         * @function decode
         * @memberof api.Uids
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Uids} Uids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Uids.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Uids();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.uids && message.uids.length))
                        message.uids = [];
                    message.uids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Uids message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Uids
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Uids} Uids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Uids.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Uids message.
         * @function verify
         * @memberof api.Uids
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Uids.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uids != null && message.hasOwnProperty("uids")) {
                if (!Array.isArray(message.uids))
                    return "uids: array expected";
                for (var i = 0; i < message.uids.length; ++i)
                    if (!$util.isString(message.uids[i]))
                        return "uids: string[] expected";
            }
            return null;
        };

        /**
         * Creates an Uids message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Uids
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Uids} Uids
         */
        Uids.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Uids)
                return object;
            var message = new $root.api.Uids();
            if (object.uids) {
                if (!Array.isArray(object.uids))
                    throw TypeError(".api.Uids.uids: array expected");
                message.uids = [];
                for (var i = 0; i < object.uids.length; ++i)
                    message.uids[i] = String(object.uids[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Uids message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Uids
         * @static
         * @param {api.Uids} message Uids
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Uids.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.uids = [];
            if (message.uids && message.uids.length) {
                object.uids = [];
                for (var j = 0; j < message.uids.length; ++j)
                    object.uids[j] = message.uids[j];
            }
            return object;
        };

        /**
         * Converts this Uids to JSON.
         * @function toJSON
         * @memberof api.Uids
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Uids.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Uids;
    })();

    api.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof api
         * @interface IResponse
         * @property {Uint8Array|null} [json] Response json
         * @property {api.ITxnContext|null} [txn] Response txn
         * @property {api.ILatency|null} [latency] Response latency
         * @property {api.IMetrics|null} [metrics] Response metrics
         * @property {Object.<string,string>|null} [uids] Response uids
         */

        /**
         * Constructs a new Response.
         * @memberof api
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {api.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            this.uids = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response json.
         * @member {Uint8Array} json
         * @memberof api.Response
         * @instance
         */
        Response.prototype.json = $util.newBuffer([]);

        /**
         * Response txn.
         * @member {api.ITxnContext|null|undefined} txn
         * @memberof api.Response
         * @instance
         */
        Response.prototype.txn = null;

        /**
         * Response latency.
         * @member {api.ILatency|null|undefined} latency
         * @memberof api.Response
         * @instance
         */
        Response.prototype.latency = null;

        /**
         * Response metrics.
         * @member {api.IMetrics|null|undefined} metrics
         * @memberof api.Response
         * @instance
         */
        Response.prototype.metrics = null;

        /**
         * Response uids.
         * @member {Object.<string,string>} uids
         * @memberof api.Response
         * @instance
         */
        Response.prototype.uids = $util.emptyObject;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof api.Response
         * @static
         * @param {api.IResponse=} [properties] Properties to set
         * @returns {api.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link api.Response.verify|verify} messages.
         * @function encode
         * @memberof api.Response
         * @static
         * @param {api.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.json);
            if (message.txn != null && Object.hasOwnProperty.call(message, "txn"))
                $root.api.TxnContext.encode(message.txn, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.latency != null && Object.hasOwnProperty.call(message, "latency"))
                $root.api.Latency.encode(message.latency, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.metrics != null && Object.hasOwnProperty.call(message, "metrics"))
                $root.api.Metrics.encode(message.metrics, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.uids != null && Object.hasOwnProperty.call(message, "uids"))
                for (var keys = Object.keys(message.uids), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.uids[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link api.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Response
         * @static
         * @param {api.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof api.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Response(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.json = reader.bytes();
                    break;
                case 2:
                    message.txn = $root.api.TxnContext.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.latency = $root.api.Latency.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.metrics = $root.api.Metrics.decode(reader, reader.uint32());
                    break;
                case 12:
                    reader.skip().pos++;
                    if (message.uids === $util.emptyObject)
                        message.uids = {};
                    key = reader.string();
                    reader.pos++;
                    message.uids[key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof api.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (!(message.json && typeof message.json.length === "number" || $util.isString(message.json)))
                    return "json: buffer expected";
            if (message.txn != null && message.hasOwnProperty("txn")) {
                var error = $root.api.TxnContext.verify(message.txn);
                if (error)
                    return "txn." + error;
            }
            if (message.latency != null && message.hasOwnProperty("latency")) {
                var error = $root.api.Latency.verify(message.latency);
                if (error)
                    return "latency." + error;
            }
            if (message.metrics != null && message.hasOwnProperty("metrics")) {
                var error = $root.api.Metrics.verify(message.metrics);
                if (error)
                    return "metrics." + error;
            }
            if (message.uids != null && message.hasOwnProperty("uids")) {
                if (!$util.isObject(message.uids))
                    return "uids: object expected";
                var key = Object.keys(message.uids);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.uids[key[i]]))
                        return "uids: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Response)
                return object;
            var message = new $root.api.Response();
            if (object.json != null)
                if (typeof object.json === "string")
                    $util.base64.decode(object.json, message.json = $util.newBuffer($util.base64.length(object.json)), 0);
                else if (object.json.length)
                    message.json = object.json;
            if (object.txn != null) {
                if (typeof object.txn !== "object")
                    throw TypeError(".api.Response.txn: object expected");
                message.txn = $root.api.TxnContext.fromObject(object.txn);
            }
            if (object.latency != null) {
                if (typeof object.latency !== "object")
                    throw TypeError(".api.Response.latency: object expected");
                message.latency = $root.api.Latency.fromObject(object.latency);
            }
            if (object.metrics != null) {
                if (typeof object.metrics !== "object")
                    throw TypeError(".api.Response.metrics: object expected");
                message.metrics = $root.api.Metrics.fromObject(object.metrics);
            }
            if (object.uids) {
                if (typeof object.uids !== "object")
                    throw TypeError(".api.Response.uids: object expected");
                message.uids = {};
                for (var keys = Object.keys(object.uids), i = 0; i < keys.length; ++i)
                    message.uids[keys[i]] = String(object.uids[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Response
         * @static
         * @param {api.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.uids = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.json = "";
                else {
                    object.json = [];
                    if (options.bytes !== Array)
                        object.json = $util.newBuffer(object.json);
                }
                object.txn = null;
                object.latency = null;
                object.metrics = null;
            }
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = options.bytes === String ? $util.base64.encode(message.json, 0, message.json.length) : options.bytes === Array ? Array.prototype.slice.call(message.json) : message.json;
            if (message.txn != null && message.hasOwnProperty("txn"))
                object.txn = $root.api.TxnContext.toObject(message.txn, options);
            if (message.latency != null && message.hasOwnProperty("latency"))
                object.latency = $root.api.Latency.toObject(message.latency, options);
            if (message.metrics != null && message.hasOwnProperty("metrics"))
                object.metrics = $root.api.Metrics.toObject(message.metrics, options);
            var keys2;
            if (message.uids && (keys2 = Object.keys(message.uids)).length) {
                object.uids = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.uids[keys2[j]] = message.uids[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof api.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    api.Mutation = (function() {

        /**
         * Properties of a Mutation.
         * @memberof api
         * @interface IMutation
         * @property {Uint8Array|null} [setJson] Mutation setJson
         * @property {Uint8Array|null} [deleteJson] Mutation deleteJson
         * @property {Uint8Array|null} [setNquads] Mutation setNquads
         * @property {Uint8Array|null} [delNquads] Mutation delNquads
         * @property {Array.<api.INQuad>|null} [set] Mutation set
         * @property {Array.<api.INQuad>|null} [del] Mutation del
         * @property {string|null} [cond] Mutation cond
         * @property {boolean|null} [commitNow] Mutation commitNow
         */

        /**
         * Constructs a new Mutation.
         * @memberof api
         * @classdesc Represents a Mutation.
         * @implements IMutation
         * @constructor
         * @param {api.IMutation=} [properties] Properties to set
         */
        function Mutation(properties) {
            this.set = [];
            this.del = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mutation setJson.
         * @member {Uint8Array} setJson
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.setJson = $util.newBuffer([]);

        /**
         * Mutation deleteJson.
         * @member {Uint8Array} deleteJson
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.deleteJson = $util.newBuffer([]);

        /**
         * Mutation setNquads.
         * @member {Uint8Array} setNquads
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.setNquads = $util.newBuffer([]);

        /**
         * Mutation delNquads.
         * @member {Uint8Array} delNquads
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.delNquads = $util.newBuffer([]);

        /**
         * Mutation set.
         * @member {Array.<api.INQuad>} set
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.set = $util.emptyArray;

        /**
         * Mutation del.
         * @member {Array.<api.INQuad>} del
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.del = $util.emptyArray;

        /**
         * Mutation cond.
         * @member {string} cond
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.cond = "";

        /**
         * Mutation commitNow.
         * @member {boolean} commitNow
         * @memberof api.Mutation
         * @instance
         */
        Mutation.prototype.commitNow = false;

        /**
         * Creates a new Mutation instance using the specified properties.
         * @function create
         * @memberof api.Mutation
         * @static
         * @param {api.IMutation=} [properties] Properties to set
         * @returns {api.Mutation} Mutation instance
         */
        Mutation.create = function create(properties) {
            return new Mutation(properties);
        };

        /**
         * Encodes the specified Mutation message. Does not implicitly {@link api.Mutation.verify|verify} messages.
         * @function encode
         * @memberof api.Mutation
         * @static
         * @param {api.IMutation} message Mutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mutation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setJson != null && Object.hasOwnProperty.call(message, "setJson"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.setJson);
            if (message.deleteJson != null && Object.hasOwnProperty.call(message, "deleteJson"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.deleteJson);
            if (message.setNquads != null && Object.hasOwnProperty.call(message, "setNquads"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.setNquads);
            if (message.delNquads != null && Object.hasOwnProperty.call(message, "delNquads"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.delNquads);
            if (message.set != null && message.set.length)
                for (var i = 0; i < message.set.length; ++i)
                    $root.api.NQuad.encode(message.set[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.del != null && message.del.length)
                for (var i = 0; i < message.del.length; ++i)
                    $root.api.NQuad.encode(message.del[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.cond != null && Object.hasOwnProperty.call(message, "cond"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.cond);
            if (message.commitNow != null && Object.hasOwnProperty.call(message, "commitNow"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.commitNow);
            return writer;
        };

        /**
         * Encodes the specified Mutation message, length delimited. Does not implicitly {@link api.Mutation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Mutation
         * @static
         * @param {api.IMutation} message Mutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mutation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mutation message from the specified reader or buffer.
         * @function decode
         * @memberof api.Mutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Mutation} Mutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mutation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Mutation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.setJson = reader.bytes();
                    break;
                case 2:
                    message.deleteJson = reader.bytes();
                    break;
                case 3:
                    message.setNquads = reader.bytes();
                    break;
                case 4:
                    message.delNquads = reader.bytes();
                    break;
                case 5:
                    if (!(message.set && message.set.length))
                        message.set = [];
                    message.set.push($root.api.NQuad.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.del && message.del.length))
                        message.del = [];
                    message.del.push($root.api.NQuad.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.cond = reader.string();
                    break;
                case 14:
                    message.commitNow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Mutation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Mutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Mutation} Mutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mutation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mutation message.
         * @function verify
         * @memberof api.Mutation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mutation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.setJson != null && message.hasOwnProperty("setJson"))
                if (!(message.setJson && typeof message.setJson.length === "number" || $util.isString(message.setJson)))
                    return "setJson: buffer expected";
            if (message.deleteJson != null && message.hasOwnProperty("deleteJson"))
                if (!(message.deleteJson && typeof message.deleteJson.length === "number" || $util.isString(message.deleteJson)))
                    return "deleteJson: buffer expected";
            if (message.setNquads != null && message.hasOwnProperty("setNquads"))
                if (!(message.setNquads && typeof message.setNquads.length === "number" || $util.isString(message.setNquads)))
                    return "setNquads: buffer expected";
            if (message.delNquads != null && message.hasOwnProperty("delNquads"))
                if (!(message.delNquads && typeof message.delNquads.length === "number" || $util.isString(message.delNquads)))
                    return "delNquads: buffer expected";
            if (message.set != null && message.hasOwnProperty("set")) {
                if (!Array.isArray(message.set))
                    return "set: array expected";
                for (var i = 0; i < message.set.length; ++i) {
                    var error = $root.api.NQuad.verify(message.set[i]);
                    if (error)
                        return "set." + error;
                }
            }
            if (message.del != null && message.hasOwnProperty("del")) {
                if (!Array.isArray(message.del))
                    return "del: array expected";
                for (var i = 0; i < message.del.length; ++i) {
                    var error = $root.api.NQuad.verify(message.del[i]);
                    if (error)
                        return "del." + error;
                }
            }
            if (message.cond != null && message.hasOwnProperty("cond"))
                if (!$util.isString(message.cond))
                    return "cond: string expected";
            if (message.commitNow != null && message.hasOwnProperty("commitNow"))
                if (typeof message.commitNow !== "boolean")
                    return "commitNow: boolean expected";
            return null;
        };

        /**
         * Creates a Mutation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Mutation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Mutation} Mutation
         */
        Mutation.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Mutation)
                return object;
            var message = new $root.api.Mutation();
            if (object.setJson != null)
                if (typeof object.setJson === "string")
                    $util.base64.decode(object.setJson, message.setJson = $util.newBuffer($util.base64.length(object.setJson)), 0);
                else if (object.setJson.length)
                    message.setJson = object.setJson;
            if (object.deleteJson != null)
                if (typeof object.deleteJson === "string")
                    $util.base64.decode(object.deleteJson, message.deleteJson = $util.newBuffer($util.base64.length(object.deleteJson)), 0);
                else if (object.deleteJson.length)
                    message.deleteJson = object.deleteJson;
            if (object.setNquads != null)
                if (typeof object.setNquads === "string")
                    $util.base64.decode(object.setNquads, message.setNquads = $util.newBuffer($util.base64.length(object.setNquads)), 0);
                else if (object.setNquads.length)
                    message.setNquads = object.setNquads;
            if (object.delNquads != null)
                if (typeof object.delNquads === "string")
                    $util.base64.decode(object.delNquads, message.delNquads = $util.newBuffer($util.base64.length(object.delNquads)), 0);
                else if (object.delNquads.length)
                    message.delNquads = object.delNquads;
            if (object.set) {
                if (!Array.isArray(object.set))
                    throw TypeError(".api.Mutation.set: array expected");
                message.set = [];
                for (var i = 0; i < object.set.length; ++i) {
                    if (typeof object.set[i] !== "object")
                        throw TypeError(".api.Mutation.set: object expected");
                    message.set[i] = $root.api.NQuad.fromObject(object.set[i]);
                }
            }
            if (object.del) {
                if (!Array.isArray(object.del))
                    throw TypeError(".api.Mutation.del: array expected");
                message.del = [];
                for (var i = 0; i < object.del.length; ++i) {
                    if (typeof object.del[i] !== "object")
                        throw TypeError(".api.Mutation.del: object expected");
                    message.del[i] = $root.api.NQuad.fromObject(object.del[i]);
                }
            }
            if (object.cond != null)
                message.cond = String(object.cond);
            if (object.commitNow != null)
                message.commitNow = Boolean(object.commitNow);
            return message;
        };

        /**
         * Creates a plain object from a Mutation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Mutation
         * @static
         * @param {api.Mutation} message Mutation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mutation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.set = [];
                object.del = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.setJson = "";
                else {
                    object.setJson = [];
                    if (options.bytes !== Array)
                        object.setJson = $util.newBuffer(object.setJson);
                }
                if (options.bytes === String)
                    object.deleteJson = "";
                else {
                    object.deleteJson = [];
                    if (options.bytes !== Array)
                        object.deleteJson = $util.newBuffer(object.deleteJson);
                }
                if (options.bytes === String)
                    object.setNquads = "";
                else {
                    object.setNquads = [];
                    if (options.bytes !== Array)
                        object.setNquads = $util.newBuffer(object.setNquads);
                }
                if (options.bytes === String)
                    object.delNquads = "";
                else {
                    object.delNquads = [];
                    if (options.bytes !== Array)
                        object.delNquads = $util.newBuffer(object.delNquads);
                }
                object.cond = "";
                object.commitNow = false;
            }
            if (message.setJson != null && message.hasOwnProperty("setJson"))
                object.setJson = options.bytes === String ? $util.base64.encode(message.setJson, 0, message.setJson.length) : options.bytes === Array ? Array.prototype.slice.call(message.setJson) : message.setJson;
            if (message.deleteJson != null && message.hasOwnProperty("deleteJson"))
                object.deleteJson = options.bytes === String ? $util.base64.encode(message.deleteJson, 0, message.deleteJson.length) : options.bytes === Array ? Array.prototype.slice.call(message.deleteJson) : message.deleteJson;
            if (message.setNquads != null && message.hasOwnProperty("setNquads"))
                object.setNquads = options.bytes === String ? $util.base64.encode(message.setNquads, 0, message.setNquads.length) : options.bytes === Array ? Array.prototype.slice.call(message.setNquads) : message.setNquads;
            if (message.delNquads != null && message.hasOwnProperty("delNquads"))
                object.delNquads = options.bytes === String ? $util.base64.encode(message.delNquads, 0, message.delNquads.length) : options.bytes === Array ? Array.prototype.slice.call(message.delNquads) : message.delNquads;
            if (message.set && message.set.length) {
                object.set = [];
                for (var j = 0; j < message.set.length; ++j)
                    object.set[j] = $root.api.NQuad.toObject(message.set[j], options);
            }
            if (message.del && message.del.length) {
                object.del = [];
                for (var j = 0; j < message.del.length; ++j)
                    object.del[j] = $root.api.NQuad.toObject(message.del[j], options);
            }
            if (message.cond != null && message.hasOwnProperty("cond"))
                object.cond = message.cond;
            if (message.commitNow != null && message.hasOwnProperty("commitNow"))
                object.commitNow = message.commitNow;
            return object;
        };

        /**
         * Converts this Mutation to JSON.
         * @function toJSON
         * @memberof api.Mutation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mutation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Mutation;
    })();

    api.Operation = (function() {

        /**
         * Properties of an Operation.
         * @memberof api
         * @interface IOperation
         * @property {string|null} [schema] Operation schema
         * @property {string|null} [dropAttr] Operation dropAttr
         * @property {boolean|null} [dropAll] Operation dropAll
         * @property {api.Operation.DropOp|null} [dropOp] Operation dropOp
         * @property {string|null} [dropValue] Operation dropValue
         * @property {boolean|null} [runInBackground] Operation runInBackground
         */

        /**
         * Constructs a new Operation.
         * @memberof api
         * @classdesc Represents an Operation.
         * @implements IOperation
         * @constructor
         * @param {api.IOperation=} [properties] Properties to set
         */
        function Operation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operation schema.
         * @member {string} schema
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.schema = "";

        /**
         * Operation dropAttr.
         * @member {string} dropAttr
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.dropAttr = "";

        /**
         * Operation dropAll.
         * @member {boolean} dropAll
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.dropAll = false;

        /**
         * Operation dropOp.
         * @member {api.Operation.DropOp} dropOp
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.dropOp = 0;

        /**
         * Operation dropValue.
         * @member {string} dropValue
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.dropValue = "";

        /**
         * Operation runInBackground.
         * @member {boolean} runInBackground
         * @memberof api.Operation
         * @instance
         */
        Operation.prototype.runInBackground = false;

        /**
         * Creates a new Operation instance using the specified properties.
         * @function create
         * @memberof api.Operation
         * @static
         * @param {api.IOperation=} [properties] Properties to set
         * @returns {api.Operation} Operation instance
         */
        Operation.create = function create(properties) {
            return new Operation(properties);
        };

        /**
         * Encodes the specified Operation message. Does not implicitly {@link api.Operation.verify|verify} messages.
         * @function encode
         * @memberof api.Operation
         * @static
         * @param {api.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.schema);
            if (message.dropAttr != null && Object.hasOwnProperty.call(message, "dropAttr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dropAttr);
            if (message.dropAll != null && Object.hasOwnProperty.call(message, "dropAll"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.dropAll);
            if (message.dropOp != null && Object.hasOwnProperty.call(message, "dropOp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dropOp);
            if (message.dropValue != null && Object.hasOwnProperty.call(message, "dropValue"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.dropValue);
            if (message.runInBackground != null && Object.hasOwnProperty.call(message, "runInBackground"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.runInBackground);
            return writer;
        };

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link api.Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Operation
         * @static
         * @param {api.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof api.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.schema = reader.string();
                    break;
                case 2:
                    message.dropAttr = reader.string();
                    break;
                case 3:
                    message.dropAll = reader.bool();
                    break;
                case 4:
                    message.dropOp = reader.int32();
                    break;
                case 5:
                    message.dropValue = reader.string();
                    break;
                case 6:
                    message.runInBackground = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof api.Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.schema != null && message.hasOwnProperty("schema"))
                if (!$util.isString(message.schema))
                    return "schema: string expected";
            if (message.dropAttr != null && message.hasOwnProperty("dropAttr"))
                if (!$util.isString(message.dropAttr))
                    return "dropAttr: string expected";
            if (message.dropAll != null && message.hasOwnProperty("dropAll"))
                if (typeof message.dropAll !== "boolean")
                    return "dropAll: boolean expected";
            if (message.dropOp != null && message.hasOwnProperty("dropOp"))
                switch (message.dropOp) {
                default:
                    return "dropOp: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.dropValue != null && message.hasOwnProperty("dropValue"))
                if (!$util.isString(message.dropValue))
                    return "dropValue: string expected";
            if (message.runInBackground != null && message.hasOwnProperty("runInBackground"))
                if (typeof message.runInBackground !== "boolean")
                    return "runInBackground: boolean expected";
            return null;
        };

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Operation} Operation
         */
        Operation.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Operation)
                return object;
            var message = new $root.api.Operation();
            if (object.schema != null)
                message.schema = String(object.schema);
            if (object.dropAttr != null)
                message.dropAttr = String(object.dropAttr);
            if (object.dropAll != null)
                message.dropAll = Boolean(object.dropAll);
            switch (object.dropOp) {
            case "NONE":
            case 0:
                message.dropOp = 0;
                break;
            case "ALL":
            case 1:
                message.dropOp = 1;
                break;
            case "DATA":
            case 2:
                message.dropOp = 2;
                break;
            case "ATTR":
            case 3:
                message.dropOp = 3;
                break;
            case "TYPE":
            case 4:
                message.dropOp = 4;
                break;
            }
            if (object.dropValue != null)
                message.dropValue = String(object.dropValue);
            if (object.runInBackground != null)
                message.runInBackground = Boolean(object.runInBackground);
            return message;
        };

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Operation
         * @static
         * @param {api.Operation} message Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.schema = "";
                object.dropAttr = "";
                object.dropAll = false;
                object.dropOp = options.enums === String ? "NONE" : 0;
                object.dropValue = "";
                object.runInBackground = false;
            }
            if (message.schema != null && message.hasOwnProperty("schema"))
                object.schema = message.schema;
            if (message.dropAttr != null && message.hasOwnProperty("dropAttr"))
                object.dropAttr = message.dropAttr;
            if (message.dropAll != null && message.hasOwnProperty("dropAll"))
                object.dropAll = message.dropAll;
            if (message.dropOp != null && message.hasOwnProperty("dropOp"))
                object.dropOp = options.enums === String ? $root.api.Operation.DropOp[message.dropOp] : message.dropOp;
            if (message.dropValue != null && message.hasOwnProperty("dropValue"))
                object.dropValue = message.dropValue;
            if (message.runInBackground != null && message.hasOwnProperty("runInBackground"))
                object.runInBackground = message.runInBackground;
            return object;
        };

        /**
         * Converts this Operation to JSON.
         * @function toJSON
         * @memberof api.Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DropOp enum.
         * @name api.Operation.DropOp
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} ALL=1 ALL value
         * @property {number} DATA=2 DATA value
         * @property {number} ATTR=3 ATTR value
         * @property {number} TYPE=4 TYPE value
         */
        Operation.DropOp = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "ALL"] = 1;
            values[valuesById[2] = "DATA"] = 2;
            values[valuesById[3] = "ATTR"] = 3;
            values[valuesById[4] = "TYPE"] = 4;
            return values;
        })();

        return Operation;
    })();

    api.Payload = (function() {

        /**
         * Properties of a Payload.
         * @memberof api
         * @interface IPayload
         * @property {Uint8Array|null} [Data] Payload Data
         */

        /**
         * Constructs a new Payload.
         * @memberof api
         * @classdesc Represents a Payload.
         * @implements IPayload
         * @constructor
         * @param {api.IPayload=} [properties] Properties to set
         */
        function Payload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Payload Data.
         * @member {Uint8Array} Data
         * @memberof api.Payload
         * @instance
         */
        Payload.prototype.Data = $util.newBuffer([]);

        /**
         * Creates a new Payload instance using the specified properties.
         * @function create
         * @memberof api.Payload
         * @static
         * @param {api.IPayload=} [properties] Properties to set
         * @returns {api.Payload} Payload instance
         */
        Payload.create = function create(properties) {
            return new Payload(properties);
        };

        /**
         * Encodes the specified Payload message. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @function encode
         * @memberof api.Payload
         * @static
         * @param {api.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
            return writer;
        };

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Payload
         * @static
         * @param {api.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @function decode
         * @memberof api.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Payload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Payload message.
         * @function verify
         * @memberof api.Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                    return "Data: buffer expected";
            return null;
        };

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Payload} Payload
         */
        Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Payload)
                return object;
            var message = new $root.api.Payload();
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            return message;
        };

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Payload
         * @static
         * @param {api.Payload} message Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            return object;
        };

        /**
         * Converts this Payload to JSON.
         * @function toJSON
         * @memberof api.Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Payload;
    })();

    api.TxnContext = (function() {

        /**
         * Properties of a TxnContext.
         * @memberof api
         * @interface ITxnContext
         * @property {number|Long|null} [startTs] TxnContext startTs
         * @property {number|Long|null} [commitTs] TxnContext commitTs
         * @property {boolean|null} [aborted] TxnContext aborted
         * @property {Array.<string>|null} [keys] TxnContext keys
         * @property {Array.<string>|null} [preds] TxnContext preds
         */

        /**
         * Constructs a new TxnContext.
         * @memberof api
         * @classdesc Represents a TxnContext.
         * @implements ITxnContext
         * @constructor
         * @param {api.ITxnContext=} [properties] Properties to set
         */
        function TxnContext(properties) {
            this.keys = [];
            this.preds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TxnContext startTs.
         * @member {number|Long} startTs
         * @memberof api.TxnContext
         * @instance
         */
        TxnContext.prototype.startTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TxnContext commitTs.
         * @member {number|Long} commitTs
         * @memberof api.TxnContext
         * @instance
         */
        TxnContext.prototype.commitTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TxnContext aborted.
         * @member {boolean} aborted
         * @memberof api.TxnContext
         * @instance
         */
        TxnContext.prototype.aborted = false;

        /**
         * TxnContext keys.
         * @member {Array.<string>} keys
         * @memberof api.TxnContext
         * @instance
         */
        TxnContext.prototype.keys = $util.emptyArray;

        /**
         * TxnContext preds.
         * @member {Array.<string>} preds
         * @memberof api.TxnContext
         * @instance
         */
        TxnContext.prototype.preds = $util.emptyArray;

        /**
         * Creates a new TxnContext instance using the specified properties.
         * @function create
         * @memberof api.TxnContext
         * @static
         * @param {api.ITxnContext=} [properties] Properties to set
         * @returns {api.TxnContext} TxnContext instance
         */
        TxnContext.create = function create(properties) {
            return new TxnContext(properties);
        };

        /**
         * Encodes the specified TxnContext message. Does not implicitly {@link api.TxnContext.verify|verify} messages.
         * @function encode
         * @memberof api.TxnContext
         * @static
         * @param {api.ITxnContext} message TxnContext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TxnContext.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTs != null && Object.hasOwnProperty.call(message, "startTs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startTs);
            if (message.commitTs != null && Object.hasOwnProperty.call(message, "commitTs"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.commitTs);
            if (message.aborted != null && Object.hasOwnProperty.call(message, "aborted"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.aborted);
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.keys[i]);
            if (message.preds != null && message.preds.length)
                for (var i = 0; i < message.preds.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.preds[i]);
            return writer;
        };

        /**
         * Encodes the specified TxnContext message, length delimited. Does not implicitly {@link api.TxnContext.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.TxnContext
         * @static
         * @param {api.ITxnContext} message TxnContext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TxnContext.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TxnContext message from the specified reader or buffer.
         * @function decode
         * @memberof api.TxnContext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.TxnContext} TxnContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TxnContext.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.TxnContext();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startTs = reader.uint64();
                    break;
                case 2:
                    message.commitTs = reader.uint64();
                    break;
                case 3:
                    message.aborted = reader.bool();
                    break;
                case 4:
                    if (!(message.keys && message.keys.length))
                        message.keys = [];
                    message.keys.push(reader.string());
                    break;
                case 5:
                    if (!(message.preds && message.preds.length))
                        message.preds = [];
                    message.preds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TxnContext message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.TxnContext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.TxnContext} TxnContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TxnContext.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TxnContext message.
         * @function verify
         * @memberof api.TxnContext
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TxnContext.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTs != null && message.hasOwnProperty("startTs"))
                if (!$util.isInteger(message.startTs) && !(message.startTs && $util.isInteger(message.startTs.low) && $util.isInteger(message.startTs.high)))
                    return "startTs: integer|Long expected";
            if (message.commitTs != null && message.hasOwnProperty("commitTs"))
                if (!$util.isInteger(message.commitTs) && !(message.commitTs && $util.isInteger(message.commitTs.low) && $util.isInteger(message.commitTs.high)))
                    return "commitTs: integer|Long expected";
            if (message.aborted != null && message.hasOwnProperty("aborted"))
                if (typeof message.aborted !== "boolean")
                    return "aborted: boolean expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i)
                    if (!$util.isString(message.keys[i]))
                        return "keys: string[] expected";
            }
            if (message.preds != null && message.hasOwnProperty("preds")) {
                if (!Array.isArray(message.preds))
                    return "preds: array expected";
                for (var i = 0; i < message.preds.length; ++i)
                    if (!$util.isString(message.preds[i]))
                        return "preds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a TxnContext message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.TxnContext
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.TxnContext} TxnContext
         */
        TxnContext.fromObject = function fromObject(object) {
            if (object instanceof $root.api.TxnContext)
                return object;
            var message = new $root.api.TxnContext();
            if (object.startTs != null)
                if ($util.Long)
                    (message.startTs = $util.Long.fromValue(object.startTs)).unsigned = true;
                else if (typeof object.startTs === "string")
                    message.startTs = parseInt(object.startTs, 10);
                else if (typeof object.startTs === "number")
                    message.startTs = object.startTs;
                else if (typeof object.startTs === "object")
                    message.startTs = new $util.LongBits(object.startTs.low >>> 0, object.startTs.high >>> 0).toNumber(true);
            if (object.commitTs != null)
                if ($util.Long)
                    (message.commitTs = $util.Long.fromValue(object.commitTs)).unsigned = true;
                else if (typeof object.commitTs === "string")
                    message.commitTs = parseInt(object.commitTs, 10);
                else if (typeof object.commitTs === "number")
                    message.commitTs = object.commitTs;
                else if (typeof object.commitTs === "object")
                    message.commitTs = new $util.LongBits(object.commitTs.low >>> 0, object.commitTs.high >>> 0).toNumber(true);
            if (object.aborted != null)
                message.aborted = Boolean(object.aborted);
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".api.TxnContext.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i)
                    message.keys[i] = String(object.keys[i]);
            }
            if (object.preds) {
                if (!Array.isArray(object.preds))
                    throw TypeError(".api.TxnContext.preds: array expected");
                message.preds = [];
                for (var i = 0; i < object.preds.length; ++i)
                    message.preds[i] = String(object.preds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TxnContext message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.TxnContext
         * @static
         * @param {api.TxnContext} message TxnContext
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TxnContext.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.keys = [];
                object.preds = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.startTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.commitTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.commitTs = options.longs === String ? "0" : 0;
                object.aborted = false;
            }
            if (message.startTs != null && message.hasOwnProperty("startTs"))
                if (typeof message.startTs === "number")
                    object.startTs = options.longs === String ? String(message.startTs) : message.startTs;
                else
                    object.startTs = options.longs === String ? $util.Long.prototype.toString.call(message.startTs) : options.longs === Number ? new $util.LongBits(message.startTs.low >>> 0, message.startTs.high >>> 0).toNumber(true) : message.startTs;
            if (message.commitTs != null && message.hasOwnProperty("commitTs"))
                if (typeof message.commitTs === "number")
                    object.commitTs = options.longs === String ? String(message.commitTs) : message.commitTs;
                else
                    object.commitTs = options.longs === String ? $util.Long.prototype.toString.call(message.commitTs) : options.longs === Number ? new $util.LongBits(message.commitTs.low >>> 0, message.commitTs.high >>> 0).toNumber(true) : message.commitTs;
            if (message.aborted != null && message.hasOwnProperty("aborted"))
                object.aborted = message.aborted;
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = message.keys[j];
            }
            if (message.preds && message.preds.length) {
                object.preds = [];
                for (var j = 0; j < message.preds.length; ++j)
                    object.preds[j] = message.preds[j];
            }
            return object;
        };

        /**
         * Converts this TxnContext to JSON.
         * @function toJSON
         * @memberof api.TxnContext
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TxnContext.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TxnContext;
    })();

    api.Check = (function() {

        /**
         * Properties of a Check.
         * @memberof api
         * @interface ICheck
         */

        /**
         * Constructs a new Check.
         * @memberof api
         * @classdesc Represents a Check.
         * @implements ICheck
         * @constructor
         * @param {api.ICheck=} [properties] Properties to set
         */
        function Check(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Check instance using the specified properties.
         * @function create
         * @memberof api.Check
         * @static
         * @param {api.ICheck=} [properties] Properties to set
         * @returns {api.Check} Check instance
         */
        Check.create = function create(properties) {
            return new Check(properties);
        };

        /**
         * Encodes the specified Check message. Does not implicitly {@link api.Check.verify|verify} messages.
         * @function encode
         * @memberof api.Check
         * @static
         * @param {api.ICheck} message Check message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Check.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Check message, length delimited. Does not implicitly {@link api.Check.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Check
         * @static
         * @param {api.ICheck} message Check message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Check.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Check message from the specified reader or buffer.
         * @function decode
         * @memberof api.Check
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Check} Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Check.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Check();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Check message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Check
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Check} Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Check.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Check message.
         * @function verify
         * @memberof api.Check
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Check.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Check message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Check
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Check} Check
         */
        Check.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Check)
                return object;
            return new $root.api.Check();
        };

        /**
         * Creates a plain object from a Check message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Check
         * @static
         * @param {api.Check} message Check
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Check.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Check to JSON.
         * @function toJSON
         * @memberof api.Check
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Check.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Check;
    })();

    api.Version = (function() {

        /**
         * Properties of a Version.
         * @memberof api
         * @interface IVersion
         * @property {string|null} [tag] Version tag
         */

        /**
         * Constructs a new Version.
         * @memberof api
         * @classdesc Represents a Version.
         * @implements IVersion
         * @constructor
         * @param {api.IVersion=} [properties] Properties to set
         */
        function Version(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Version tag.
         * @member {string} tag
         * @memberof api.Version
         * @instance
         */
        Version.prototype.tag = "";

        /**
         * Creates a new Version instance using the specified properties.
         * @function create
         * @memberof api.Version
         * @static
         * @param {api.IVersion=} [properties] Properties to set
         * @returns {api.Version} Version instance
         */
        Version.create = function create(properties) {
            return new Version(properties);
        };

        /**
         * Encodes the specified Version message. Does not implicitly {@link api.Version.verify|verify} messages.
         * @function encode
         * @memberof api.Version
         * @static
         * @param {api.IVersion} message Version message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Version.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            return writer;
        };

        /**
         * Encodes the specified Version message, length delimited. Does not implicitly {@link api.Version.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Version
         * @static
         * @param {api.IVersion} message Version message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Version.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @function decode
         * @memberof api.Version
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Version} Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Version.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Version();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Version message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Version
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Version} Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Version.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Version message.
         * @function verify
         * @memberof api.Version
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Version.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            return null;
        };

        /**
         * Creates a Version message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Version
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Version} Version
         */
        Version.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Version)
                return object;
            var message = new $root.api.Version();
            if (object.tag != null)
                message.tag = String(object.tag);
            return message;
        };

        /**
         * Creates a plain object from a Version message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Version
         * @static
         * @param {api.Version} message Version
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Version.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tag = "";
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            return object;
        };

        /**
         * Converts this Version to JSON.
         * @function toJSON
         * @memberof api.Version
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Version.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Version;
    })();

    api.Latency = (function() {

        /**
         * Properties of a Latency.
         * @memberof api
         * @interface ILatency
         * @property {number|Long|null} [parsingNs] Latency parsingNs
         * @property {number|Long|null} [processingNs] Latency processingNs
         * @property {number|Long|null} [encodingNs] Latency encodingNs
         * @property {number|Long|null} [assignTimestampNs] Latency assignTimestampNs
         * @property {number|Long|null} [totalNs] Latency totalNs
         */

        /**
         * Constructs a new Latency.
         * @memberof api
         * @classdesc Represents a Latency.
         * @implements ILatency
         * @constructor
         * @param {api.ILatency=} [properties] Properties to set
         */
        function Latency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Latency parsingNs.
         * @member {number|Long} parsingNs
         * @memberof api.Latency
         * @instance
         */
        Latency.prototype.parsingNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Latency processingNs.
         * @member {number|Long} processingNs
         * @memberof api.Latency
         * @instance
         */
        Latency.prototype.processingNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Latency encodingNs.
         * @member {number|Long} encodingNs
         * @memberof api.Latency
         * @instance
         */
        Latency.prototype.encodingNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Latency assignTimestampNs.
         * @member {number|Long} assignTimestampNs
         * @memberof api.Latency
         * @instance
         */
        Latency.prototype.assignTimestampNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Latency totalNs.
         * @member {number|Long} totalNs
         * @memberof api.Latency
         * @instance
         */
        Latency.prototype.totalNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Latency instance using the specified properties.
         * @function create
         * @memberof api.Latency
         * @static
         * @param {api.ILatency=} [properties] Properties to set
         * @returns {api.Latency} Latency instance
         */
        Latency.create = function create(properties) {
            return new Latency(properties);
        };

        /**
         * Encodes the specified Latency message. Does not implicitly {@link api.Latency.verify|verify} messages.
         * @function encode
         * @memberof api.Latency
         * @static
         * @param {api.ILatency} message Latency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Latency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parsingNs != null && Object.hasOwnProperty.call(message, "parsingNs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.parsingNs);
            if (message.processingNs != null && Object.hasOwnProperty.call(message, "processingNs"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.processingNs);
            if (message.encodingNs != null && Object.hasOwnProperty.call(message, "encodingNs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.encodingNs);
            if (message.assignTimestampNs != null && Object.hasOwnProperty.call(message, "assignTimestampNs"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.assignTimestampNs);
            if (message.totalNs != null && Object.hasOwnProperty.call(message, "totalNs"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalNs);
            return writer;
        };

        /**
         * Encodes the specified Latency message, length delimited. Does not implicitly {@link api.Latency.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Latency
         * @static
         * @param {api.ILatency} message Latency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Latency.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Latency message from the specified reader or buffer.
         * @function decode
         * @memberof api.Latency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Latency} Latency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Latency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Latency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parsingNs = reader.uint64();
                    break;
                case 2:
                    message.processingNs = reader.uint64();
                    break;
                case 3:
                    message.encodingNs = reader.uint64();
                    break;
                case 4:
                    message.assignTimestampNs = reader.uint64();
                    break;
                case 5:
                    message.totalNs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Latency message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Latency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Latency} Latency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Latency.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Latency message.
         * @function verify
         * @memberof api.Latency
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Latency.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.parsingNs != null && message.hasOwnProperty("parsingNs"))
                if (!$util.isInteger(message.parsingNs) && !(message.parsingNs && $util.isInteger(message.parsingNs.low) && $util.isInteger(message.parsingNs.high)))
                    return "parsingNs: integer|Long expected";
            if (message.processingNs != null && message.hasOwnProperty("processingNs"))
                if (!$util.isInteger(message.processingNs) && !(message.processingNs && $util.isInteger(message.processingNs.low) && $util.isInteger(message.processingNs.high)))
                    return "processingNs: integer|Long expected";
            if (message.encodingNs != null && message.hasOwnProperty("encodingNs"))
                if (!$util.isInteger(message.encodingNs) && !(message.encodingNs && $util.isInteger(message.encodingNs.low) && $util.isInteger(message.encodingNs.high)))
                    return "encodingNs: integer|Long expected";
            if (message.assignTimestampNs != null && message.hasOwnProperty("assignTimestampNs"))
                if (!$util.isInteger(message.assignTimestampNs) && !(message.assignTimestampNs && $util.isInteger(message.assignTimestampNs.low) && $util.isInteger(message.assignTimestampNs.high)))
                    return "assignTimestampNs: integer|Long expected";
            if (message.totalNs != null && message.hasOwnProperty("totalNs"))
                if (!$util.isInteger(message.totalNs) && !(message.totalNs && $util.isInteger(message.totalNs.low) && $util.isInteger(message.totalNs.high)))
                    return "totalNs: integer|Long expected";
            return null;
        };

        /**
         * Creates a Latency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Latency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Latency} Latency
         */
        Latency.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Latency)
                return object;
            var message = new $root.api.Latency();
            if (object.parsingNs != null)
                if ($util.Long)
                    (message.parsingNs = $util.Long.fromValue(object.parsingNs)).unsigned = true;
                else if (typeof object.parsingNs === "string")
                    message.parsingNs = parseInt(object.parsingNs, 10);
                else if (typeof object.parsingNs === "number")
                    message.parsingNs = object.parsingNs;
                else if (typeof object.parsingNs === "object")
                    message.parsingNs = new $util.LongBits(object.parsingNs.low >>> 0, object.parsingNs.high >>> 0).toNumber(true);
            if (object.processingNs != null)
                if ($util.Long)
                    (message.processingNs = $util.Long.fromValue(object.processingNs)).unsigned = true;
                else if (typeof object.processingNs === "string")
                    message.processingNs = parseInt(object.processingNs, 10);
                else if (typeof object.processingNs === "number")
                    message.processingNs = object.processingNs;
                else if (typeof object.processingNs === "object")
                    message.processingNs = new $util.LongBits(object.processingNs.low >>> 0, object.processingNs.high >>> 0).toNumber(true);
            if (object.encodingNs != null)
                if ($util.Long)
                    (message.encodingNs = $util.Long.fromValue(object.encodingNs)).unsigned = true;
                else if (typeof object.encodingNs === "string")
                    message.encodingNs = parseInt(object.encodingNs, 10);
                else if (typeof object.encodingNs === "number")
                    message.encodingNs = object.encodingNs;
                else if (typeof object.encodingNs === "object")
                    message.encodingNs = new $util.LongBits(object.encodingNs.low >>> 0, object.encodingNs.high >>> 0).toNumber(true);
            if (object.assignTimestampNs != null)
                if ($util.Long)
                    (message.assignTimestampNs = $util.Long.fromValue(object.assignTimestampNs)).unsigned = true;
                else if (typeof object.assignTimestampNs === "string")
                    message.assignTimestampNs = parseInt(object.assignTimestampNs, 10);
                else if (typeof object.assignTimestampNs === "number")
                    message.assignTimestampNs = object.assignTimestampNs;
                else if (typeof object.assignTimestampNs === "object")
                    message.assignTimestampNs = new $util.LongBits(object.assignTimestampNs.low >>> 0, object.assignTimestampNs.high >>> 0).toNumber(true);
            if (object.totalNs != null)
                if ($util.Long)
                    (message.totalNs = $util.Long.fromValue(object.totalNs)).unsigned = true;
                else if (typeof object.totalNs === "string")
                    message.totalNs = parseInt(object.totalNs, 10);
                else if (typeof object.totalNs === "number")
                    message.totalNs = object.totalNs;
                else if (typeof object.totalNs === "object")
                    message.totalNs = new $util.LongBits(object.totalNs.low >>> 0, object.totalNs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Latency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Latency
         * @static
         * @param {api.Latency} message Latency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Latency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.parsingNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.parsingNs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.processingNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.processingNs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.encodingNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.encodingNs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.assignTimestampNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.assignTimestampNs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.totalNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalNs = options.longs === String ? "0" : 0;
            }
            if (message.parsingNs != null && message.hasOwnProperty("parsingNs"))
                if (typeof message.parsingNs === "number")
                    object.parsingNs = options.longs === String ? String(message.parsingNs) : message.parsingNs;
                else
                    object.parsingNs = options.longs === String ? $util.Long.prototype.toString.call(message.parsingNs) : options.longs === Number ? new $util.LongBits(message.parsingNs.low >>> 0, message.parsingNs.high >>> 0).toNumber(true) : message.parsingNs;
            if (message.processingNs != null && message.hasOwnProperty("processingNs"))
                if (typeof message.processingNs === "number")
                    object.processingNs = options.longs === String ? String(message.processingNs) : message.processingNs;
                else
                    object.processingNs = options.longs === String ? $util.Long.prototype.toString.call(message.processingNs) : options.longs === Number ? new $util.LongBits(message.processingNs.low >>> 0, message.processingNs.high >>> 0).toNumber(true) : message.processingNs;
            if (message.encodingNs != null && message.hasOwnProperty("encodingNs"))
                if (typeof message.encodingNs === "number")
                    object.encodingNs = options.longs === String ? String(message.encodingNs) : message.encodingNs;
                else
                    object.encodingNs = options.longs === String ? $util.Long.prototype.toString.call(message.encodingNs) : options.longs === Number ? new $util.LongBits(message.encodingNs.low >>> 0, message.encodingNs.high >>> 0).toNumber(true) : message.encodingNs;
            if (message.assignTimestampNs != null && message.hasOwnProperty("assignTimestampNs"))
                if (typeof message.assignTimestampNs === "number")
                    object.assignTimestampNs = options.longs === String ? String(message.assignTimestampNs) : message.assignTimestampNs;
                else
                    object.assignTimestampNs = options.longs === String ? $util.Long.prototype.toString.call(message.assignTimestampNs) : options.longs === Number ? new $util.LongBits(message.assignTimestampNs.low >>> 0, message.assignTimestampNs.high >>> 0).toNumber(true) : message.assignTimestampNs;
            if (message.totalNs != null && message.hasOwnProperty("totalNs"))
                if (typeof message.totalNs === "number")
                    object.totalNs = options.longs === String ? String(message.totalNs) : message.totalNs;
                else
                    object.totalNs = options.longs === String ? $util.Long.prototype.toString.call(message.totalNs) : options.longs === Number ? new $util.LongBits(message.totalNs.low >>> 0, message.totalNs.high >>> 0).toNumber(true) : message.totalNs;
            return object;
        };

        /**
         * Converts this Latency to JSON.
         * @function toJSON
         * @memberof api.Latency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Latency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Latency;
    })();

    api.Metrics = (function() {

        /**
         * Properties of a Metrics.
         * @memberof api
         * @interface IMetrics
         * @property {Object.<string,number|Long>|null} [numUids] Metrics numUids
         */

        /**
         * Constructs a new Metrics.
         * @memberof api
         * @classdesc Represents a Metrics.
         * @implements IMetrics
         * @constructor
         * @param {api.IMetrics=} [properties] Properties to set
         */
        function Metrics(properties) {
            this.numUids = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metrics numUids.
         * @member {Object.<string,number|Long>} numUids
         * @memberof api.Metrics
         * @instance
         */
        Metrics.prototype.numUids = $util.emptyObject;

        /**
         * Creates a new Metrics instance using the specified properties.
         * @function create
         * @memberof api.Metrics
         * @static
         * @param {api.IMetrics=} [properties] Properties to set
         * @returns {api.Metrics} Metrics instance
         */
        Metrics.create = function create(properties) {
            return new Metrics(properties);
        };

        /**
         * Encodes the specified Metrics message. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @function encode
         * @memberof api.Metrics
         * @static
         * @param {api.IMetrics} message Metrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metrics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.numUids != null && Object.hasOwnProperty.call(message, "numUids"))
                for (var keys = Object.keys(message.numUids), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.numUids[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Metrics message, length delimited. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Metrics
         * @static
         * @param {api.IMetrics} message Metrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metrics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Metrics message from the specified reader or buffer.
         * @function decode
         * @memberof api.Metrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Metrics} Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metrics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Metrics(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.numUids === $util.emptyObject)
                        message.numUids = {};
                    key = reader.string();
                    reader.pos++;
                    message.numUids[key] = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Metrics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Metrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Metrics} Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metrics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Metrics message.
         * @function verify
         * @memberof api.Metrics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Metrics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.numUids != null && message.hasOwnProperty("numUids")) {
                if (!$util.isObject(message.numUids))
                    return "numUids: object expected";
                var key = Object.keys(message.numUids);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.numUids[key[i]]) && !(message.numUids[key[i]] && $util.isInteger(message.numUids[key[i]].low) && $util.isInteger(message.numUids[key[i]].high)))
                        return "numUids: integer|Long{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Metrics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Metrics} Metrics
         */
        Metrics.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Metrics)
                return object;
            var message = new $root.api.Metrics();
            if (object.numUids) {
                if (typeof object.numUids !== "object")
                    throw TypeError(".api.Metrics.numUids: object expected");
                message.numUids = {};
                for (var keys = Object.keys(object.numUids), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.numUids[keys[i]] = $util.Long.fromValue(object.numUids[keys[i]])).unsigned = true;
                    else if (typeof object.numUids[keys[i]] === "string")
                        message.numUids[keys[i]] = parseInt(object.numUids[keys[i]], 10);
                    else if (typeof object.numUids[keys[i]] === "number")
                        message.numUids[keys[i]] = object.numUids[keys[i]];
                    else if (typeof object.numUids[keys[i]] === "object")
                        message.numUids[keys[i]] = new $util.LongBits(object.numUids[keys[i]].low >>> 0, object.numUids[keys[i]].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a Metrics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Metrics
         * @static
         * @param {api.Metrics} message Metrics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Metrics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.numUids = {};
            var keys2;
            if (message.numUids && (keys2 = Object.keys(message.numUids)).length) {
                object.numUids = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.numUids[keys2[j]] === "number")
                        object.numUids[keys2[j]] = options.longs === String ? String(message.numUids[keys2[j]]) : message.numUids[keys2[j]];
                    else
                        object.numUids[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.numUids[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.numUids[keys2[j]].low >>> 0, message.numUids[keys2[j]].high >>> 0).toNumber(true) : message.numUids[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Metrics to JSON.
         * @function toJSON
         * @memberof api.Metrics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Metrics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Metrics;
    })();

    api.NQuad = (function() {

        /**
         * Properties of a NQuad.
         * @memberof api
         * @interface INQuad
         * @property {string|null} [subject] NQuad subject
         * @property {string|null} [predicate] NQuad predicate
         * @property {string|null} [objectId] NQuad objectId
         * @property {api.IValue|null} [objectValue] NQuad objectValue
         * @property {string|null} [label] NQuad label
         * @property {string|null} [lang] NQuad lang
         * @property {Array.<api.IFacet>|null} [facets] NQuad facets
         */

        /**
         * Constructs a new NQuad.
         * @memberof api
         * @classdesc Represents a NQuad.
         * @implements INQuad
         * @constructor
         * @param {api.INQuad=} [properties] Properties to set
         */
        function NQuad(properties) {
            this.facets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NQuad subject.
         * @member {string} subject
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.subject = "";

        /**
         * NQuad predicate.
         * @member {string} predicate
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.predicate = "";

        /**
         * NQuad objectId.
         * @member {string} objectId
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.objectId = "";

        /**
         * NQuad objectValue.
         * @member {api.IValue|null|undefined} objectValue
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.objectValue = null;

        /**
         * NQuad label.
         * @member {string} label
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.label = "";

        /**
         * NQuad lang.
         * @member {string} lang
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.lang = "";

        /**
         * NQuad facets.
         * @member {Array.<api.IFacet>} facets
         * @memberof api.NQuad
         * @instance
         */
        NQuad.prototype.facets = $util.emptyArray;

        /**
         * Creates a new NQuad instance using the specified properties.
         * @function create
         * @memberof api.NQuad
         * @static
         * @param {api.INQuad=} [properties] Properties to set
         * @returns {api.NQuad} NQuad instance
         */
        NQuad.create = function create(properties) {
            return new NQuad(properties);
        };

        /**
         * Encodes the specified NQuad message. Does not implicitly {@link api.NQuad.verify|verify} messages.
         * @function encode
         * @memberof api.NQuad
         * @static
         * @param {api.INQuad} message NQuad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NQuad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.predicate != null && Object.hasOwnProperty.call(message, "predicate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.predicate);
            if (message.objectId != null && Object.hasOwnProperty.call(message, "objectId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.objectId);
            if (message.objectValue != null && Object.hasOwnProperty.call(message, "objectValue"))
                $root.api.Value.encode(message.objectValue, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.label);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lang);
            if (message.facets != null && message.facets.length)
                for (var i = 0; i < message.facets.length; ++i)
                    $root.api.Facet.encode(message.facets[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NQuad message, length delimited. Does not implicitly {@link api.NQuad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.NQuad
         * @static
         * @param {api.INQuad} message NQuad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NQuad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NQuad message from the specified reader or buffer.
         * @function decode
         * @memberof api.NQuad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.NQuad} NQuad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NQuad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.NQuad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.subject = reader.string();
                    break;
                case 2:
                    message.predicate = reader.string();
                    break;
                case 3:
                    message.objectId = reader.string();
                    break;
                case 4:
                    message.objectValue = $root.api.Value.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.label = reader.string();
                    break;
                case 6:
                    message.lang = reader.string();
                    break;
                case 7:
                    if (!(message.facets && message.facets.length))
                        message.facets = [];
                    message.facets.push($root.api.Facet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NQuad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.NQuad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.NQuad} NQuad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NQuad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NQuad message.
         * @function verify
         * @memberof api.NQuad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NQuad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                if (!$util.isString(message.predicate))
                    return "predicate: string expected";
            if (message.objectId != null && message.hasOwnProperty("objectId"))
                if (!$util.isString(message.objectId))
                    return "objectId: string expected";
            if (message.objectValue != null && message.hasOwnProperty("objectValue")) {
                var error = $root.api.Value.verify(message.objectValue);
                if (error)
                    return "objectValue." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.facets != null && message.hasOwnProperty("facets")) {
                if (!Array.isArray(message.facets))
                    return "facets: array expected";
                for (var i = 0; i < message.facets.length; ++i) {
                    var error = $root.api.Facet.verify(message.facets[i]);
                    if (error)
                        return "facets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NQuad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.NQuad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.NQuad} NQuad
         */
        NQuad.fromObject = function fromObject(object) {
            if (object instanceof $root.api.NQuad)
                return object;
            var message = new $root.api.NQuad();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.predicate != null)
                message.predicate = String(object.predicate);
            if (object.objectId != null)
                message.objectId = String(object.objectId);
            if (object.objectValue != null) {
                if (typeof object.objectValue !== "object")
                    throw TypeError(".api.NQuad.objectValue: object expected");
                message.objectValue = $root.api.Value.fromObject(object.objectValue);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.facets) {
                if (!Array.isArray(object.facets))
                    throw TypeError(".api.NQuad.facets: array expected");
                message.facets = [];
                for (var i = 0; i < object.facets.length; ++i) {
                    if (typeof object.facets[i] !== "object")
                        throw TypeError(".api.NQuad.facets: object expected");
                    message.facets[i] = $root.api.Facet.fromObject(object.facets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NQuad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.NQuad
         * @static
         * @param {api.NQuad} message NQuad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NQuad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.facets = [];
            if (options.defaults) {
                object.subject = "";
                object.predicate = "";
                object.objectId = "";
                object.objectValue = null;
                object.label = "";
                object.lang = "";
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                object.predicate = message.predicate;
            if (message.objectId != null && message.hasOwnProperty("objectId"))
                object.objectId = message.objectId;
            if (message.objectValue != null && message.hasOwnProperty("objectValue"))
                object.objectValue = $root.api.Value.toObject(message.objectValue, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.facets && message.facets.length) {
                object.facets = [];
                for (var j = 0; j < message.facets.length; ++j)
                    object.facets[j] = $root.api.Facet.toObject(message.facets[j], options);
            }
            return object;
        };

        /**
         * Converts this NQuad to JSON.
         * @function toJSON
         * @memberof api.NQuad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NQuad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NQuad;
    })();

    api.Value = (function() {

        /**
         * Properties of a Value.
         * @memberof api
         * @interface IValue
         * @property {string|null} [defaultVal] Value defaultVal
         * @property {Uint8Array|null} [bytesVal] Value bytesVal
         * @property {number|Long|null} [intVal] Value intVal
         * @property {boolean|null} [boolVal] Value boolVal
         * @property {string|null} [strVal] Value strVal
         * @property {number|null} [doubleVal] Value doubleVal
         * @property {Uint8Array|null} [geoVal] Value geoVal
         * @property {Uint8Array|null} [dateVal] Value dateVal
         * @property {Uint8Array|null} [datetimeVal] Value datetimeVal
         * @property {string|null} [passwordVal] Value passwordVal
         * @property {number|Long|null} [uidVal] Value uidVal
         */

        /**
         * Constructs a new Value.
         * @memberof api
         * @classdesc Represents a Value.
         * @implements IValue
         * @constructor
         * @param {api.IValue=} [properties] Properties to set
         */
        function Value(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Value defaultVal.
         * @member {string} defaultVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.defaultVal = "";

        /**
         * Value bytesVal.
         * @member {Uint8Array} bytesVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.bytesVal = $util.newBuffer([]);

        /**
         * Value intVal.
         * @member {number|Long} intVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.intVal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Value boolVal.
         * @member {boolean} boolVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.boolVal = false;

        /**
         * Value strVal.
         * @member {string} strVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.strVal = "";

        /**
         * Value doubleVal.
         * @member {number} doubleVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.doubleVal = 0;

        /**
         * Value geoVal.
         * @member {Uint8Array} geoVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.geoVal = $util.newBuffer([]);

        /**
         * Value dateVal.
         * @member {Uint8Array} dateVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.dateVal = $util.newBuffer([]);

        /**
         * Value datetimeVal.
         * @member {Uint8Array} datetimeVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.datetimeVal = $util.newBuffer([]);

        /**
         * Value passwordVal.
         * @member {string} passwordVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.passwordVal = "";

        /**
         * Value uidVal.
         * @member {number|Long} uidVal
         * @memberof api.Value
         * @instance
         */
        Value.prototype.uidVal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Value val.
         * @member {"defaultVal"|"bytesVal"|"intVal"|"boolVal"|"strVal"|"doubleVal"|"geoVal"|"dateVal"|"datetimeVal"|"passwordVal"|"uidVal"|undefined} val
         * @memberof api.Value
         * @instance
         */
        Object.defineProperty(Value.prototype, "val", {
            get: $util.oneOfGetter($oneOfFields = ["defaultVal", "bytesVal", "intVal", "boolVal", "strVal", "doubleVal", "geoVal", "dateVal", "datetimeVal", "passwordVal", "uidVal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Value instance using the specified properties.
         * @function create
         * @memberof api.Value
         * @static
         * @param {api.IValue=} [properties] Properties to set
         * @returns {api.Value} Value instance
         */
        Value.create = function create(properties) {
            return new Value(properties);
        };

        /**
         * Encodes the specified Value message. Does not implicitly {@link api.Value.verify|verify} messages.
         * @function encode
         * @memberof api.Value
         * @static
         * @param {api.IValue} message Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Value.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.defaultVal != null && Object.hasOwnProperty.call(message, "defaultVal"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.defaultVal);
            if (message.bytesVal != null && Object.hasOwnProperty.call(message, "bytesVal"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bytesVal);
            if (message.intVal != null && Object.hasOwnProperty.call(message, "intVal"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intVal);
            if (message.boolVal != null && Object.hasOwnProperty.call(message, "boolVal"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolVal);
            if (message.strVal != null && Object.hasOwnProperty.call(message, "strVal"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.strVal);
            if (message.doubleVal != null && Object.hasOwnProperty.call(message, "doubleVal"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleVal);
            if (message.geoVal != null && Object.hasOwnProperty.call(message, "geoVal"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.geoVal);
            if (message.dateVal != null && Object.hasOwnProperty.call(message, "dateVal"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.dateVal);
            if (message.datetimeVal != null && Object.hasOwnProperty.call(message, "datetimeVal"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.datetimeVal);
            if (message.passwordVal != null && Object.hasOwnProperty.call(message, "passwordVal"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.passwordVal);
            if (message.uidVal != null && Object.hasOwnProperty.call(message, "uidVal"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.uidVal);
            return writer;
        };

        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link api.Value.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Value
         * @static
         * @param {api.IValue} message Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Value.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Value message from the specified reader or buffer.
         * @function decode
         * @memberof api.Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Value} Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Value.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Value();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.defaultVal = reader.string();
                    break;
                case 2:
                    message.bytesVal = reader.bytes();
                    break;
                case 3:
                    message.intVal = reader.int64();
                    break;
                case 4:
                    message.boolVal = reader.bool();
                    break;
                case 5:
                    message.strVal = reader.string();
                    break;
                case 6:
                    message.doubleVal = reader.double();
                    break;
                case 7:
                    message.geoVal = reader.bytes();
                    break;
                case 8:
                    message.dateVal = reader.bytes();
                    break;
                case 9:
                    message.datetimeVal = reader.bytes();
                    break;
                case 10:
                    message.passwordVal = reader.string();
                    break;
                case 11:
                    message.uidVal = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Value} Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Value.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Value message.
         * @function verify
         * @memberof api.Value
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Value.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.defaultVal != null && message.hasOwnProperty("defaultVal")) {
                properties.val = 1;
                if (!$util.isString(message.defaultVal))
                    return "defaultVal: string expected";
            }
            if (message.bytesVal != null && message.hasOwnProperty("bytesVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!(message.bytesVal && typeof message.bytesVal.length === "number" || $util.isString(message.bytesVal)))
                    return "bytesVal: buffer expected";
            }
            if (message.intVal != null && message.hasOwnProperty("intVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!$util.isInteger(message.intVal) && !(message.intVal && $util.isInteger(message.intVal.low) && $util.isInteger(message.intVal.high)))
                    return "intVal: integer|Long expected";
            }
            if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (typeof message.boolVal !== "boolean")
                    return "boolVal: boolean expected";
            }
            if (message.strVal != null && message.hasOwnProperty("strVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!$util.isString(message.strVal))
                    return "strVal: string expected";
            }
            if (message.doubleVal != null && message.hasOwnProperty("doubleVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (typeof message.doubleVal !== "number")
                    return "doubleVal: number expected";
            }
            if (message.geoVal != null && message.hasOwnProperty("geoVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!(message.geoVal && typeof message.geoVal.length === "number" || $util.isString(message.geoVal)))
                    return "geoVal: buffer expected";
            }
            if (message.dateVal != null && message.hasOwnProperty("dateVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!(message.dateVal && typeof message.dateVal.length === "number" || $util.isString(message.dateVal)))
                    return "dateVal: buffer expected";
            }
            if (message.datetimeVal != null && message.hasOwnProperty("datetimeVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!(message.datetimeVal && typeof message.datetimeVal.length === "number" || $util.isString(message.datetimeVal)))
                    return "datetimeVal: buffer expected";
            }
            if (message.passwordVal != null && message.hasOwnProperty("passwordVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!$util.isString(message.passwordVal))
                    return "passwordVal: string expected";
            }
            if (message.uidVal != null && message.hasOwnProperty("uidVal")) {
                if (properties.val === 1)
                    return "val: multiple values";
                properties.val = 1;
                if (!$util.isInteger(message.uidVal) && !(message.uidVal && $util.isInteger(message.uidVal.low) && $util.isInteger(message.uidVal.high)))
                    return "uidVal: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Value
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Value} Value
         */
        Value.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Value)
                return object;
            var message = new $root.api.Value();
            if (object.defaultVal != null)
                message.defaultVal = String(object.defaultVal);
            if (object.bytesVal != null)
                if (typeof object.bytesVal === "string")
                    $util.base64.decode(object.bytesVal, message.bytesVal = $util.newBuffer($util.base64.length(object.bytesVal)), 0);
                else if (object.bytesVal.length)
                    message.bytesVal = object.bytesVal;
            if (object.intVal != null)
                if ($util.Long)
                    (message.intVal = $util.Long.fromValue(object.intVal)).unsigned = false;
                else if (typeof object.intVal === "string")
                    message.intVal = parseInt(object.intVal, 10);
                else if (typeof object.intVal === "number")
                    message.intVal = object.intVal;
                else if (typeof object.intVal === "object")
                    message.intVal = new $util.LongBits(object.intVal.low >>> 0, object.intVal.high >>> 0).toNumber();
            if (object.boolVal != null)
                message.boolVal = Boolean(object.boolVal);
            if (object.strVal != null)
                message.strVal = String(object.strVal);
            if (object.doubleVal != null)
                message.doubleVal = Number(object.doubleVal);
            if (object.geoVal != null)
                if (typeof object.geoVal === "string")
                    $util.base64.decode(object.geoVal, message.geoVal = $util.newBuffer($util.base64.length(object.geoVal)), 0);
                else if (object.geoVal.length)
                    message.geoVal = object.geoVal;
            if (object.dateVal != null)
                if (typeof object.dateVal === "string")
                    $util.base64.decode(object.dateVal, message.dateVal = $util.newBuffer($util.base64.length(object.dateVal)), 0);
                else if (object.dateVal.length)
                    message.dateVal = object.dateVal;
            if (object.datetimeVal != null)
                if (typeof object.datetimeVal === "string")
                    $util.base64.decode(object.datetimeVal, message.datetimeVal = $util.newBuffer($util.base64.length(object.datetimeVal)), 0);
                else if (object.datetimeVal.length)
                    message.datetimeVal = object.datetimeVal;
            if (object.passwordVal != null)
                message.passwordVal = String(object.passwordVal);
            if (object.uidVal != null)
                if ($util.Long)
                    (message.uidVal = $util.Long.fromValue(object.uidVal)).unsigned = true;
                else if (typeof object.uidVal === "string")
                    message.uidVal = parseInt(object.uidVal, 10);
                else if (typeof object.uidVal === "number")
                    message.uidVal = object.uidVal;
                else if (typeof object.uidVal === "object")
                    message.uidVal = new $util.LongBits(object.uidVal.low >>> 0, object.uidVal.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Value
         * @static
         * @param {api.Value} message Value
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Value.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.defaultVal != null && message.hasOwnProperty("defaultVal")) {
                object.defaultVal = message.defaultVal;
                if (options.oneofs)
                    object.val = "defaultVal";
            }
            if (message.bytesVal != null && message.hasOwnProperty("bytesVal")) {
                object.bytesVal = options.bytes === String ? $util.base64.encode(message.bytesVal, 0, message.bytesVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesVal) : message.bytesVal;
                if (options.oneofs)
                    object.val = "bytesVal";
            }
            if (message.intVal != null && message.hasOwnProperty("intVal")) {
                if (typeof message.intVal === "number")
                    object.intVal = options.longs === String ? String(message.intVal) : message.intVal;
                else
                    object.intVal = options.longs === String ? $util.Long.prototype.toString.call(message.intVal) : options.longs === Number ? new $util.LongBits(message.intVal.low >>> 0, message.intVal.high >>> 0).toNumber() : message.intVal;
                if (options.oneofs)
                    object.val = "intVal";
            }
            if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                object.boolVal = message.boolVal;
                if (options.oneofs)
                    object.val = "boolVal";
            }
            if (message.strVal != null && message.hasOwnProperty("strVal")) {
                object.strVal = message.strVal;
                if (options.oneofs)
                    object.val = "strVal";
            }
            if (message.doubleVal != null && message.hasOwnProperty("doubleVal")) {
                object.doubleVal = options.json && !isFinite(message.doubleVal) ? String(message.doubleVal) : message.doubleVal;
                if (options.oneofs)
                    object.val = "doubleVal";
            }
            if (message.geoVal != null && message.hasOwnProperty("geoVal")) {
                object.geoVal = options.bytes === String ? $util.base64.encode(message.geoVal, 0, message.geoVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.geoVal) : message.geoVal;
                if (options.oneofs)
                    object.val = "geoVal";
            }
            if (message.dateVal != null && message.hasOwnProperty("dateVal")) {
                object.dateVal = options.bytes === String ? $util.base64.encode(message.dateVal, 0, message.dateVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.dateVal) : message.dateVal;
                if (options.oneofs)
                    object.val = "dateVal";
            }
            if (message.datetimeVal != null && message.hasOwnProperty("datetimeVal")) {
                object.datetimeVal = options.bytes === String ? $util.base64.encode(message.datetimeVal, 0, message.datetimeVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.datetimeVal) : message.datetimeVal;
                if (options.oneofs)
                    object.val = "datetimeVal";
            }
            if (message.passwordVal != null && message.hasOwnProperty("passwordVal")) {
                object.passwordVal = message.passwordVal;
                if (options.oneofs)
                    object.val = "passwordVal";
            }
            if (message.uidVal != null && message.hasOwnProperty("uidVal")) {
                if (typeof message.uidVal === "number")
                    object.uidVal = options.longs === String ? String(message.uidVal) : message.uidVal;
                else
                    object.uidVal = options.longs === String ? $util.Long.prototype.toString.call(message.uidVal) : options.longs === Number ? new $util.LongBits(message.uidVal.low >>> 0, message.uidVal.high >>> 0).toNumber(true) : message.uidVal;
                if (options.oneofs)
                    object.val = "uidVal";
            }
            return object;
        };

        /**
         * Converts this Value to JSON.
         * @function toJSON
         * @memberof api.Value
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Value.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Value;
    })();

    api.Facet = (function() {

        /**
         * Properties of a Facet.
         * @memberof api
         * @interface IFacet
         * @property {string|null} [key] Facet key
         * @property {Uint8Array|null} [value] Facet value
         * @property {api.Facet.ValType|null} [valType] Facet valType
         * @property {Array.<string>|null} [tokens] Facet tokens
         * @property {string|null} [alias] Facet alias
         */

        /**
         * Constructs a new Facet.
         * @memberof api
         * @classdesc Represents a Facet.
         * @implements IFacet
         * @constructor
         * @param {api.IFacet=} [properties] Properties to set
         */
        function Facet(properties) {
            this.tokens = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Facet key.
         * @member {string} key
         * @memberof api.Facet
         * @instance
         */
        Facet.prototype.key = "";

        /**
         * Facet value.
         * @member {Uint8Array} value
         * @memberof api.Facet
         * @instance
         */
        Facet.prototype.value = $util.newBuffer([]);

        /**
         * Facet valType.
         * @member {api.Facet.ValType} valType
         * @memberof api.Facet
         * @instance
         */
        Facet.prototype.valType = 0;

        /**
         * Facet tokens.
         * @member {Array.<string>} tokens
         * @memberof api.Facet
         * @instance
         */
        Facet.prototype.tokens = $util.emptyArray;

        /**
         * Facet alias.
         * @member {string} alias
         * @memberof api.Facet
         * @instance
         */
        Facet.prototype.alias = "";

        /**
         * Creates a new Facet instance using the specified properties.
         * @function create
         * @memberof api.Facet
         * @static
         * @param {api.IFacet=} [properties] Properties to set
         * @returns {api.Facet} Facet instance
         */
        Facet.create = function create(properties) {
            return new Facet(properties);
        };

        /**
         * Encodes the specified Facet message. Does not implicitly {@link api.Facet.verify|verify} messages.
         * @function encode
         * @memberof api.Facet
         * @static
         * @param {api.IFacet} message Facet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Facet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            if (message.valType != null && Object.hasOwnProperty.call(message, "valType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.valType);
            if (message.tokens != null && message.tokens.length)
                for (var i = 0; i < message.tokens.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.tokens[i]);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.alias);
            return writer;
        };

        /**
         * Encodes the specified Facet message, length delimited. Does not implicitly {@link api.Facet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Facet
         * @static
         * @param {api.IFacet} message Facet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Facet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Facet message from the specified reader or buffer.
         * @function decode
         * @memberof api.Facet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Facet} Facet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Facet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Facet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.valType = reader.int32();
                    break;
                case 4:
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push(reader.string());
                    break;
                case 5:
                    message.alias = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Facet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Facet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Facet} Facet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Facet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Facet message.
         * @function verify
         * @memberof api.Facet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Facet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.valType != null && message.hasOwnProperty("valType"))
                switch (message.valType) {
                default:
                    return "valType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.tokens != null && message.hasOwnProperty("tokens")) {
                if (!Array.isArray(message.tokens))
                    return "tokens: array expected";
                for (var i = 0; i < message.tokens.length; ++i)
                    if (!$util.isString(message.tokens[i]))
                        return "tokens: string[] expected";
            }
            if (message.alias != null && message.hasOwnProperty("alias"))
                if (!$util.isString(message.alias))
                    return "alias: string expected";
            return null;
        };

        /**
         * Creates a Facet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Facet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Facet} Facet
         */
        Facet.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Facet)
                return object;
            var message = new $root.api.Facet();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            switch (object.valType) {
            case "STRING":
            case 0:
                message.valType = 0;
                break;
            case "INT":
            case 1:
                message.valType = 1;
                break;
            case "FLOAT":
            case 2:
                message.valType = 2;
                break;
            case "BOOL":
            case 3:
                message.valType = 3;
                break;
            case "DATETIME":
            case 4:
                message.valType = 4;
                break;
            }
            if (object.tokens) {
                if (!Array.isArray(object.tokens))
                    throw TypeError(".api.Facet.tokens: array expected");
                message.tokens = [];
                for (var i = 0; i < object.tokens.length; ++i)
                    message.tokens[i] = String(object.tokens[i]);
            }
            if (object.alias != null)
                message.alias = String(object.alias);
            return message;
        };

        /**
         * Creates a plain object from a Facet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Facet
         * @static
         * @param {api.Facet} message Facet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Facet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tokens = [];
            if (options.defaults) {
                object.key = "";
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.valType = options.enums === String ? "STRING" : 0;
                object.alias = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            if (message.valType != null && message.hasOwnProperty("valType"))
                object.valType = options.enums === String ? $root.api.Facet.ValType[message.valType] : message.valType;
            if (message.tokens && message.tokens.length) {
                object.tokens = [];
                for (var j = 0; j < message.tokens.length; ++j)
                    object.tokens[j] = message.tokens[j];
            }
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = message.alias;
            return object;
        };

        /**
         * Converts this Facet to JSON.
         * @function toJSON
         * @memberof api.Facet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Facet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ValType enum.
         * @name api.Facet.ValType
         * @enum {number}
         * @property {number} STRING=0 STRING value
         * @property {number} INT=1 INT value
         * @property {number} FLOAT=2 FLOAT value
         * @property {number} BOOL=3 BOOL value
         * @property {number} DATETIME=4 DATETIME value
         */
        Facet.ValType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "STRING"] = 0;
            values[valuesById[1] = "INT"] = 1;
            values[valuesById[2] = "FLOAT"] = 2;
            values[valuesById[3] = "BOOL"] = 3;
            values[valuesById[4] = "DATETIME"] = 4;
            return values;
        })();

        return Facet;
    })();

    api.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof api
         * @interface ILoginRequest
         * @property {string|null} [userid] LoginRequest userid
         * @property {string|null} [password] LoginRequest password
         * @property {string|null} [refreshToken] LoginRequest refreshToken
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof api
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {api.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest userid.
         * @member {string} userid
         * @memberof api.LoginRequest
         * @instance
         */
        LoginRequest.prototype.userid = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof api.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * LoginRequest refreshToken.
         * @member {string} refreshToken
         * @memberof api.LoginRequest
         * @instance
         */
        LoginRequest.prototype.refreshToken = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof api.LoginRequest
         * @static
         * @param {api.ILoginRequest=} [properties] Properties to set
         * @returns {api.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link api.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof api.LoginRequest
         * @static
         * @param {api.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userid);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.refreshToken);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link api.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.LoginRequest
         * @static
         * @param {api.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userid = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.refreshToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof api.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isString(message.userid))
                    return "userid: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.LoginRequest)
                return object;
            var message = new $root.api.LoginRequest();
            if (object.userid != null)
                message.userid = String(object.userid);
            if (object.password != null)
                message.password = String(object.password);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.LoginRequest
         * @static
         * @param {api.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userid = "";
                object.password = "";
                object.refreshToken = "";
            }
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof api.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    api.Jwt = (function() {

        /**
         * Properties of a Jwt.
         * @memberof api
         * @interface IJwt
         * @property {string|null} [accessJwt] Jwt accessJwt
         * @property {string|null} [refreshJwt] Jwt refreshJwt
         */

        /**
         * Constructs a new Jwt.
         * @memberof api
         * @classdesc Represents a Jwt.
         * @implements IJwt
         * @constructor
         * @param {api.IJwt=} [properties] Properties to set
         */
        function Jwt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Jwt accessJwt.
         * @member {string} accessJwt
         * @memberof api.Jwt
         * @instance
         */
        Jwt.prototype.accessJwt = "";

        /**
         * Jwt refreshJwt.
         * @member {string} refreshJwt
         * @memberof api.Jwt
         * @instance
         */
        Jwt.prototype.refreshJwt = "";

        /**
         * Creates a new Jwt instance using the specified properties.
         * @function create
         * @memberof api.Jwt
         * @static
         * @param {api.IJwt=} [properties] Properties to set
         * @returns {api.Jwt} Jwt instance
         */
        Jwt.create = function create(properties) {
            return new Jwt(properties);
        };

        /**
         * Encodes the specified Jwt message. Does not implicitly {@link api.Jwt.verify|verify} messages.
         * @function encode
         * @memberof api.Jwt
         * @static
         * @param {api.IJwt} message Jwt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Jwt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessJwt != null && Object.hasOwnProperty.call(message, "accessJwt"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessJwt);
            if (message.refreshJwt != null && Object.hasOwnProperty.call(message, "refreshJwt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshJwt);
            return writer;
        };

        /**
         * Encodes the specified Jwt message, length delimited. Does not implicitly {@link api.Jwt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Jwt
         * @static
         * @param {api.IJwt} message Jwt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Jwt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Jwt message from the specified reader or buffer.
         * @function decode
         * @memberof api.Jwt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Jwt} Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Jwt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Jwt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessJwt = reader.string();
                    break;
                case 2:
                    message.refreshJwt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Jwt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Jwt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Jwt} Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Jwt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Jwt message.
         * @function verify
         * @memberof api.Jwt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Jwt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessJwt != null && message.hasOwnProperty("accessJwt"))
                if (!$util.isString(message.accessJwt))
                    return "accessJwt: string expected";
            if (message.refreshJwt != null && message.hasOwnProperty("refreshJwt"))
                if (!$util.isString(message.refreshJwt))
                    return "refreshJwt: string expected";
            return null;
        };

        /**
         * Creates a Jwt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Jwt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Jwt} Jwt
         */
        Jwt.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Jwt)
                return object;
            var message = new $root.api.Jwt();
            if (object.accessJwt != null)
                message.accessJwt = String(object.accessJwt);
            if (object.refreshJwt != null)
                message.refreshJwt = String(object.refreshJwt);
            return message;
        };

        /**
         * Creates a plain object from a Jwt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Jwt
         * @static
         * @param {api.Jwt} message Jwt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Jwt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessJwt = "";
                object.refreshJwt = "";
            }
            if (message.accessJwt != null && message.hasOwnProperty("accessJwt"))
                object.accessJwt = message.accessJwt;
            if (message.refreshJwt != null && message.hasOwnProperty("refreshJwt"))
                object.refreshJwt = message.refreshJwt;
            return object;
        };

        /**
         * Converts this Jwt to JSON.
         * @function toJSON
         * @memberof api.Jwt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Jwt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Jwt;
    })();

    return api;
})();

module.exports = $root;
