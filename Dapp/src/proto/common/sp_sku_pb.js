// source: common/sp_sku.proto
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

goog.exportSymbol('proto.proto.SpSku', null, global);
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
proto.proto.SpSku = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpSku, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpSku.displayName = 'proto.proto.SpSku';
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
proto.proto.SpSku.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpSku.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpSku} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSku.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spSpuContentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skuNum: jspb.Message.getFieldWithDefault(msg, 3, ""),
    skuUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    skuName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    trueCost: jspb.Message.getFieldWithDefault(msg, 6, ""),
    trueCostCurrencyId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sourcingMoq: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sourcingLeadTimeDays: jspb.Message.getFieldWithDefault(msg, 9, 0),
    brand: jspb.Message.getFieldWithDefault(msg, 10, ""),
    countryOfOrigin: jspb.Message.getFieldWithDefault(msg, 11, ""),
    warrantyLengthDays: jspb.Message.getFieldWithDefault(msg, 12, 0),
    creationTime: jspb.Message.getFieldWithDefault(msg, 13, ""),
    sourcingPrice: jspb.Message.getFieldWithDefault(msg, 14, ""),
    isSourcingPriceOn: jspb.Message.getFieldWithDefault(msg, 15, 0),
    limitPurchaseQuantity: jspb.Message.getFieldWithDefault(msg, 16, 0),
    limitPurchaseQuantityTimeDays: jspb.Message.getFieldWithDefault(msg, 17, 0),
    noNextDayDelivery: jspb.Message.getFieldWithDefault(msg, 18, 0)
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
 * @return {!proto.proto.SpSku}
 */
proto.proto.SpSku.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpSku;
  return proto.proto.SpSku.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpSku} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpSku}
 */
proto.proto.SpSku.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSpSpuContentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuNum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrueCost(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrueCostCurrencyId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcingMoq(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourcingLeadTimeDays(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryOfOrigin(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWarrantyLengthDays(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreationTime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcingPrice(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsSourcingPriceOn(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimitPurchaseQuantity(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimitPurchaseQuantityTimeDays(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoNextDayDelivery(value);
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
proto.proto.SpSku.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpSku.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpSku} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSku.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpSpuContentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSkuNum();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSkuUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSkuName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTrueCost();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTrueCostCurrencyId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSourcingMoq();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourcingLeadTimeDays();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountryOfOrigin();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getWarrantyLengthDays();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getCreationTime();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getSourcingPrice();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIsSourcingPriceOn();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getLimitPurchaseQuantity();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getLimitPurchaseQuantityTimeDays();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getNoNextDayDelivery();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpSku.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_spu_content_id = 2;
 * @return {number}
 */
proto.proto.SpSku.prototype.getSpSpuContentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSpSpuContentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string sku_num = 3;
 * @return {string}
 */
proto.proto.SpSku.prototype.getSkuNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSkuNum = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sku_uuid = 4;
 * @return {string}
 */
proto.proto.SpSku.prototype.getSkuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSkuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sku_name = 5;
 * @return {string}
 */
proto.proto.SpSku.prototype.getSkuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSkuName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string true_cost = 6;
 * @return {string}
 */
proto.proto.SpSku.prototype.getTrueCost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setTrueCost = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 true_cost_currency_id = 7;
 * @return {number}
 */
proto.proto.SpSku.prototype.getTrueCostCurrencyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setTrueCostCurrencyId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string sourcing_moq = 8;
 * @return {string}
 */
proto.proto.SpSku.prototype.getSourcingMoq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSourcingMoq = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 sourcing_lead_time_days = 9;
 * @return {number}
 */
proto.proto.SpSku.prototype.getSourcingLeadTimeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSourcingLeadTimeDays = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string brand = 10;
 * @return {string}
 */
proto.proto.SpSku.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string country_of_origin = 11;
 * @return {string}
 */
proto.proto.SpSku.prototype.getCountryOfOrigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setCountryOfOrigin = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 warranty_length_days = 12;
 * @return {number}
 */
proto.proto.SpSku.prototype.getWarrantyLengthDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setWarrantyLengthDays = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string creation_time = 13;
 * @return {string}
 */
proto.proto.SpSku.prototype.getCreationTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string sourcing_price = 14;
 * @return {string}
 */
proto.proto.SpSku.prototype.getSourcingPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setSourcingPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 is_sourcing_price_on = 15;
 * @return {number}
 */
proto.proto.SpSku.prototype.getIsSourcingPriceOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setIsSourcingPriceOn = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 limit_purchase_quantity = 16;
 * @return {number}
 */
proto.proto.SpSku.prototype.getLimitPurchaseQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setLimitPurchaseQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 limit_purchase_quantity_time_days = 17;
 * @return {number}
 */
proto.proto.SpSku.prototype.getLimitPurchaseQuantityTimeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setLimitPurchaseQuantityTimeDays = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 no_next_day_delivery = 18;
 * @return {number}
 */
proto.proto.SpSku.prototype.getNoNextDayDelivery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSku} returns this
 */
proto.proto.SpSku.prototype.setNoNextDayDelivery = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


goog.object.extend(exports, proto.proto);