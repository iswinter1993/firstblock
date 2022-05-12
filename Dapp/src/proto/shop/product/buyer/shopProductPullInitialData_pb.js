// source: shop/product/buyer/shopProductPullInitialData.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg', null, global);
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
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.displayName = 'proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg';
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
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoryId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sortBy: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    loadCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    categoryCode: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg;
  return proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategoryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSortBy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLoadCount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryCode(value);
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
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoryId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSortBy();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLoadCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCategoryCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 category_id = 1;
 * @return {number}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.getCategoryId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} returns this
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.setCategoryId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sort_by = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} returns this
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} returns this
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 load_count = 4;
 * @return {number}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.getLoadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} returns this
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.setLoadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string category_code = 5;
 * @return {string}
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.getCategoryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg} returns this
 */
proto.proto.shop.product.buyer.shopProductPullInitialData1Req.Msg.prototype.setCategoryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.proto.shop.product.buyer.shopProductPullInitialData1Req);