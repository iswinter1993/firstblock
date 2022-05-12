// source: shop/product/buyer/pullFactorySkuAddToCartRes.proto
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

var common_sp_sku_pb = require('../../../common/sp_sku_pb.js');
goog.object.extend(proto, common_sp_sku_pb);
goog.exportSymbol('proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg', null, global);
goog.exportSymbol('proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption', null, global);
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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.displayName = 'proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption';
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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.displayName = 'proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg';
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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionItemName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    optionId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    optionItemId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption;
  return proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionItemName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionItemId(value);
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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionItemName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptionId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOptionItemId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string option_name = 1;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.getOptionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.setOptionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string option_item_name = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.getOptionItemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.setOptionItemName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 option_id = 3;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.getOptionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.setOptionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 option_item_id = 4;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.getOptionItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.prototype.setOptionItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.repeatedFields_ = [2];



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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    spSku: (f = msg.getSpSku()) && common_sp_sku_pb.SpSku.toObject(includeInstance, f),
    skuOptionList: jspb.Message.toObjectList(msg.getSkuOptionList(),
    proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.toObject, includeInstance),
    imageLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deliveryDays: jspb.Message.getFieldWithDefault(msg, 4, ""),
    favorite: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg;
  return proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_sku_pb.SpSku;
      reader.readMessage(value,common_sp_sku_pb.SpSku.deserializeBinaryFromReader);
      msg.setSpSku(value);
      break;
    case 2:
      var value = new proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption;
      reader.readMessage(value,proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.deserializeBinaryFromReader);
      msg.addSkuOption(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageLink(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryDays(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFavorite(value);
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
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpSku();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_sku_pb.SpSku.serializeBinaryToWriter
    );
  }
  f = message.getSkuOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption.serializeBinaryToWriter
    );
  }
  f = message.getImageLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeliveryDays();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFavorite();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional proto.SpSku sp_sku = 1;
 * @return {?proto.proto.SpSku}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.getSpSku = function() {
  return /** @type{?proto.proto.SpSku} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_pb.SpSku, 1));
};


/**
 * @param {?proto.proto.SpSku|undefined} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.setSpSku = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.clearSpSku = function() {
  return this.setSpSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.hasSpSku = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SkuOption sku_option = 2;
 * @return {!Array<!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption>}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.getSkuOptionList = function() {
  return /** @type{!Array<!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption, 2));
};


/**
 * @param {!Array<!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption>} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.setSkuOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.addSkuOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.SkuOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.clearSkuOptionList = function() {
  return this.setSkuOptionList([]);
};


/**
 * optional string image_link = 3;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.getImageLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.setImageLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string delivery_days = 4;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.getDeliveryDays = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.setDeliveryDays = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 favorite = 5;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.getFavorite = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes.Msg.prototype.setFavorite = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.proto.shop.product.buyer.pullFactorySkuAddToCartRes);
