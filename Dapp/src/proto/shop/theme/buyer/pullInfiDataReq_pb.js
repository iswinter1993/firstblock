// source: shop/theme/buyer/pullInfiDataReq.proto
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

goog.exportSymbol('proto.proto.shop.theme.buyer.pullInfiDataReq.Msg', null, global);
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
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.theme.buyer.pullInfiDataReq.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.displayName = 'proto.proto.shop.theme.buyer.pullInfiDataReq.Msg';
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
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    themeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    infiSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    infiLoadedCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastThemeSpuId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.theme.buyer.pullInfiDataReq.Msg;
  return proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThemeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInfiSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInfiLoadedCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastThemeSpuId(value);
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
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThemeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInfiSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getInfiLoadedCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLastThemeSpuId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 theme_id = 1;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.getThemeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.setThemeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 infi_size = 3;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.getInfiSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.setInfiSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 infi_loaded_count = 4;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.getInfiLoadedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.setInfiLoadedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 last_theme_spu_id = 5;
 * @return {number}
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.getLastThemeSpuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.theme.buyer.pullInfiDataReq.Msg} returns this
 */
proto.proto.shop.theme.buyer.pullInfiDataReq.Msg.prototype.setLastThemeSpuId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.proto.shop.theme.buyer.pullInfiDataReq);