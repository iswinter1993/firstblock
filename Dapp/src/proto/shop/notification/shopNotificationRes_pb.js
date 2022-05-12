// source: shop/notification/shopNotificationRes.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_sp_order_pb = require('../../common/sp_order_pb.js');
goog.object.extend(proto, common_sp_order_pb);
var common_sp_order_payment_pb = require('../../common/sp_order_payment_pb.js');
goog.object.extend(proto, common_sp_order_payment_pb);
var common_sp_order_payment_billed_pb = require('../../common/sp_order_payment_billed_pb.js');
goog.object.extend(proto, common_sp_order_payment_billed_pb);
var common_sp_order_payment_amendment_pb = require('../../common/sp_order_payment_amendment_pb.js');
goog.object.extend(proto, common_sp_order_payment_amendment_pb);
var common_sp_sku_images_pb = require('../../common/sp_sku_images_pb.js');
goog.object.extend(proto, common_sp_sku_images_pb);
goog.exportSymbol('proto.proto.shop.ShopNotificationRes', null, global);
goog.exportSymbol('proto.proto.shop.ShopPaymentBilled', null, global);
goog.exportSymbol('proto.proto.shop.ShopPaymentBilledExtend', null, global);
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
proto.proto.shop.ShopPaymentBilledExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.ShopPaymentBilledExtend.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.ShopPaymentBilledExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.ShopPaymentBilledExtend.displayName = 'proto.proto.shop.ShopPaymentBilledExtend';
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
proto.proto.shop.ShopPaymentBilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.ShopPaymentBilled.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.ShopPaymentBilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.ShopPaymentBilled.displayName = 'proto.proto.shop.ShopPaymentBilled';
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
proto.proto.shop.ShopNotificationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.ShopNotificationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.ShopNotificationRes.displayName = 'proto.proto.shop.ShopNotificationRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.ShopPaymentBilledExtend.repeatedFields_ = [4];



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
proto.proto.shop.ShopPaymentBilledExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.ShopPaymentBilledExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.ShopPaymentBilledExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopPaymentBilledExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrder: (f = msg.getSpOrder()) && common_sp_order_pb.SpOrder.toObject(includeInstance, f),
    spOrderPayment: (f = msg.getSpOrderPayment()) && common_sp_order_payment_pb.SpOrderPayment.toObject(includeInstance, f),
    spOrderPaymentBilled: (f = msg.getSpOrderPaymentBilled()) && common_sp_order_payment_billed_pb.SpOrderPaymentBilled.toObject(includeInstance, f),
    spSkuImageList: jspb.Message.toObjectList(msg.getSpSkuImageList(),
    common_sp_sku_images_pb.SpSkuImages.toObject, includeInstance),
    spOrderPaymentAmendment: (f = msg.getSpOrderPaymentAmendment()) && common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.toObject(includeInstance, f),
    dueOn: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.proto.shop.ShopPaymentBilledExtend}
 */
proto.proto.shop.ShopPaymentBilledExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.ShopPaymentBilledExtend;
  return proto.proto.shop.ShopPaymentBilledExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.ShopPaymentBilledExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend}
 */
proto.proto.shop.ShopPaymentBilledExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_pb.SpOrder;
      reader.readMessage(value,common_sp_order_pb.SpOrder.deserializeBinaryFromReader);
      msg.setSpOrder(value);
      break;
    case 2:
      var value = new common_sp_order_payment_pb.SpOrderPayment;
      reader.readMessage(value,common_sp_order_payment_pb.SpOrderPayment.deserializeBinaryFromReader);
      msg.setSpOrderPayment(value);
      break;
    case 3:
      var value = new common_sp_order_payment_billed_pb.SpOrderPaymentBilled;
      reader.readMessage(value,common_sp_order_payment_billed_pb.SpOrderPaymentBilled.deserializeBinaryFromReader);
      msg.setSpOrderPaymentBilled(value);
      break;
    case 4:
      var value = new common_sp_sku_images_pb.SpSkuImages;
      reader.readMessage(value,common_sp_sku_images_pb.SpSkuImages.deserializeBinaryFromReader);
      msg.addSpSkuImage(value);
      break;
    case 5:
      var value = new common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment;
      reader.readMessage(value,common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.deserializeBinaryFromReader);
      msg.setSpOrderPaymentAmendment(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDueOn(value);
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
proto.proto.shop.ShopPaymentBilledExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.ShopPaymentBilledExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.ShopPaymentBilledExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopPaymentBilledExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_pb.SpOrder.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderPayment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_sp_order_payment_pb.SpOrderPayment.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderPaymentBilled();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_sp_order_payment_billed_pb.SpOrderPaymentBilled.serializeBinaryToWriter
    );
  }
  f = message.getSpSkuImageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_sp_sku_images_pb.SpSkuImages.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderPaymentAmendment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.serializeBinaryToWriter
    );
  }
  f = message.getDueOn();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional proto.SpOrder sp_order = 1;
 * @return {?proto.proto.SpOrder}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getSpOrder = function() {
  return /** @type{?proto.proto.SpOrder} */ (
    jspb.Message.getWrapperField(this, common_sp_order_pb.SpOrder, 1));
};


/**
 * @param {?proto.proto.SpOrder|undefined} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
*/
proto.proto.shop.ShopPaymentBilledExtend.prototype.setSpOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.clearSpOrder = function() {
  return this.setSpOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.hasSpOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.SpOrderPayment sp_order_payment = 2;
 * @return {?proto.proto.SpOrderPayment}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getSpOrderPayment = function() {
  return /** @type{?proto.proto.SpOrderPayment} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_pb.SpOrderPayment, 2));
};


/**
 * @param {?proto.proto.SpOrderPayment|undefined} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
*/
proto.proto.shop.ShopPaymentBilledExtend.prototype.setSpOrderPayment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.clearSpOrderPayment = function() {
  return this.setSpOrderPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.hasSpOrderPayment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.SpOrderPaymentBilled sp_order_payment_billed = 3;
 * @return {?proto.proto.SpOrderPaymentBilled}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getSpOrderPaymentBilled = function() {
  return /** @type{?proto.proto.SpOrderPaymentBilled} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_billed_pb.SpOrderPaymentBilled, 3));
};


/**
 * @param {?proto.proto.SpOrderPaymentBilled|undefined} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
*/
proto.proto.shop.ShopPaymentBilledExtend.prototype.setSpOrderPaymentBilled = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.clearSpOrderPaymentBilled = function() {
  return this.setSpOrderPaymentBilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.hasSpOrderPaymentBilled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated proto.SpSkuImages sp_sku_image = 4;
 * @return {!Array<!proto.proto.SpSkuImages>}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getSpSkuImageList = function() {
  return /** @type{!Array<!proto.proto.SpSkuImages>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_sku_images_pb.SpSkuImages, 4));
};


/**
 * @param {!Array<!proto.proto.SpSkuImages>} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
*/
proto.proto.shop.ShopPaymentBilledExtend.prototype.setSpSkuImageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.SpSkuImages=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpSkuImages}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.addSpSkuImage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.SpSkuImages, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.clearSpSkuImageList = function() {
  return this.setSpSkuImageList([]);
};


/**
 * optional proto.SpOrderPaymentAmendment sp_order_payment_amendment = 5;
 * @return {?proto.proto.SpOrderPaymentAmendment}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getSpOrderPaymentAmendment = function() {
  return /** @type{?proto.proto.SpOrderPaymentAmendment} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment, 5));
};


/**
 * @param {?proto.proto.SpOrderPaymentAmendment|undefined} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
*/
proto.proto.shop.ShopPaymentBilledExtend.prototype.setSpOrderPaymentAmendment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.clearSpOrderPaymentAmendment = function() {
  return this.setSpOrderPaymentAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.hasSpOrderPaymentAmendment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 due_on = 6;
 * @return {number}
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.getDueOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.ShopPaymentBilledExtend} returns this
 */
proto.proto.shop.ShopPaymentBilledExtend.prototype.setDueOn = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.ShopPaymentBilled.repeatedFields_ = [1];



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
proto.proto.shop.ShopPaymentBilled.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.ShopPaymentBilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.ShopPaymentBilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopPaymentBilled.toObject = function(includeInstance, msg) {
  var f, obj = {
    shopPaymentBilledList: jspb.Message.toObjectList(msg.getShopPaymentBilledList(),
    proto.proto.shop.ShopPaymentBilledExtend.toObject, includeInstance)
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
 * @return {!proto.proto.shop.ShopPaymentBilled}
 */
proto.proto.shop.ShopPaymentBilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.ShopPaymentBilled;
  return proto.proto.shop.ShopPaymentBilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.ShopPaymentBilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.ShopPaymentBilled}
 */
proto.proto.shop.ShopPaymentBilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.shop.ShopPaymentBilledExtend;
      reader.readMessage(value,proto.proto.shop.ShopPaymentBilledExtend.deserializeBinaryFromReader);
      msg.addShopPaymentBilled(value);
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
proto.proto.shop.ShopPaymentBilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.ShopPaymentBilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.ShopPaymentBilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopPaymentBilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShopPaymentBilledList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.shop.ShopPaymentBilledExtend.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ShopPaymentBilledExtend shop_payment_billed = 1;
 * @return {!Array<!proto.proto.shop.ShopPaymentBilledExtend>}
 */
proto.proto.shop.ShopPaymentBilled.prototype.getShopPaymentBilledList = function() {
  return /** @type{!Array<!proto.proto.shop.ShopPaymentBilledExtend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shop.ShopPaymentBilledExtend, 1));
};


/**
 * @param {!Array<!proto.proto.shop.ShopPaymentBilledExtend>} value
 * @return {!proto.proto.shop.ShopPaymentBilled} returns this
*/
proto.proto.shop.ShopPaymentBilled.prototype.setShopPaymentBilledList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.shop.ShopPaymentBilledExtend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shop.ShopPaymentBilledExtend}
 */
proto.proto.shop.ShopPaymentBilled.prototype.addShopPaymentBilled = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.shop.ShopPaymentBilledExtend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.ShopPaymentBilled} returns this
 */
proto.proto.shop.ShopPaymentBilled.prototype.clearShopPaymentBilledList = function() {
  return this.setShopPaymentBilledList([]);
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
proto.proto.shop.ShopNotificationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.ShopNotificationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.ShopNotificationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopNotificationRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    unreadMessageCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paymentBilledCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.shop.ShopNotificationRes}
 */
proto.proto.shop.ShopNotificationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.ShopNotificationRes;
  return proto.proto.shop.ShopNotificationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.ShopNotificationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.ShopNotificationRes}
 */
proto.proto.shop.ShopNotificationRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnreadMessageCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentBilledCount(value);
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
proto.proto.shop.ShopNotificationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.ShopNotificationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.ShopNotificationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopNotificationRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnreadMessageCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPaymentBilledCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 unread_message_count = 1;
 * @return {number}
 */
proto.proto.shop.ShopNotificationRes.prototype.getUnreadMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.ShopNotificationRes} returns this
 */
proto.proto.shop.ShopNotificationRes.prototype.setUnreadMessageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 payment_billed_count = 2;
 * @return {number}
 */
proto.proto.shop.ShopNotificationRes.prototype.getPaymentBilledCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.ShopNotificationRes} returns this
 */
proto.proto.shop.ShopNotificationRes.prototype.setPaymentBilledCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.proto.shop);
