// source: common/sp_sku_price.proto
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

goog.exportSymbol('proto.proto.SpSkuPrice', null, global);
goog.exportSymbol('proto.proto.SpSkuPriceNew', null, global);
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
proto.proto.SpSkuPriceNew = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpSkuPriceNew, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpSkuPriceNew.displayName = 'proto.proto.SpSkuPriceNew';
}
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
proto.proto.SpSkuPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpSkuPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpSkuPrice.displayName = 'proto.proto.SpSkuPrice';
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
proto.proto.SpSkuPriceNew.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpSkuPriceNew.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpSkuPriceNew} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuPriceNew.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spSkuId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    currencyId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.proto.SpSkuPriceNew}
 */
proto.proto.SpSkuPriceNew.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpSkuPriceNew;
  return proto.proto.SpSkuPriceNew.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpSkuPriceNew} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpSkuPriceNew}
 */
proto.proto.SpSkuPriceNew.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpSkuId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrencyId(value);
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
proto.proto.SpSkuPriceNew.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpSkuPriceNew.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpSkuPriceNew} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuPriceNew.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpSkuId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCurrencyId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpSkuPriceNew.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPriceNew} returns this
 */
proto.proto.SpSkuPriceNew.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_sku_id = 2;
 * @return {number}
 */
proto.proto.SpSkuPriceNew.prototype.getSpSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPriceNew} returns this
 */
proto.proto.SpSkuPriceNew.prototype.setSpSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 quantity = 3;
 * @return {number}
 */
proto.proto.SpSkuPriceNew.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPriceNew} returns this
 */
proto.proto.SpSkuPriceNew.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double price = 4;
 * @return {number}
 */
proto.proto.SpSkuPriceNew.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPriceNew} returns this
 */
proto.proto.SpSkuPriceNew.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 currency_id = 5;
 * @return {number}
 */
proto.proto.SpSkuPriceNew.prototype.getCurrencyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPriceNew} returns this
 */
proto.proto.SpSkuPriceNew.prototype.setCurrencyId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





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
proto.proto.SpSkuPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpSkuPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpSkuPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spSkuId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    minQuantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxQuantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    currencyId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    creationTime: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.proto.SpSkuPrice}
 */
proto.proto.SpSkuPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpSkuPrice;
  return proto.proto.SpSkuPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpSkuPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpSkuPrice}
 */
proto.proto.SpSkuPrice.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpSkuId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinQuantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxQuantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrencyId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTime(value);
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
proto.proto.SpSkuPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpSkuPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpSkuPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpSkuId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMinQuantity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMaxQuantity();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getCurrencyId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCreationTime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_sku_id = 2;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getSpSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setSpSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 min_quantity = 3;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getMinQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setMinQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 max_quantity = 4;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getMaxQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setMaxQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 currency_id = 6;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getCurrencyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setCurrencyId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 creation_time = 7;
 * @return {number}
 */
proto.proto.SpSkuPrice.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuPrice} returns this
 */
proto.proto.SpSkuPrice.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


goog.object.extend(exports, proto.proto);