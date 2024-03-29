// source: shop/buyAgainNew/pullInitialBuyAgainNewRes.proto
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

var shop_common_common_pb = require('../common/common_pb.js');
goog.object.extend(proto, shop_common_common_pb);
goog.exportSymbol('proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts', null, global);
goog.exportSymbol('proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes', null, global);
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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.displayName = 'proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes';
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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.displayName = 'proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.repeatedFields_ = [2];



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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.toObject, includeInstance),
    limitStock: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes;
  return proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = new proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts;
      reader.readMessage(value,proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimitStock(value);
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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.serializeBinaryToWriter
    );
  }
  f = message.getLimitStock();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated BuyAgainNewProducts products = 2;
 * @return {!Array<!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts>}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts, 2));
};


/**
 * @param {!Array<!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts>} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} returns this
*/
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


/**
 * optional int32 limit_stock = 3;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.getLimitStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProductsRes.prototype.setLimitStock = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.repeatedFields_ = [4,5,18];



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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.toObject = function(includeInstance, msg) {
  var f, obj = {
    skuId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    skuUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    skuImagesList: jspb.Message.toObjectList(msg.getSkuImagesList(),
    shop_common_common_pb.SkuImages.toObject, includeInstance),
    priceRangesList: jspb.Message.toObjectList(msg.getPriceRangesList(),
    shop_common_common_pb.PriceRanges.toObject, includeInstance),
    currencySymbol: jspb.Message.getFieldWithDefault(msg, 7, ""),
    favorite: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    actualStock: jspb.Message.getFieldWithDefault(msg, 9, 0),
    virtualStock: jspb.Message.getFieldWithDefault(msg, 10, 0),
    goodsOfSource: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sourcingPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    sourcingMoq: jspb.Message.getFieldWithDefault(msg, 13, ""),
    sourcingLeadTimeDays: jspb.Message.getFieldWithDefault(msg, 14, 0),
    countryOfOrigin: jspb.Message.getFieldWithDefault(msg, 15, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 16, ""),
    orderPlacedTime: jspb.Message.getFieldWithDefault(msg, 17, 0),
    promotionPricesList: jspb.Message.toObjectList(msg.getPromotionPricesList(),
    shop_common_common_pb.PriceRanges.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 19, ""),
    protocolPrice: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts;
  return proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkuId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuUuid(value);
      break;
    case 4:
      var value = new shop_common_common_pb.SkuImages;
      reader.readMessage(value,shop_common_common_pb.SkuImages.deserializeBinaryFromReader);
      msg.addSkuImages(value);
      break;
    case 5:
      var value = new shop_common_common_pb.PriceRanges;
      reader.readMessage(value,shop_common_common_pb.PriceRanges.deserializeBinaryFromReader);
      msg.addPriceRanges(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencySymbol(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFavorite(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActualStock(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVirtualStock(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoodsOfSource(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSourcingPrice(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcingMoq(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourcingLeadTimeDays(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryOfOrigin(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderPlacedTime(value);
      break;
    case 18:
      var value = new shop_common_common_pb.PriceRanges;
      reader.readMessage(value,shop_common_common_pb.PriceRanges.deserializeBinaryFromReader);
      msg.addPromotionPrices(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolPrice(value);
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
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkuId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProductName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSkuUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSkuImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      shop_common_common_pb.SkuImages.serializeBinaryToWriter
    );
  }
  f = message.getPriceRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      shop_common_common_pb.PriceRanges.serializeBinaryToWriter
    );
  }
  f = message.getCurrencySymbol();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFavorite();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getActualStock();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getVirtualStock();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getGoodsOfSource();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSourcingPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getSourcingMoq();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getSourcingLeadTimeDays();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getCountryOfOrigin();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getOrderPlacedTime();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getPromotionPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      shop_common_common_pb.PriceRanges.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getProtocolPrice();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional int32 sku_id = 1;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string product_name = 2;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getProductName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setProductName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sku_uuid = 3;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSkuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSkuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated proto.shop.SkuImages sku_images = 4;
 * @return {!Array<!proto.proto.shop.SkuImages>}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSkuImagesList = function() {
  return /** @type{!Array<!proto.proto.shop.SkuImages>} */ (
    jspb.Message.getRepeatedWrapperField(this, shop_common_common_pb.SkuImages, 4));
};


/**
 * @param {!Array<!proto.proto.shop.SkuImages>} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
*/
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSkuImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.shop.SkuImages=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.SkuImages}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.addSkuImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.shop.SkuImages, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.clearSkuImagesList = function() {
  return this.setSkuImagesList([]);
};


/**
 * repeated proto.shop.PriceRanges price_ranges = 5;
 * @return {!Array<!proto.proto.shop.PriceRanges>}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getPriceRangesList = function() {
  return /** @type{!Array<!proto.proto.shop.PriceRanges>} */ (
    jspb.Message.getRepeatedWrapperField(this, shop_common_common_pb.PriceRanges, 5));
};


/**
 * @param {!Array<!proto.proto.shop.PriceRanges>} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
*/
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setPriceRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.shop.PriceRanges=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.PriceRanges}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.addPriceRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.shop.PriceRanges, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.clearPriceRangesList = function() {
  return this.setPriceRangesList([]);
};


/**
 * optional string currency_symbol = 7;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getCurrencySymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setCurrencySymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool favorite = 8;
 * @return {boolean}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getFavorite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setFavorite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int32 actual_stock = 9;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getActualStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setActualStock = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 virtual_stock = 10;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getVirtualStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setVirtualStock = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string goods_of_source = 11;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getGoodsOfSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setGoodsOfSource = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional double sourcing_price = 12;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSourcingPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSourcingPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional string sourcing_moq = 13;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSourcingMoq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSourcingMoq = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 sourcing_lead_time_days = 14;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getSourcingLeadTimeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setSourcingLeadTimeDays = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string country_of_origin = 15;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getCountryOfOrigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setCountryOfOrigin = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string brand = 16;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional int64 order_placed_time = 17;
 * @return {number}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getOrderPlacedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setOrderPlacedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * repeated proto.shop.PriceRanges promotion_prices = 18;
 * @return {!Array<!proto.proto.shop.PriceRanges>}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getPromotionPricesList = function() {
  return /** @type{!Array<!proto.proto.shop.PriceRanges>} */ (
    jspb.Message.getRepeatedWrapperField(this, shop_common_common_pb.PriceRanges, 18));
};


/**
 * @param {!Array<!proto.proto.shop.PriceRanges>} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
*/
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setPromotionPricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.proto.shop.PriceRanges=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.PriceRanges}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.addPromotionPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.proto.shop.PriceRanges, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.clearPromotionPricesList = function() {
  return this.setPromotionPricesList([]);
};


/**
 * optional string status = 19;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string protocol_price = 20;
 * @return {string}
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.getProtocolPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts} returns this
 */
proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes.BuyAgainNewProducts.prototype.setProtocolPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


goog.object.extend(exports, proto.proto.shop.buyAgainNew.pullInitialBuyAgainNewRes);
