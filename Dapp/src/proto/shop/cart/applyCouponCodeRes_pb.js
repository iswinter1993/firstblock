// source: shop/cart/applyCouponCodeRes.proto
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

goog.exportSymbol('proto.shop.cart.applyCouponCodeRes.Msg', null, global);
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
proto.shop.cart.applyCouponCodeRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shop.cart.applyCouponCodeRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shop.cart.applyCouponCodeRes.Msg.displayName = 'proto.shop.cart.applyCouponCodeRes.Msg';
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
proto.shop.cart.applyCouponCodeRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.shop.cart.applyCouponCodeRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shop.cart.applyCouponCodeRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shop.cart.applyCouponCodeRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    discountType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    discountAmount: jspb.Message.getFieldWithDefault(msg, 6, ""),
    freeShipping: jspb.Message.getFieldWithDefault(msg, 7, 0),
    useType: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg}
 */
proto.shop.cart.applyCouponCodeRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shop.cart.applyCouponCodeRes.Msg;
  return proto.shop.cart.applyCouponCodeRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shop.cart.applyCouponCodeRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg}
 */
proto.shop.cart.applyCouponCodeRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiscountType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiscountAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFreeShipping(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseType(value);
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
proto.shop.cart.applyCouponCodeRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shop.cart.applyCouponCodeRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shop.cart.applyCouponCodeRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shop.cart.applyCouponCodeRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDiscountType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDiscountAmount();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFreeShipping();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getUseType();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string discount_type = 5;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getDiscountType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setDiscountType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string discount_amount = 6;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getDiscountAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setDiscountAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 free_shipping = 7;
 * @return {number}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getFreeShipping = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setFreeShipping = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string use_type = 8;
 * @return {string}
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.getUseType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.shop.cart.applyCouponCodeRes.Msg} returns this
 */
proto.shop.cart.applyCouponCodeRes.Msg.prototype.setUseType = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.shop.cart.applyCouponCodeRes);
