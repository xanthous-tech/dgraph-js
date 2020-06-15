import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {

    /** Represents a Dgraph */
    class Dgraph extends $protobuf.rpc.Service {

        /**
         * Constructs a new Dgraph service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Dgraph service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Dgraph;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public login(request: api.ILoginRequest, callback: api.Dgraph.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: api.ILoginRequest): Promise<api.Response>;

        /**
         * Calls Query.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public query(request: api.IRequest, callback: api.Dgraph.QueryCallback): void;

        /**
         * Calls Query.
         * @param request Request message or plain object
         * @returns Promise
         */
        public query(request: api.IRequest): Promise<api.Response>;

        /**
         * Calls Alter.
         * @param request Operation message or plain object
         * @param callback Node-style callback called with the error, if any, and Payload
         */
        public alter(request: api.IOperation, callback: api.Dgraph.AlterCallback): void;

        /**
         * Calls Alter.
         * @param request Operation message or plain object
         * @returns Promise
         */
        public alter(request: api.IOperation): Promise<api.Payload>;

        /**
         * Calls CommitOrAbort.
         * @param request TxnContext message or plain object
         * @param callback Node-style callback called with the error, if any, and TxnContext
         */
        public commitOrAbort(request: api.ITxnContext, callback: api.Dgraph.CommitOrAbortCallback): void;

        /**
         * Calls CommitOrAbort.
         * @param request TxnContext message or plain object
         * @returns Promise
         */
        public commitOrAbort(request: api.ITxnContext): Promise<api.TxnContext>;

        /**
         * Calls CheckVersion.
         * @param request Check message or plain object
         * @param callback Node-style callback called with the error, if any, and Version
         */
        public checkVersion(request: api.ICheck, callback: api.Dgraph.CheckVersionCallback): void;

        /**
         * Calls CheckVersion.
         * @param request Check message or plain object
         * @returns Promise
         */
        public checkVersion(request: api.ICheck): Promise<api.Version>;
    }

    namespace Dgraph {

        /**
         * Callback as used by {@link api.Dgraph#login}.
         * @param error Error, if any
         * @param [response] Response
         */
        type LoginCallback = (error: (Error|null), response?: api.Response) => void;

        /**
         * Callback as used by {@link api.Dgraph#query}.
         * @param error Error, if any
         * @param [response] Response
         */
        type QueryCallback = (error: (Error|null), response?: api.Response) => void;

        /**
         * Callback as used by {@link api.Dgraph#alter}.
         * @param error Error, if any
         * @param [response] Payload
         */
        type AlterCallback = (error: (Error|null), response?: api.Payload) => void;

        /**
         * Callback as used by {@link api.Dgraph#commitOrAbort}.
         * @param error Error, if any
         * @param [response] TxnContext
         */
        type CommitOrAbortCallback = (error: (Error|null), response?: api.TxnContext) => void;

        /**
         * Callback as used by {@link api.Dgraph#checkVersion}.
         * @param error Error, if any
         * @param [response] Version
         */
        type CheckVersionCallback = (error: (Error|null), response?: api.Version) => void;
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request startTs */
        startTs?: (number|Long|null);

        /** Request query */
        query?: (string|null);

        /** Request vars */
        vars?: ({ [k: string]: string }|null);

        /** Request readOnly */
        readOnly?: (boolean|null);

        /** Request bestEffort */
        bestEffort?: (boolean|null);

        /** Request mutations */
        mutations?: (api.IMutation[]|null);

        /** Request commitNow */
        commitNow?: (boolean|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IRequest);

        /** Request startTs. */
        public startTs: (number|Long);

        /** Request query. */
        public query: string;

        /** Request vars. */
        public vars: { [k: string]: string };

        /** Request readOnly. */
        public readOnly: boolean;

        /** Request bestEffort. */
        public bestEffort: boolean;

        /** Request mutations. */
        public mutations: api.IMutation[];

        /** Request commitNow. */
        public commitNow: boolean;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: api.IRequest): api.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link api.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link api.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): api.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uids. */
    interface IUids {

        /** Uids uids */
        uids?: (string[]|null);
    }

    /** Represents an Uids. */
    class Uids implements IUids {

        /**
         * Constructs a new Uids.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IUids);

        /** Uids uids. */
        public uids: string[];

        /**
         * Creates a new Uids instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uids instance
         */
        public static create(properties?: api.IUids): api.Uids;

        /**
         * Encodes the specified Uids message. Does not implicitly {@link api.Uids.verify|verify} messages.
         * @param message Uids message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IUids, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uids message, length delimited. Does not implicitly {@link api.Uids.verify|verify} messages.
         * @param message Uids message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IUids, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uids message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Uids;

        /**
         * Decodes an Uids message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Uids;

        /**
         * Verifies an Uids message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Uids message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uids
         */
        public static fromObject(object: { [k: string]: any }): api.Uids;

        /**
         * Creates a plain object from an Uids message. Also converts values to other types if specified.
         * @param message Uids
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Uids, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uids to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response json */
        json?: (Uint8Array|null);

        /** Response txn */
        txn?: (api.ITxnContext|null);

        /** Response latency */
        latency?: (api.ILatency|null);

        /** Response metrics */
        metrics?: (api.IMetrics|null);

        /** Response uids */
        uids?: ({ [k: string]: string }|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IResponse);

        /** Response json. */
        public json: Uint8Array;

        /** Response txn. */
        public txn?: (api.ITxnContext|null);

        /** Response latency. */
        public latency?: (api.ILatency|null);

        /** Response metrics. */
        public metrics?: (api.IMetrics|null);

        /** Response uids. */
        public uids: { [k: string]: string };

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: api.IResponse): api.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link api.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link api.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): api.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Mutation. */
    interface IMutation {

        /** Mutation setJson */
        setJson?: (Uint8Array|null);

        /** Mutation deleteJson */
        deleteJson?: (Uint8Array|null);

        /** Mutation setNquads */
        setNquads?: (Uint8Array|null);

        /** Mutation delNquads */
        delNquads?: (Uint8Array|null);

        /** Mutation set */
        set?: (api.INQuad[]|null);

        /** Mutation del */
        del?: (api.INQuad[]|null);

        /** Mutation cond */
        cond?: (string|null);

        /** Mutation commitNow */
        commitNow?: (boolean|null);
    }

    /** Represents a Mutation. */
    class Mutation implements IMutation {

        /**
         * Constructs a new Mutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IMutation);

        /** Mutation setJson. */
        public setJson: Uint8Array;

        /** Mutation deleteJson. */
        public deleteJson: Uint8Array;

        /** Mutation setNquads. */
        public setNquads: Uint8Array;

        /** Mutation delNquads. */
        public delNquads: Uint8Array;

        /** Mutation set. */
        public set: api.INQuad[];

        /** Mutation del. */
        public del: api.INQuad[];

        /** Mutation cond. */
        public cond: string;

        /** Mutation commitNow. */
        public commitNow: boolean;

        /**
         * Creates a new Mutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mutation instance
         */
        public static create(properties?: api.IMutation): api.Mutation;

        /**
         * Encodes the specified Mutation message. Does not implicitly {@link api.Mutation.verify|verify} messages.
         * @param message Mutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mutation message, length delimited. Does not implicitly {@link api.Mutation.verify|verify} messages.
         * @param message Mutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Mutation;

        /**
         * Decodes a Mutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Mutation;

        /**
         * Verifies a Mutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mutation
         */
        public static fromObject(object: { [k: string]: any }): api.Mutation;

        /**
         * Creates a plain object from a Mutation message. Also converts values to other types if specified.
         * @param message Mutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Mutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mutation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Operation. */
    interface IOperation {

        /** Operation schema */
        schema?: (string|null);

        /** Operation dropAttr */
        dropAttr?: (string|null);

        /** Operation dropAll */
        dropAll?: (boolean|null);

        /** Operation dropOp */
        dropOp?: (api.Operation.DropOp|null);

        /** Operation dropValue */
        dropValue?: (string|null);

        /** Operation runInBackground */
        runInBackground?: (boolean|null);
    }

    /** Represents an Operation. */
    class Operation implements IOperation {

        /**
         * Constructs a new Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IOperation);

        /** Operation schema. */
        public schema: string;

        /** Operation dropAttr. */
        public dropAttr: string;

        /** Operation dropAll. */
        public dropAll: boolean;

        /** Operation dropOp. */
        public dropOp: api.Operation.DropOp;

        /** Operation dropValue. */
        public dropValue: string;

        /** Operation runInBackground. */
        public runInBackground: boolean;

        /**
         * Creates a new Operation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operation instance
         */
        public static create(properties?: api.IOperation): api.Operation;

        /**
         * Encodes the specified Operation message. Does not implicitly {@link api.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link api.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Operation;

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Operation;

        /**
         * Verifies an Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operation
         */
        public static fromObject(object: { [k: string]: any }): api.Operation;

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @param message Operation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Operation {

        /** DropOp enum. */
        enum DropOp {
            NONE = 0,
            ALL = 1,
            DATA = 2,
            ATTR = 3,
            TYPE = 4
        }
    }

    /** Properties of a Payload. */
    interface IPayload {

        /** Payload Data */
        Data?: (Uint8Array|null);
    }

    /** Represents a Payload. */
    class Payload implements IPayload {

        /**
         * Constructs a new Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IPayload);

        /** Payload Data. */
        public Data: Uint8Array;

        /**
         * Creates a new Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payload instance
         */
        public static create(properties?: api.IPayload): api.Payload;

        /**
         * Encodes the specified Payload message. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link api.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Payload;

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Payload;

        /**
         * Verifies a Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payload
         */
        public static fromObject(object: { [k: string]: any }): api.Payload;

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @param message Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TxnContext. */
    interface ITxnContext {

        /** TxnContext startTs */
        startTs?: (number|Long|null);

        /** TxnContext commitTs */
        commitTs?: (number|Long|null);

        /** TxnContext aborted */
        aborted?: (boolean|null);

        /** TxnContext keys */
        keys?: (string[]|null);

        /** TxnContext preds */
        preds?: (string[]|null);
    }

    /** Represents a TxnContext. */
    class TxnContext implements ITxnContext {

        /**
         * Constructs a new TxnContext.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ITxnContext);

        /** TxnContext startTs. */
        public startTs: (number|Long);

        /** TxnContext commitTs. */
        public commitTs: (number|Long);

        /** TxnContext aborted. */
        public aborted: boolean;

        /** TxnContext keys. */
        public keys: string[];

        /** TxnContext preds. */
        public preds: string[];

        /**
         * Creates a new TxnContext instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxnContext instance
         */
        public static create(properties?: api.ITxnContext): api.TxnContext;

        /**
         * Encodes the specified TxnContext message. Does not implicitly {@link api.TxnContext.verify|verify} messages.
         * @param message TxnContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ITxnContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxnContext message, length delimited. Does not implicitly {@link api.TxnContext.verify|verify} messages.
         * @param message TxnContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ITxnContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxnContext message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxnContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.TxnContext;

        /**
         * Decodes a TxnContext message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxnContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.TxnContext;

        /**
         * Verifies a TxnContext message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxnContext message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxnContext
         */
        public static fromObject(object: { [k: string]: any }): api.TxnContext;

        /**
         * Creates a plain object from a TxnContext message. Also converts values to other types if specified.
         * @param message TxnContext
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.TxnContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxnContext to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Check. */
    interface ICheck {
    }

    /** Represents a Check. */
    class Check implements ICheck {

        /**
         * Constructs a new Check.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ICheck);

        /**
         * Creates a new Check instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Check instance
         */
        public static create(properties?: api.ICheck): api.Check;

        /**
         * Encodes the specified Check message. Does not implicitly {@link api.Check.verify|verify} messages.
         * @param message Check message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ICheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Check message, length delimited. Does not implicitly {@link api.Check.verify|verify} messages.
         * @param message Check message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ICheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Check message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Check;

        /**
         * Decodes a Check message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Check;

        /**
         * Verifies a Check message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Check message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Check
         */
        public static fromObject(object: { [k: string]: any }): api.Check;

        /**
         * Creates a plain object from a Check message. Also converts values to other types if specified.
         * @param message Check
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Check, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Check to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Version. */
    interface IVersion {

        /** Version tag */
        tag?: (string|null);
    }

    /** Represents a Version. */
    class Version implements IVersion {

        /**
         * Constructs a new Version.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IVersion);

        /** Version tag. */
        public tag: string;

        /**
         * Creates a new Version instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Version instance
         */
        public static create(properties?: api.IVersion): api.Version;

        /**
         * Encodes the specified Version message. Does not implicitly {@link api.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Version message, length delimited. Does not implicitly {@link api.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Version;

        /**
         * Decodes a Version message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Version;

        /**
         * Verifies a Version message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Version message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Version
         */
        public static fromObject(object: { [k: string]: any }): api.Version;

        /**
         * Creates a plain object from a Version message. Also converts values to other types if specified.
         * @param message Version
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Version to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Latency. */
    interface ILatency {

        /** Latency parsingNs */
        parsingNs?: (number|Long|null);

        /** Latency processingNs */
        processingNs?: (number|Long|null);

        /** Latency encodingNs */
        encodingNs?: (number|Long|null);

        /** Latency assignTimestampNs */
        assignTimestampNs?: (number|Long|null);

        /** Latency totalNs */
        totalNs?: (number|Long|null);
    }

    /** Represents a Latency. */
    class Latency implements ILatency {

        /**
         * Constructs a new Latency.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ILatency);

        /** Latency parsingNs. */
        public parsingNs: (number|Long);

        /** Latency processingNs. */
        public processingNs: (number|Long);

        /** Latency encodingNs. */
        public encodingNs: (number|Long);

        /** Latency assignTimestampNs. */
        public assignTimestampNs: (number|Long);

        /** Latency totalNs. */
        public totalNs: (number|Long);

        /**
         * Creates a new Latency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Latency instance
         */
        public static create(properties?: api.ILatency): api.Latency;

        /**
         * Encodes the specified Latency message. Does not implicitly {@link api.Latency.verify|verify} messages.
         * @param message Latency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ILatency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Latency message, length delimited. Does not implicitly {@link api.Latency.verify|verify} messages.
         * @param message Latency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ILatency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Latency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Latency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Latency;

        /**
         * Decodes a Latency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Latency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Latency;

        /**
         * Verifies a Latency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Latency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Latency
         */
        public static fromObject(object: { [k: string]: any }): api.Latency;

        /**
         * Creates a plain object from a Latency message. Also converts values to other types if specified.
         * @param message Latency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Latency, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Latency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Metrics. */
    interface IMetrics {

        /** Metrics numUids */
        numUids?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a Metrics. */
    class Metrics implements IMetrics {

        /**
         * Constructs a new Metrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IMetrics);

        /** Metrics numUids. */
        public numUids: { [k: string]: (number|Long) };

        /**
         * Creates a new Metrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metrics instance
         */
        public static create(properties?: api.IMetrics): api.Metrics;

        /**
         * Encodes the specified Metrics message. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @param message Metrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metrics message, length delimited. Does not implicitly {@link api.Metrics.verify|verify} messages.
         * @param message Metrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Metrics;

        /**
         * Decodes a Metrics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Metrics;

        /**
         * Verifies a Metrics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metrics
         */
        public static fromObject(object: { [k: string]: any }): api.Metrics;

        /**
         * Creates a plain object from a Metrics message. Also converts values to other types if specified.
         * @param message Metrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NQuad. */
    interface INQuad {

        /** NQuad subject */
        subject?: (string|null);

        /** NQuad predicate */
        predicate?: (string|null);

        /** NQuad objectId */
        objectId?: (string|null);

        /** NQuad objectValue */
        objectValue?: (api.IValue|null);

        /** NQuad label */
        label?: (string|null);

        /** NQuad lang */
        lang?: (string|null);

        /** NQuad facets */
        facets?: (api.IFacet[]|null);
    }

    /** Represents a NQuad. */
    class NQuad implements INQuad {

        /**
         * Constructs a new NQuad.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.INQuad);

        /** NQuad subject. */
        public subject: string;

        /** NQuad predicate. */
        public predicate: string;

        /** NQuad objectId. */
        public objectId: string;

        /** NQuad objectValue. */
        public objectValue?: (api.IValue|null);

        /** NQuad label. */
        public label: string;

        /** NQuad lang. */
        public lang: string;

        /** NQuad facets. */
        public facets: api.IFacet[];

        /**
         * Creates a new NQuad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NQuad instance
         */
        public static create(properties?: api.INQuad): api.NQuad;

        /**
         * Encodes the specified NQuad message. Does not implicitly {@link api.NQuad.verify|verify} messages.
         * @param message NQuad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.INQuad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NQuad message, length delimited. Does not implicitly {@link api.NQuad.verify|verify} messages.
         * @param message NQuad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.INQuad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NQuad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NQuad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.NQuad;

        /**
         * Decodes a NQuad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NQuad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.NQuad;

        /**
         * Verifies a NQuad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NQuad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NQuad
         */
        public static fromObject(object: { [k: string]: any }): api.NQuad;

        /**
         * Creates a plain object from a NQuad message. Also converts values to other types if specified.
         * @param message NQuad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.NQuad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NQuad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Value. */
    interface IValue {

        /** Value defaultVal */
        defaultVal?: (string|null);

        /** Value bytesVal */
        bytesVal?: (Uint8Array|null);

        /** Value intVal */
        intVal?: (number|Long|null);

        /** Value boolVal */
        boolVal?: (boolean|null);

        /** Value strVal */
        strVal?: (string|null);

        /** Value doubleVal */
        doubleVal?: (number|null);

        /** Value geoVal */
        geoVal?: (Uint8Array|null);

        /** Value dateVal */
        dateVal?: (Uint8Array|null);

        /** Value datetimeVal */
        datetimeVal?: (Uint8Array|null);

        /** Value passwordVal */
        passwordVal?: (string|null);

        /** Value uidVal */
        uidVal?: (number|Long|null);
    }

    /** Represents a Value. */
    class Value implements IValue {

        /**
         * Constructs a new Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IValue);

        /** Value defaultVal. */
        public defaultVal: string;

        /** Value bytesVal. */
        public bytesVal: Uint8Array;

        /** Value intVal. */
        public intVal: (number|Long);

        /** Value boolVal. */
        public boolVal: boolean;

        /** Value strVal. */
        public strVal: string;

        /** Value doubleVal. */
        public doubleVal: number;

        /** Value geoVal. */
        public geoVal: Uint8Array;

        /** Value dateVal. */
        public dateVal: Uint8Array;

        /** Value datetimeVal. */
        public datetimeVal: Uint8Array;

        /** Value passwordVal. */
        public passwordVal: string;

        /** Value uidVal. */
        public uidVal: (number|Long);

        /** Value val. */
        public val?: ("defaultVal"|"bytesVal"|"intVal"|"boolVal"|"strVal"|"doubleVal"|"geoVal"|"dateVal"|"datetimeVal"|"passwordVal"|"uidVal");

        /**
         * Creates a new Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Value instance
         */
        public static create(properties?: api.IValue): api.Value;

        /**
         * Encodes the specified Value message. Does not implicitly {@link api.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link api.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Value;

        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Value;

        /**
         * Verifies a Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Value
         */
        public static fromObject(object: { [k: string]: any }): api.Value;

        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @param message Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Facet. */
    interface IFacet {

        /** Facet key */
        key?: (string|null);

        /** Facet value */
        value?: (Uint8Array|null);

        /** Facet valType */
        valType?: (api.Facet.ValType|null);

        /** Facet tokens */
        tokens?: (string[]|null);

        /** Facet alias */
        alias?: (string|null);
    }

    /** Represents a Facet. */
    class Facet implements IFacet {

        /**
         * Constructs a new Facet.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IFacet);

        /** Facet key. */
        public key: string;

        /** Facet value. */
        public value: Uint8Array;

        /** Facet valType. */
        public valType: api.Facet.ValType;

        /** Facet tokens. */
        public tokens: string[];

        /** Facet alias. */
        public alias: string;

        /**
         * Creates a new Facet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Facet instance
         */
        public static create(properties?: api.IFacet): api.Facet;

        /**
         * Encodes the specified Facet message. Does not implicitly {@link api.Facet.verify|verify} messages.
         * @param message Facet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IFacet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Facet message, length delimited. Does not implicitly {@link api.Facet.verify|verify} messages.
         * @param message Facet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IFacet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Facet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Facet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Facet;

        /**
         * Decodes a Facet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Facet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Facet;

        /**
         * Verifies a Facet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Facet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Facet
         */
        public static fromObject(object: { [k: string]: any }): api.Facet;

        /**
         * Creates a plain object from a Facet message. Also converts values to other types if specified.
         * @param message Facet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Facet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Facet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Facet {

        /** ValType enum. */
        enum ValType {
            STRING = 0,
            INT = 1,
            FLOAT = 2,
            BOOL = 3,
            DATETIME = 4
        }
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest userid */
        userid?: (string|null);

        /** LoginRequest password */
        password?: (string|null);

        /** LoginRequest refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ILoginRequest);

        /** LoginRequest userid. */
        public userid: string;

        /** LoginRequest password. */
        public password: string;

        /** LoginRequest refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: api.ILoginRequest): api.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link api.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link api.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): api.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Jwt. */
    interface IJwt {

        /** Jwt accessJwt */
        accessJwt?: (string|null);

        /** Jwt refreshJwt */
        refreshJwt?: (string|null);
    }

    /** Represents a Jwt. */
    class Jwt implements IJwt {

        /**
         * Constructs a new Jwt.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IJwt);

        /** Jwt accessJwt. */
        public accessJwt: string;

        /** Jwt refreshJwt. */
        public refreshJwt: string;

        /**
         * Creates a new Jwt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Jwt instance
         */
        public static create(properties?: api.IJwt): api.Jwt;

        /**
         * Encodes the specified Jwt message. Does not implicitly {@link api.Jwt.verify|verify} messages.
         * @param message Jwt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IJwt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Jwt message, length delimited. Does not implicitly {@link api.Jwt.verify|verify} messages.
         * @param message Jwt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IJwt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Jwt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.Jwt;

        /**
         * Decodes a Jwt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Jwt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.Jwt;

        /**
         * Verifies a Jwt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Jwt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Jwt
         */
        public static fromObject(object: { [k: string]: any }): api.Jwt;

        /**
         * Creates a plain object from a Jwt message. Also converts values to other types if specified.
         * @param message Jwt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.Jwt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Jwt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
