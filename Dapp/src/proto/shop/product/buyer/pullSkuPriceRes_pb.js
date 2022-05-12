// source: shop/product/buyer/pullSkuPriceRes.proto
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

var common_sp_sku_price_pb = require('../../../common/sp_sku_price_pb.js');
goog.object.extend(proto, common_sp_sku_price_pb);
var common_sp_sku_promotion_price_pb = require('../../../common/sp_sku_promotion_price_pb.js');
goog.object.extend(proto, common_sp_sku_promotion_price_pb);
var common_sp_protocol_sku_price_pb = require('../../../common/sp_protocol_sku_price_pb.js');
goog.object.extend(proto, common_sp_protocol_sku_price_pb);
goog.exportSymbol('proto.proto.shop.product.buyer.pullSkuPriceRes.Msg', null, global);
goog.exportSymbol('proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem', null, global);
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
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.displayName = 'proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem';
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
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.product.buyer.pullSkuPriceRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.displayName = 'proto.proto.shop.product.buyer.pullSkuPriceRes.Msg';
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
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem;
  return proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.getOptionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.setOptionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string option_item_name = 2;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.getOptionItemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.setOptionItemName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 option_id = 3;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.getOptionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.setOptionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 option_item_id = 4;
 * @return {number}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.getOptionItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.prototype.setOptionItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.repeatedFields_ = [2,7,8,9];



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
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    skuName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionItemList: jspb.Message.toObjectList(msg.getOptionItemList(),
    proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.toObject, includeInstance),
    priceList: jspb.Message.toObjectList(msg.getPriceList(),
    common_sp_sku_price_pb.SpSkuPriceNew.toObject, includeInstance),
    promotionPriceList: jspb.Message.toObjectList(msg.getPromotionPriceList(),
    common_sp_sku_promotion_price_pb.SpSkuPromotionPrice.toObject, includeInstance),
    spProtocolSkuPriceList: jspb.Message.toObjectList(msg.getSpProtocolSkuPriceList(),
    common_sp_protocol_sku_price_pb.SpProtocolSkuPrice.toObject, includeInstance)
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
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.product.buyer.pullSkuPriceRes.Msg;
  return proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuName(value);
      break;
    case 2:
      var value = new proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem;
      reader.readMessage(value,proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.deserializeBinaryFromReader);
      msg.addOptionItem(value);
      break;
    case 7:
      var value = new common_sp_sku_price_pb.SpSkuPriceNew;
      reader.readMessage(value,common_sp_sku_price_pb.SpSkuPriceNew.deserializeBinaryFromReader);
      msg.addPrice(value);
      break;
    case 8:
      var value = new common_sp_sku_promotion_price_pb.SpSkuPromotionPrice;
      reader.readMessage(value,common_sp_sku_promotion_price_pb.SpSkuPromotionPrice.deserializeBinaryFromReader);
      msg.addPromotionPrice(value);
      break;
    case 9:
      var value = new common_sp_protocol_sku_price_pb.SpProtocolSkuPrice;
      reader.readMessage(value,common_sp_protocol_sku_price_pb.SpProtocolSkuPrice.deserializeBinaryFromReader);
      msg.addSpProtocolSkuPrice(value);
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
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkuName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem.serializeBinaryToWriter
    );
  }
  f = message.getPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      common_sp_sku_price_pb.SpSkuPriceNew.serializeBinaryToWriter
    );
  }
  f = message.getPromotionPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      common_sp_sku_promotion_price_pb.SpSkuPromotionPrice.serializeBinaryToWriter
    );
  }
  f = message.getSpProtocolSkuPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      common_sp_protocol_sku_price_pb.SpProtocolSkuPrice.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sku_name = 1;
 * @return {string}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.getSkuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.setSkuName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SkuOptionItem option_item = 2;
 * @return {!Array<!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem>}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.getOptionItemList = function() {
  return /** @type{!Array<!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem, 2));
};


/**
 * @param {!Array<!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem>} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.setOptionItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.addOptionItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shop.product.buyer.pullSkuPriceRes.SkuOptionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.clearOptionItemList = function() {
  return this.setOptionItemList([]);
};


/**
 * repeated proto.SpSkuPriceNew price = 7;
 * @return {!Array<!proto.proto.SpSkuPriceNew>}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.getPriceList = function() {
  return /** @type{!Array<!proto.proto.SpSkuPriceNew>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_sku_price_pb.SpSkuPriceNew, 7));
};


/**
 * @param {!Array<!proto.proto.SpSkuPriceNew>} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.setPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.proto.SpSkuPriceNew=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpSkuPriceNew}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.addPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.proto.SpSkuPriceNew, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.clearPriceList = function() {
  return this.setPriceList([]);
};


/**
 * repeated proto.SpSkuPromotionPrice promotion_price = 8;
 * @return {!Array<!proto.proto.SpSkuPromotionPrice>}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.getPromotionPriceList = function() {
  return /** @type{!Array<!proto.proto.SpSkuPromotionPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_sku_promotion_price_pb.SpSkuPromotionPrice, 8));
};


/**
 * @param {!Array<!proto.proto.SpSkuPromotionPrice>} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.setPromotionPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.proto.SpSkuPromotionPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpSkuPromotionPrice}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.addPromotionPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.SpSkuPromotionPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.clearPromotionPriceList = function() {
  return this.setPromotionPriceList([]);
};


/**
 * repeated proto.SpProtocolSkuPrice sp_protocol_sku_price = 9;
 * @return {!Array<!proto.proto.SpProtocolSkuPrice>}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.getSpProtocolSkuPriceList = function() {
  return /** @type{!Array<!proto.proto.SpProtocolSkuPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_protocol_sku_price_pb.SpProtocolSkuPrice, 9));
};


/**
 * @param {!Array<!proto.proto.SpProtocolSkuPrice>} value
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
*/
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.setSpProtocolSkuPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.proto.SpProtocolSkuPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpProtocolSkuPrice}
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.addSpProtocolSkuPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.proto.SpProtocolSkuPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.product.buyer.pullSkuPriceRes.Msg} returns this
 */
proto.proto.shop.product.buyer.pullSkuPriceRes.Msg.prototype.clearSpProtocolSkuPriceList = function() {
  return this.setSpProtocolSkuPriceList([]);
};


goog.object.extend(exports, proto.proto.shop.product.buyer.pullSkuPriceRes);
