// source: shop/product/buyer/pullSkuShipTypeRes.proto
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

goog.exportSymbol('proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg', null, global);
goog.exportSymbol('proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku', null, global);
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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.displayName = 'proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku';
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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.displayName = 'proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg';
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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.toObject = function(includeInstance, msg) {
  var f, obj = {
    skuUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shipType: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku;
  return proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShipType(value);
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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkuUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShipType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string sku_uuid = 1;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.getSkuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku} returns this
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.setSkuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ship_type = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.getShipType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku} returns this
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.prototype.setShipType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.repeatedFields_ = [1];



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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    skuList: jspb.Message.toObjectList(msg.getSkuList(),
    proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.toObject, includeInstance)
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
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg;
  return proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku;
      reader.readMessage(value,proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.deserializeBinaryFromReader);
      msg.addSku(value);
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
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Sku sku = 1;
 * @return {!Array<!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku>}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.getSkuList = function() {
  return /** @type{!Array<!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku, 1));
};


/**
 * @param {!Array<!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku>} value
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.setSkuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku}
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.addSku = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.shop.product.buyer.pullSkuShipTypeRes.Sku, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuShipTypeRes.Msg.prototype.clearSkuList = function() {
  return this.setSkuList([]);
};


goog.object.extend(exports, proto.proto.shop.product.buyer.pullSkuShipTypeRes);
