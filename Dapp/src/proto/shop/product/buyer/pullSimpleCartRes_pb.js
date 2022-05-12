// source: shop/product/buyer/pullSImpleCartRes.proto
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

goog.exportSymbol('proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku', null, global);
goog.exportSymbol('proto.proto.shop.product.buyer.pullSimpleCartRes.Msg', null, global);
goog.exportSymbol('proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption', null, global);
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
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.displayName = 'proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption';
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
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.displayName = 'proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku';
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
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSimpleCartRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.displayName = 'proto.proto.shop.product.buyer.pullSimpleCartRes.Msg';
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
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption;
  return proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.repeatedFields_ = [3];



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
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.toObject = function(includeInstance, msg) {
  var f, obj = {
    cartSkuId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    skuName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    skuOptionList: jspb.Message.toObjectList(msg.getSkuOptionList(),
    proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.toObject, includeInstance),
    imageLink: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderedQuantity: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contentStatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
    spuStatus: jspb.Message.getFieldWithDefault(msg, 8, ""),
    goodsOfSource: jspb.Message.getFieldWithDefault(msg, 9, ""),
    totalAmount: jspb.Message.getFieldWithDefault(msg, 10, ""),
    unitPrice: jspb.Message.getFieldWithDefault(msg, 11, ""),
    skuUuid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku;
  return proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCartSkuId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuName(value);
      break;
    case 3:
      var value = new proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption;
      reader.readMessage(value,proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.deserializeBinaryFromReader);
      msg.addSkuOption(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageLink(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderedQuantity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpuStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoodsOfSource(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalAmount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitPrice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuUuid(value);
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
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCartSkuId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSkuName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSkuOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption.serializeBinaryToWriter
    );
  }
  f = message.getImageLink();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderedQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getContentStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSpuStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getGoodsOfSource();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTotalAmount();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUnitPrice();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSkuUuid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int32 cart_sku_id = 1;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getCartSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setCartSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sku_name = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getSkuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setSkuName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated SkuOption sku_option = 3;
 * @return {!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption>}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getSkuOptionList = function() {
  return /** @type{!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption, 3));
};


/**
 * @param {!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption>} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
*/
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setSkuOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.addSkuOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.shop.product.buyer.pullSimpleCartRes.SkuOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.clearSkuOptionList = function() {
  return this.setSkuOptionList([]);
};


/**
 * optional string image_link = 4;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getImageLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setImageLink = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 ordered_quantity = 5;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getOrderedQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setOrderedQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string content_status = 7;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getContentStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setContentStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string spu_status = 8;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getSpuStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setSpuStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string goods_of_source = 9;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getGoodsOfSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setGoodsOfSource = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string total_amount = 10;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getTotalAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string unit_price = 11;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getUnitPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setUnitPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string sku_uuid = 12;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.getSkuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.prototype.setSkuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.repeatedFields_ = [1];



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
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    cartSkuList: jspb.Message.toObjectList(msg.getCartSkuList(),
    proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.toObject, includeInstance),
    success: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSimpleCartRes.Msg;
  return proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku;
      reader.readMessage(value,proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.deserializeBinaryFromReader);
      msg.addCartSku(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuccess(value);
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
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCartSkuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated CartSku cart_sku = 1;
 * @return {!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku>}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.getCartSkuList = function() {
  return /** @type{!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku, 1));
};


/**
 * @param {!Array<!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku>} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.setCartSkuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.addCartSku = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.shop.product.buyer.pullSimpleCartRes.CartSku, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.clearCartSkuList = function() {
  return this.setCartSkuList([]);
};


/**
 * optional string success = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.getSuccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSimpleCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSimpleCartRes.Msg.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.proto.shop.product.buyer.pullSimpleCartRes);