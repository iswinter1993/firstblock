// source: shop/orders/buyer/orderSku/pullDataRes.proto
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

var common_sp_order_pb = require('../../../../common/sp_order_pb.js');
goog.object.extend(proto, common_sp_order_pb);
var common_sp_order_sku_pb = require('../../../../common/sp_order_sku_pb.js');
goog.object.extend(proto, common_sp_order_sku_pb);
var common_sp_sku_pb = require('../../../../common/sp_sku_pb.js');
goog.object.extend(proto, common_sp_sku_pb);
var common_sp_sku_images_pb = require('../../../../common/sp_sku_images_pb.js');
goog.object.extend(proto, common_sp_sku_images_pb);
var common_sp_order_sku_return_resolution_pb = require('../../../../common/sp_order_sku_return_resolution_pb.js');
goog.object.extend(proto, common_sp_order_sku_return_resolution_pb);
var common_sp_order_sku_return_reason_pb = require('../../../../common/sp_order_sku_return_reason_pb.js');
goog.object.extend(proto, common_sp_order_sku_return_reason_pb);
var common_sp_order_sku_replace_reason_pb = require('../../../../common/sp_order_sku_replace_reason_pb.js');
goog.object.extend(proto, common_sp_order_sku_replace_reason_pb);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec', null, global);
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.displayName = 'proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec';
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.displayName = 'proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend';
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.displayName = 'proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg';
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec;
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.repeatedFields_ = [4];



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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderSku: (f = msg.getSpOrderSku()) && common_sp_order_sku_pb.SpOrderSku.toObject(includeInstance, f),
    spSku: (f = msg.getSpSku()) && common_sp_sku_pb.SpSku.toObject(includeInstance, f),
    spSkuImage: (f = msg.getSpSkuImage()) && common_sp_sku_images_pb.SpSkuImages.toObject(includeInstance, f),
    skuSpecList: jspb.Message.toObjectList(msg.getSkuSpecList(),
    proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.toObject, includeInstance)
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend;
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_sku_pb.SpOrderSku;
      reader.readMessage(value,common_sp_order_sku_pb.SpOrderSku.deserializeBinaryFromReader);
      msg.setSpOrderSku(value);
      break;
    case 2:
      var value = new common_sp_sku_pb.SpSku;
      reader.readMessage(value,common_sp_sku_pb.SpSku.deserializeBinaryFromReader);
      msg.setSpSku(value);
      break;
    case 3:
      var value = new common_sp_sku_images_pb.SpSkuImages;
      reader.readMessage(value,common_sp_sku_images_pb.SpSkuImages.deserializeBinaryFromReader);
      msg.setSpSkuImage(value);
      break;
    case 4:
      var value = new proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec;
      reader.readMessage(value,proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.deserializeBinaryFromReader);
      msg.addSkuSpec(value);
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderSku();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_sku_pb.SpOrderSku.serializeBinaryToWriter
    );
  }
  f = message.getSpSku();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_sp_sku_pb.SpSku.serializeBinaryToWriter
    );
  }
  f = message.getSpSkuImage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_sp_sku_images_pb.SpSkuImages.serializeBinaryToWriter
    );
  }
  f = message.getSkuSpecList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderSku sp_order_sku = 1;
 * @return {?proto.proto.SpOrderSku}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.getSpOrderSku = function() {
  return /** @type{?proto.proto.SpOrderSku} */ (
    jspb.Message.getWrapperField(this, common_sp_order_sku_pb.SpOrderSku, 1));
};


/**
 * @param {?proto.proto.SpOrderSku|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.setSpOrderSku = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.clearSpOrderSku = function() {
  return this.setSpOrderSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.hasSpOrderSku = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.SpSku sp_sku = 2;
 * @return {?proto.proto.SpSku}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.getSpSku = function() {
  return /** @type{?proto.proto.SpSku} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_pb.SpSku, 2));
};


/**
 * @param {?proto.proto.SpSku|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.setSpSku = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.clearSpSku = function() {
  return this.setSpSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.hasSpSku = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.SpSkuImages sp_sku_image = 3;
 * @return {?proto.proto.SpSkuImages}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.getSpSkuImage = function() {
  return /** @type{?proto.proto.SpSkuImages} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_images_pb.SpSkuImages, 3));
};


/**
 * @param {?proto.proto.SpSkuImages|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.setSpSkuImage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.clearSpSkuImage = function() {
  return this.setSpSkuImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.hasSpSkuImage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated SkuSpec sku_spec = 4;
 * @return {!Array<!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec>}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.getSkuSpecList = function() {
  return /** @type{!Array<!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec, 4));
};


/**
 * @param {!Array<!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec>} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.setSkuSpecList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.addSkuSpec = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.shop.orders.buyer.orderSku.pullDataRes.SkuSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.prototype.clearSkuSpecList = function() {
  return this.setSkuSpecList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.repeatedFields_ = [3,4,5];



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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && common_sp_order_pb.SpOrder.toObject(includeInstance, f),
    orderSku: (f = msg.getOrderSku()) && proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.toObject(includeInstance, f),
    returnReasonList: jspb.Message.toObjectList(msg.getReturnReasonList(),
    common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason.toObject, includeInstance),
    returnResolutionList: jspb.Message.toObjectList(msg.getReturnResolutionList(),
    common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution.toObject, includeInstance),
    replaceReasonList: jspb.Message.toObjectList(msg.getReplaceReasonList(),
    common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason.toObject, includeInstance)
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg;
  return proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_pb.SpOrder;
      reader.readMessage(value,common_sp_order_pb.SpOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend;
      reader.readMessage(value,proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.deserializeBinaryFromReader);
      msg.setOrderSku(value);
      break;
    case 3:
      var value = new common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason;
      reader.readMessage(value,common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason.deserializeBinaryFromReader);
      msg.addReturnReason(value);
      break;
    case 4:
      var value = new common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution;
      reader.readMessage(value,common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution.deserializeBinaryFromReader);
      msg.addReturnResolution(value);
      break;
    case 5:
      var value = new common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason;
      reader.readMessage(value,common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason.deserializeBinaryFromReader);
      msg.addReplaceReason(value);
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
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_pb.SpOrder.serializeBinaryToWriter
    );
  }
  f = message.getOrderSku();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend.serializeBinaryToWriter
    );
  }
  f = message.getReturnReasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason.serializeBinaryToWriter
    );
  }
  f = message.getReturnResolutionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution.serializeBinaryToWriter
    );
  }
  f = message.getReplaceReasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrder order = 1;
 * @return {?proto.proto.SpOrder}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.getOrder = function() {
  return /** @type{?proto.proto.SpOrder} */ (
    jspb.Message.getWrapperField(this, common_sp_order_pb.SpOrder, 1));
};


/**
 * @param {?proto.proto.SpOrder|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrderSkuExtend order_sku = 2;
 * @return {?proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.getOrderSku = function() {
  return /** @type{?proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend, 2));
};


/**
 * @param {?proto.proto.shop.orders.buyer.orderSku.pullDataRes.OrderSkuExtend|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.setOrderSku = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.clearOrderSku = function() {
  return this.setOrderSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.hasOrderSku = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated proto.SpOrderSkuReturnReason return_reason = 3;
 * @return {!Array<!proto.proto.SpOrderSkuReturnReason>}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.getReturnReasonList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReturnReason>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason, 3));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReturnReason>} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.setReturnReasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReturnReason=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReturnReason}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.addReturnReason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.SpOrderSkuReturnReason, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.clearReturnReasonList = function() {
  return this.setReturnReasonList([]);
};


/**
 * repeated proto.SpOrderSkuReturnResolution return_resolution = 4;
 * @return {!Array<!proto.proto.SpOrderSkuReturnResolution>}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.getReturnResolutionList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReturnResolution>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution, 4));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReturnResolution>} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.setReturnResolutionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReturnResolution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReturnResolution}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.addReturnResolution = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.SpOrderSkuReturnResolution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.clearReturnResolutionList = function() {
  return this.setReturnResolutionList([]);
};


/**
 * repeated proto.SpOrderSkuReplaceReason replace_reason = 5;
 * @return {!Array<!proto.proto.SpOrderSkuReplaceReason>}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.getReplaceReasonList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReplaceReason>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason, 5));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReplaceReason>} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.setReplaceReasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReplaceReason=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReplaceReason}
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.addReplaceReason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.SpOrderSkuReplaceReason, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.pullDataRes.Msg.prototype.clearReplaceReasonList = function() {
  return this.setReplaceReasonList([]);
};


goog.object.extend(exports, proto.proto.shop.orders.buyer.orderSku.pullDataRes);
