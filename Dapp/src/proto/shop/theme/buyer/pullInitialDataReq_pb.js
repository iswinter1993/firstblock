// source: shop/theme/buyer/pullInitialDataReq.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.shop.theme.buyer.pullInitialDataReq.Msg', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.theme.buyer.pullInitialDataReq.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.displayName = 'proto.proto.shop.theme.buyer.pullInitialDataReq.Msg';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    themeUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    loadCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.theme.buyer.pullInitialDataReq.Msg;
  return proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setThemeUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLoadCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThemeUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLoadCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string theme_uuid = 1;
 * @return {string}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.getThemeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.setThemeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 load_count = 2;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.getLoadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInitialDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInitialDataReq.Msg.prototype.setLoadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.proto.shop.theme.buyer.pullInitialDataReq);
