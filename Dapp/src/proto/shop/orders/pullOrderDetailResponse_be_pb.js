// source: shop/orders/pullOrderDetailResponse_be.proto
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

var common_sp_order_pb = require('../../common/sp_order_pb.js');
goog.object.extend(proto, common_sp_order_pb);
var common_sp_order_payment_pb = require('../../common/sp_order_payment_pb.js');
goog.object.extend(proto, common_sp_order_payment_pb);
var common_sp_order_payment_amendment_pb = require('../../common/sp_order_payment_amendment_pb.js');
goog.object.extend(proto, common_sp_order_payment_amendment_pb);
var common_sp_order_payment_remaining_balance_pb = require('../../common/sp_order_payment_remaining_balance_pb.js');
goog.object.extend(proto, common_sp_order_payment_remaining_balance_pb);
var common_sp_order_payment_billed_pb = require('../../common/sp_order_payment_billed_pb.js');
goog.object.extend(proto, common_sp_order_payment_billed_pb);
var common_sp_order_sku_pb = require('../../common/sp_order_sku_pb.js');
goog.object.extend(proto, common_sp_order_sku_pb);
var common_sp_sku_pb = require('../../common/sp_sku_pb.js');
goog.object.extend(proto, common_sp_sku_pb);
var common_sp_spu_pb = require('../../common/sp_spu_pb.js');
goog.object.extend(proto, common_sp_spu_pb);
var common_sp_sku_images_pb = require('../../common/sp_sku_images_pb.js');
goog.object.extend(proto, common_sp_sku_images_pb);
var common_sp_order_delivery_information_pb = require('../../common/sp_order_delivery_information_pb.js');
goog.object.extend(proto, common_sp_order_delivery_information_pb);
var common_company_location_content_pb = require('../../common/company_location_content_pb.js');
goog.object.extend(proto, common_company_location_content_pb);
var common_company_contact_content_pb = require('../../common/company_contact_content_pb.js');
goog.object.extend(proto, common_company_contact_content_pb);
var common_sp_order_payment_billed_status_record_pb = require('../../common/sp_order_payment_billed_status_record_pb.js');
goog.object.extend(proto, common_sp_order_payment_billed_status_record_pb);
var common_buyers_pb = require('../../common/buyers_pb.js');
goog.object.extend(proto, common_buyers_pb);
var common_buyer_avatars_pb = require('../../common/buyer_avatars_pb.js');
goog.object.extend(proto, common_buyer_avatars_pb);
var common_staff_pb = require('../../common/staff_pb.js');
goog.object.extend(proto, common_staff_pb);
var common_staff_avatars_pb = require('../../common/staff_avatars_pb.js');
goog.object.extend(proto, common_staff_avatars_pb);
var common_sp_order_shipment_pb = require('../../common/sp_order_shipment_pb.js');
goog.object.extend(proto, common_sp_order_shipment_pb);
var common_sp_order_shipment_in_stock_pb = require('../../common/sp_order_shipment_in_stock_pb.js');
goog.object.extend(proto, common_sp_order_shipment_in_stock_pb);
var common_sp_order_shipment_skus_pb = require('../../common/sp_order_shipment_skus_pb.js');
goog.object.extend(proto, common_sp_order_shipment_skus_pb);
var common_sp_order_shipment_factory_pb = require('../../common/sp_order_shipment_factory_pb.js');
goog.object.extend(proto, common_sp_order_shipment_factory_pb);
var common_sp_order_shipment_factory_files_pb = require('../../common/sp_order_shipment_factory_files_pb.js');
goog.object.extend(proto, common_sp_order_shipment_factory_files_pb);
var common_company_tax_exempt_files_pb = require('../../common/company_tax_exempt_files_pb.js');
goog.object.extend(proto, common_company_tax_exempt_files_pb);
goog.exportSymbol('proto.proto.shopOrderDetail.BuyerExtend', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.FactoryShipment', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.InStockShipment', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderDeliveryInformation', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderPaymentBilledExtend', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.PersonCase', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderPaymentExtend', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderShipment', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.OrderedSkuExtend', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.PullOrderDetailResponse', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.PullOrderDetailResponse.PersonCase', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.ShipmentEvent', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.ShipmentSku', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.SimpleFile', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.SkuOption', null, global);
goog.exportSymbol('proto.proto.shopOrderDetail.StaffExtend', null, global);
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
proto.proto.shopOrderDetail.OrderDeliveryInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.OrderDeliveryInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderDeliveryInformation.displayName = 'proto.proto.shopOrderDetail.OrderDeliveryInformation';
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
proto.proto.shopOrderDetail.SkuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.SkuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.SkuOption.displayName = 'proto.proto.shopOrderDetail.SkuOption';
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
proto.proto.shopOrderDetail.SimpleFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.SimpleFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.SimpleFile.displayName = 'proto.proto.shopOrderDetail.SimpleFile';
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
proto.proto.shopOrderDetail.OrderedSkuExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.OrderedSkuExtend.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.OrderedSkuExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderedSkuExtend.displayName = 'proto.proto.shopOrderDetail.OrderedSkuExtend';
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
proto.proto.shopOrderDetail.BuyerExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.BuyerExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.BuyerExtend.displayName = 'proto.proto.shopOrderDetail.BuyerExtend';
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
proto.proto.shopOrderDetail.StaffExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.StaffExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.StaffExtend.displayName = 'proto.proto.shopOrderDetail.StaffExtend';
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
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.oneofGroups_);
};
goog.inherits(proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.displayName = 'proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend';
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
proto.proto.shopOrderDetail.OrderPaymentBilledExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.OrderPaymentBilledExtend.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.OrderPaymentBilledExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderPaymentBilledExtend.displayName = 'proto.proto.shopOrderDetail.OrderPaymentBilledExtend';
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
proto.proto.shopOrderDetail.ShipmentSku = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.ShipmentSku.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.ShipmentSku, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.ShipmentSku.displayName = 'proto.proto.shopOrderDetail.ShipmentSku';
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
proto.proto.shopOrderDetail.InStockShipment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.InStockShipment.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.InStockShipment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.InStockShipment.displayName = 'proto.proto.shopOrderDetail.InStockShipment';
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
proto.proto.shopOrderDetail.ShipmentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.ShipmentEvent.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.ShipmentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.ShipmentEvent.displayName = 'proto.proto.shopOrderDetail.ShipmentEvent';
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
proto.proto.shopOrderDetail.FactoryShipment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.FactoryShipment.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.FactoryShipment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.FactoryShipment.displayName = 'proto.proto.shopOrderDetail.FactoryShipment';
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
proto.proto.shopOrderDetail.OrderShipment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.OrderShipment.repeatedFields_, null);
};
goog.inherits(proto.proto.shopOrderDetail.OrderShipment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderShipment.displayName = 'proto.proto.shopOrderDetail.OrderShipment';
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
proto.proto.shopOrderDetail.OrderPaymentExtend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shopOrderDetail.OrderPaymentExtend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.OrderPaymentExtend.displayName = 'proto.proto.shopOrderDetail.OrderPaymentExtend';
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
proto.proto.shopOrderDetail.PullOrderDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shopOrderDetail.PullOrderDetailResponse.repeatedFields_, proto.proto.shopOrderDetail.PullOrderDetailResponse.oneofGroups_);
};
goog.inherits(proto.proto.shopOrderDetail.PullOrderDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shopOrderDetail.PullOrderDetailResponse.displayName = 'proto.proto.shopOrderDetail.PullOrderDetailResponse';
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
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderDeliveryInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderDeliveryInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderDeliveryInformation: (f = msg.getSpOrderDeliveryInformation()) && common_sp_order_delivery_information_pb.SpOrderDeliveryInformation.toObject(includeInstance, f),
    companyLocationContent: (f = msg.getCompanyLocationContent()) && common_company_location_content_pb.CompanyLocationContent.toObject(includeInstance, f),
    companyContactContent: (f = msg.getCompanyContactContent()) && common_company_contact_content_pb.CompanyContactContent.toObject(includeInstance, f)
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
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderDeliveryInformation;
  return proto.proto.shopOrderDetail.OrderDeliveryInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderDeliveryInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_delivery_information_pb.SpOrderDeliveryInformation;
      reader.readMessage(value,common_sp_order_delivery_information_pb.SpOrderDeliveryInformation.deserializeBinaryFromReader);
      msg.setSpOrderDeliveryInformation(value);
      break;
    case 2:
      var value = new common_company_location_content_pb.CompanyLocationContent;
      reader.readMessage(value,common_company_location_content_pb.CompanyLocationContent.deserializeBinaryFromReader);
      msg.setCompanyLocationContent(value);
      break;
    case 3:
      var value = new common_company_contact_content_pb.CompanyContactContent;
      reader.readMessage(value,common_company_contact_content_pb.CompanyContactContent.deserializeBinaryFromReader);
      msg.setCompanyContactContent(value);
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
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderDeliveryInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderDeliveryInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderDeliveryInformation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_delivery_information_pb.SpOrderDeliveryInformation.serializeBinaryToWriter
    );
  }
  f = message.getCompanyLocationContent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_company_location_content_pb.CompanyLocationContent.serializeBinaryToWriter
    );
  }
  f = message.getCompanyContactContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_company_contact_content_pb.CompanyContactContent.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderDeliveryInformation sp_order_delivery_information = 1;
 * @return {?proto.proto.SpOrderDeliveryInformation}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.getSpOrderDeliveryInformation = function() {
  return /** @type{?proto.proto.SpOrderDeliveryInformation} */ (
    jspb.Message.getWrapperField(this, common_sp_order_delivery_information_pb.SpOrderDeliveryInformation, 1));
};


/**
 * @param {?proto.proto.SpOrderDeliveryInformation|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
*/
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.setSpOrderDeliveryInformation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.clearSpOrderDeliveryInformation = function() {
  return this.setSpOrderDeliveryInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.hasSpOrderDeliveryInformation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.CompanyLocationContent company_location_content = 2;
 * @return {?proto.proto.CompanyLocationContent}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.getCompanyLocationContent = function() {
  return /** @type{?proto.proto.CompanyLocationContent} */ (
    jspb.Message.getWrapperField(this, common_company_location_content_pb.CompanyLocationContent, 2));
};


/**
 * @param {?proto.proto.CompanyLocationContent|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
*/
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.setCompanyLocationContent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.clearCompanyLocationContent = function() {
  return this.setCompanyLocationContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.hasCompanyLocationContent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.CompanyContactContent company_contact_content = 3;
 * @return {?proto.proto.CompanyContactContent}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.getCompanyContactContent = function() {
  return /** @type{?proto.proto.CompanyContactContent} */ (
    jspb.Message.getWrapperField(this, common_company_contact_content_pb.CompanyContactContent, 3));
};


/**
 * @param {?proto.proto.CompanyContactContent|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
*/
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.setCompanyContactContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderDeliveryInformation} returns this
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.clearCompanyContactContent = function() {
  return this.setCompanyContactContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderDeliveryInformation.prototype.hasCompanyContactContent = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.proto.shopOrderDetail.SkuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.SkuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.SkuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.SkuOption.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.shopOrderDetail.SkuOption}
 */
proto.proto.shopOrderDetail.SkuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.SkuOption;
  return proto.proto.shopOrderDetail.SkuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.SkuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.SkuOption}
 */
proto.proto.shopOrderDetail.SkuOption.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.shopOrderDetail.SkuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.SkuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.SkuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.SkuOption.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.shopOrderDetail.SkuOption.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.SkuOption} returns this
 */
proto.proto.shopOrderDetail.SkuOption.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.shopOrderDetail.SkuOption.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.SkuOption} returns this
 */
proto.proto.shopOrderDetail.SkuOption.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.proto.shopOrderDetail.SkuOption.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.SkuOption} returns this
 */
proto.proto.shopOrderDetail.SkuOption.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.proto.shopOrderDetail.SimpleFile.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.SimpleFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.SimpleFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.SimpleFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    originalFilename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    link: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.proto.shopOrderDetail.SimpleFile}
 */
proto.proto.shopOrderDetail.SimpleFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.SimpleFile;
  return proto.proto.shopOrderDetail.SimpleFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.SimpleFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.SimpleFile}
 */
proto.proto.shopOrderDetail.SimpleFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalFilename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
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
proto.proto.shopOrderDetail.SimpleFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.SimpleFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.SimpleFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.SimpleFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginalFilename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string original_filename = 1;
 * @return {string}
 */
proto.proto.shopOrderDetail.SimpleFile.prototype.getOriginalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.SimpleFile} returns this
 */
proto.proto.shopOrderDetail.SimpleFile.prototype.setOriginalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string link = 2;
 * @return {string}
 */
proto.proto.shopOrderDetail.SimpleFile.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.SimpleFile} returns this
 */
proto.proto.shopOrderDetail.SimpleFile.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.repeatedFields_ = [4,7];



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
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderedSkuExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderedSkuExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderSku: (f = msg.getSpOrderSku()) && common_sp_order_sku_pb.SpOrderSku.toObject(includeInstance, f),
    spSku: (f = msg.getSpSku()) && common_sp_sku_pb.SpSku.toObject(includeInstance, f),
    spSpu: (f = msg.getSpSpu()) && common_sp_spu_pb.SpSpu.toObject(includeInstance, f),
    skuOptionList: jspb.Message.toObjectList(msg.getSkuOptionList(),
    proto.proto.shopOrderDetail.SkuOption.toObject, includeInstance),
    spSkuImage: (f = msg.getSpSkuImage()) && common_sp_sku_images_pb.SpSkuImages.toObject(includeInstance, f),
    returnReplaceStatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    returnReplaceDocList: jspb.Message.toObjectList(msg.getReturnReplaceDocList(),
    proto.proto.shopOrderDetail.SimpleFile.toObject, includeInstance),
    canReturnReplace: jspb.Message.getFieldWithDefault(msg, 8, ""),
    returnReplaceType: jspb.Message.getFieldWithDefault(msg, 9, ""),
    latestSkuId: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderedSkuExtend;
  return proto.proto.shopOrderDetail.OrderedSkuExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderedSkuExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new common_sp_spu_pb.SpSpu;
      reader.readMessage(value,common_sp_spu_pb.SpSpu.deserializeBinaryFromReader);
      msg.setSpSpu(value);
      break;
    case 4:
      var value = new proto.proto.shopOrderDetail.SkuOption;
      reader.readMessage(value,proto.proto.shopOrderDetail.SkuOption.deserializeBinaryFromReader);
      msg.addSkuOption(value);
      break;
    case 5:
      var value = new common_sp_sku_images_pb.SpSkuImages;
      reader.readMessage(value,common_sp_sku_images_pb.SpSkuImages.deserializeBinaryFromReader);
      msg.setSpSkuImage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReturnReplaceStatus(value);
      break;
    case 7:
      var value = new proto.proto.shopOrderDetail.SimpleFile;
      reader.readMessage(value,proto.proto.shopOrderDetail.SimpleFile.deserializeBinaryFromReader);
      msg.addReturnReplaceDoc(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanReturnReplace(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReturnReplaceType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatestSkuId(value);
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
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderedSkuExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderedSkuExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSpSpu();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_sp_spu_pb.SpSpu.serializeBinaryToWriter
    );
  }
  f = message.getSkuOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.proto.shopOrderDetail.SkuOption.serializeBinaryToWriter
    );
  }
  f = message.getSpSkuImage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_sp_sku_images_pb.SpSkuImages.serializeBinaryToWriter
    );
  }
  f = message.getReturnReplaceStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReturnReplaceDocList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.proto.shopOrderDetail.SimpleFile.serializeBinaryToWriter
    );
  }
  f = message.getCanReturnReplace();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getReturnReplaceType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLatestSkuId();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional proto.SpOrderSku sp_order_sku = 1;
 * @return {?proto.proto.SpOrderSku}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getSpOrderSku = function() {
  return /** @type{?proto.proto.SpOrderSku} */ (
    jspb.Message.getWrapperField(this, common_sp_order_sku_pb.SpOrderSku, 1));
};


/**
 * @param {?proto.proto.SpOrderSku|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setSpOrderSku = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearSpOrderSku = function() {
  return this.setSpOrderSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.hasSpOrderSku = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.SpSku sp_sku = 2;
 * @return {?proto.proto.SpSku}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getSpSku = function() {
  return /** @type{?proto.proto.SpSku} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_pb.SpSku, 2));
};


/**
 * @param {?proto.proto.SpSku|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setSpSku = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearSpSku = function() {
  return this.setSpSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.hasSpSku = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.SpSpu sp_spu = 3;
 * @return {?proto.proto.SpSpu}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getSpSpu = function() {
  return /** @type{?proto.proto.SpSpu} */ (
    jspb.Message.getWrapperField(this, common_sp_spu_pb.SpSpu, 3));
};


/**
 * @param {?proto.proto.SpSpu|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setSpSpu = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearSpSpu = function() {
  return this.setSpSpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.hasSpSpu = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated SkuOption sku_option = 4;
 * @return {!Array<!proto.proto.shopOrderDetail.SkuOption>}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getSkuOptionList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.SkuOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.SkuOption, 4));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.SkuOption>} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setSkuOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.SkuOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.SkuOption}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.addSkuOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.shopOrderDetail.SkuOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearSkuOptionList = function() {
  return this.setSkuOptionList([]);
};


/**
 * optional proto.SpSkuImages sp_sku_image = 5;
 * @return {?proto.proto.SpSkuImages}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getSpSkuImage = function() {
  return /** @type{?proto.proto.SpSkuImages} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_images_pb.SpSkuImages, 5));
};


/**
 * @param {?proto.proto.SpSkuImages|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setSpSkuImage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearSpSkuImage = function() {
  return this.setSpSkuImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.hasSpSkuImage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string return_replace_status = 6;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getReturnReplaceStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setReturnReplaceStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated SimpleFile return_replace_doc = 7;
 * @return {!Array<!proto.proto.shopOrderDetail.SimpleFile>}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getReturnReplaceDocList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.SimpleFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.SimpleFile, 7));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.SimpleFile>} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
*/
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setReturnReplaceDocList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.SimpleFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.SimpleFile}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.addReturnReplaceDoc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.proto.shopOrderDetail.SimpleFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.clearReturnReplaceDocList = function() {
  return this.setReturnReplaceDocList([]);
};


/**
 * optional string can_return_replace = 8;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getCanReturnReplace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setCanReturnReplace = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string return_replace_type = 9;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getReturnReplaceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setReturnReplaceType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 latest_sku_id = 10;
 * @return {number}
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.getLatestSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend} returns this
 */
proto.proto.shopOrderDetail.OrderedSkuExtend.prototype.setLatestSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.proto.shopOrderDetail.BuyerExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.BuyerExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.BuyerExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.BuyerExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyers: (f = msg.getBuyers()) && common_buyers_pb.Buyers.toObject(includeInstance, f),
    buyerAvatars: (f = msg.getBuyerAvatars()) && common_buyer_avatars_pb.BuyerAvatars.toObject(includeInstance, f)
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
 * @return {!proto.proto.shopOrderDetail.BuyerExtend}
 */
proto.proto.shopOrderDetail.BuyerExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.BuyerExtend;
  return proto.proto.shopOrderDetail.BuyerExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.BuyerExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.BuyerExtend}
 */
proto.proto.shopOrderDetail.BuyerExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_buyers_pb.Buyers;
      reader.readMessage(value,common_buyers_pb.Buyers.deserializeBinaryFromReader);
      msg.setBuyers(value);
      break;
    case 2:
      var value = new common_buyer_avatars_pb.BuyerAvatars;
      reader.readMessage(value,common_buyer_avatars_pb.BuyerAvatars.deserializeBinaryFromReader);
      msg.setBuyerAvatars(value);
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
proto.proto.shopOrderDetail.BuyerExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.BuyerExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.BuyerExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.BuyerExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_buyers_pb.Buyers.serializeBinaryToWriter
    );
  }
  f = message.getBuyerAvatars();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_buyer_avatars_pb.BuyerAvatars.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.Buyers buyers = 1;
 * @return {?proto.proto.Buyers}
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.getBuyers = function() {
  return /** @type{?proto.proto.Buyers} */ (
    jspb.Message.getWrapperField(this, common_buyers_pb.Buyers, 1));
};


/**
 * @param {?proto.proto.Buyers|undefined} value
 * @return {!proto.proto.shopOrderDetail.BuyerExtend} returns this
*/
proto.proto.shopOrderDetail.BuyerExtend.prototype.setBuyers = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.BuyerExtend} returns this
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.clearBuyers = function() {
  return this.setBuyers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.hasBuyers = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.BuyerAvatars buyer_avatars = 2;
 * @return {?proto.proto.BuyerAvatars}
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.getBuyerAvatars = function() {
  return /** @type{?proto.proto.BuyerAvatars} */ (
    jspb.Message.getWrapperField(this, common_buyer_avatars_pb.BuyerAvatars, 2));
};


/**
 * @param {?proto.proto.BuyerAvatars|undefined} value
 * @return {!proto.proto.shopOrderDetail.BuyerExtend} returns this
*/
proto.proto.shopOrderDetail.BuyerExtend.prototype.setBuyerAvatars = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.BuyerExtend} returns this
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.clearBuyerAvatars = function() {
  return this.setBuyerAvatars(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.BuyerExtend.prototype.hasBuyerAvatars = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.proto.shopOrderDetail.StaffExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.StaffExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.StaffExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.StaffExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    staff: (f = msg.getStaff()) && common_staff_pb.Staff.toObject(includeInstance, f),
    staffAvatars: (f = msg.getStaffAvatars()) && common_staff_avatars_pb.StaffAvatars.toObject(includeInstance, f)
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
 * @return {!proto.proto.shopOrderDetail.StaffExtend}
 */
proto.proto.shopOrderDetail.StaffExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.StaffExtend;
  return proto.proto.shopOrderDetail.StaffExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.StaffExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.StaffExtend}
 */
proto.proto.shopOrderDetail.StaffExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_staff_pb.Staff;
      reader.readMessage(value,common_staff_pb.Staff.deserializeBinaryFromReader);
      msg.setStaff(value);
      break;
    case 2:
      var value = new common_staff_avatars_pb.StaffAvatars;
      reader.readMessage(value,common_staff_avatars_pb.StaffAvatars.deserializeBinaryFromReader);
      msg.setStaffAvatars(value);
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
proto.proto.shopOrderDetail.StaffExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.StaffExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.StaffExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.StaffExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStaff();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_staff_pb.Staff.serializeBinaryToWriter
    );
  }
  f = message.getStaffAvatars();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_staff_avatars_pb.StaffAvatars.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.Staff staff = 1;
 * @return {?proto.proto.Staff}
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.getStaff = function() {
  return /** @type{?proto.proto.Staff} */ (
    jspb.Message.getWrapperField(this, common_staff_pb.Staff, 1));
};


/**
 * @param {?proto.proto.Staff|undefined} value
 * @return {!proto.proto.shopOrderDetail.StaffExtend} returns this
*/
proto.proto.shopOrderDetail.StaffExtend.prototype.setStaff = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.StaffExtend} returns this
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.clearStaff = function() {
  return this.setStaff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.hasStaff = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.StaffAvatars staff_avatars = 2;
 * @return {?proto.proto.StaffAvatars}
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.getStaffAvatars = function() {
  return /** @type{?proto.proto.StaffAvatars} */ (
    jspb.Message.getWrapperField(this, common_staff_avatars_pb.StaffAvatars, 2));
};


/**
 * @param {?proto.proto.StaffAvatars|undefined} value
 * @return {!proto.proto.shopOrderDetail.StaffExtend} returns this
*/
proto.proto.shopOrderDetail.StaffExtend.prototype.setStaffAvatars = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.StaffExtend} returns this
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.clearStaffAvatars = function() {
  return this.setStaffAvatars(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.StaffExtend.prototype.hasStaffAvatars = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.PersonCase = {
  PERSON_NOT_SET: 0,
  BUYER: 2,
  STAFF: 3
};

/**
 * @return {proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.PersonCase}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.getPersonCase = function() {
  return /** @type {proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.PersonCase} */(jspb.Message.computeOneofCase(this, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.oneofGroups_[0]));
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
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderPaymentBilledStatusRecord: (f = msg.getSpOrderPaymentBilledStatusRecord()) && common_sp_order_payment_billed_status_record_pb.SpOrderPaymentBilledStatusRecord.toObject(includeInstance, f),
    buyer: (f = msg.getBuyer()) && proto.proto.shopOrderDetail.BuyerExtend.toObject(includeInstance, f),
    staff: (f = msg.getStaff()) && proto.proto.shopOrderDetail.StaffExtend.toObject(includeInstance, f)
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
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend;
  return proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_payment_billed_status_record_pb.SpOrderPaymentBilledStatusRecord;
      reader.readMessage(value,common_sp_order_payment_billed_status_record_pb.SpOrderPaymentBilledStatusRecord.deserializeBinaryFromReader);
      msg.setSpOrderPaymentBilledStatusRecord(value);
      break;
    case 2:
      var value = new proto.proto.shopOrderDetail.BuyerExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.BuyerExtend.deserializeBinaryFromReader);
      msg.setBuyer(value);
      break;
    case 3:
      var value = new proto.proto.shopOrderDetail.StaffExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.StaffExtend.deserializeBinaryFromReader);
      msg.setStaff(value);
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
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderPaymentBilledStatusRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_payment_billed_status_record_pb.SpOrderPaymentBilledStatusRecord.serializeBinaryToWriter
    );
  }
  f = message.getBuyer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.shopOrderDetail.BuyerExtend.serializeBinaryToWriter
    );
  }
  f = message.getStaff();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.shopOrderDetail.StaffExtend.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderPaymentBilledStatusRecord sp_order_payment_billed_status_record = 1;
 * @return {?proto.proto.SpOrderPaymentBilledStatusRecord}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.getSpOrderPaymentBilledStatusRecord = function() {
  return /** @type{?proto.proto.SpOrderPaymentBilledStatusRecord} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_billed_status_record_pb.SpOrderPaymentBilledStatusRecord, 1));
};


/**
 * @param {?proto.proto.SpOrderPaymentBilledStatusRecord|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.setSpOrderPaymentBilledStatusRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.clearSpOrderPaymentBilledStatusRecord = function() {
  return this.setSpOrderPaymentBilledStatusRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.hasSpOrderPaymentBilledStatusRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BuyerExtend buyer = 2;
 * @return {?proto.proto.shopOrderDetail.BuyerExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.getBuyer = function() {
  return /** @type{?proto.proto.shopOrderDetail.BuyerExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.BuyerExtend, 2));
};


/**
 * @param {?proto.proto.shopOrderDetail.BuyerExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.setBuyer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.clearBuyer = function() {
  return this.setBuyer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.hasBuyer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StaffExtend staff = 3;
 * @return {?proto.proto.shopOrderDetail.StaffExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.getStaff = function() {
  return /** @type{?proto.proto.shopOrderDetail.StaffExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.StaffExtend, 3));
};


/**
 * @param {?proto.proto.shopOrderDetail.StaffExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.setStaff = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.clearStaff = function() {
  return this.setStaff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.prototype.hasStaff = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.repeatedFields_ = [2];



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
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderPaymentBilledExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderPaymentBilled: (f = msg.getSpOrderPaymentBilled()) && common_sp_order_payment_billed_pb.SpOrderPaymentBilled.toObject(includeInstance, f),
    orderPaymentBilledStatusRecordList: jspb.Message.toObjectList(msg.getOrderPaymentBilledStatusRecordList(),
    proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.toObject, includeInstance),
    isOverDue: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dueTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    last4: jspb.Message.getFieldWithDefault(msg, 5, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderPaymentBilledExtend;
  return proto.proto.shopOrderDetail.OrderPaymentBilledExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_payment_billed_pb.SpOrderPaymentBilled;
      reader.readMessage(value,common_sp_order_payment_billed_pb.SpOrderPaymentBilled.deserializeBinaryFromReader);
      msg.setSpOrderPaymentBilled(value);
      break;
    case 2:
      var value = new proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.deserializeBinaryFromReader);
      msg.addOrderPaymentBilledStatusRecord(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsOverDue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDueTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast4(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
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
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderPaymentBilledExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderPaymentBilled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_payment_billed_pb.SpOrderPaymentBilled.serializeBinaryToWriter
    );
  }
  f = message.getOrderPaymentBilledStatusRecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend.serializeBinaryToWriter
    );
  }
  f = message.getIsOverDue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDueTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLast4();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional proto.SpOrderPaymentBilled sp_order_payment_billed = 1;
 * @return {?proto.proto.SpOrderPaymentBilled}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getSpOrderPaymentBilled = function() {
  return /** @type{?proto.proto.SpOrderPaymentBilled} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_billed_pb.SpOrderPaymentBilled, 1));
};


/**
 * @param {?proto.proto.SpOrderPaymentBilled|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setSpOrderPaymentBilled = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.clearSpOrderPaymentBilled = function() {
  return this.setSpOrderPaymentBilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.hasSpOrderPaymentBilled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OrderPaymentBilledStatusRecordExtend order_payment_billed_status_record = 2;
 * @return {!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend>}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getOrderPaymentBilledStatusRecordList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend, 2));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend>} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setOrderPaymentBilledStatusRecordList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.addOrderPaymentBilledStatusRecord = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shopOrderDetail.OrderPaymentBilledStatusRecordExtend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.clearOrderPaymentBilledStatusRecordList = function() {
  return this.setOrderPaymentBilledStatusRecordList([]);
};


/**
 * optional int32 is_over_due = 3;
 * @return {number}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getIsOverDue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setIsOverDue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 due_time = 4;
 * @return {number}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getDueTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setDueTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string last4 = 5;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getLast4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setLast4 = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string brand = 6;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentBilledExtend.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.ShipmentSku.repeatedFields_ = [6];



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
proto.proto.shopOrderDetail.ShipmentSku.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.ShipmentSku.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.ShipmentSku} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.ShipmentSku.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderShipmentSku: (f = msg.getSpOrderShipmentSku()) && common_sp_order_shipment_skus_pb.SpOrderShipmentSkus.toObject(includeInstance, f),
    spOrderSku: (f = msg.getSpOrderSku()) && common_sp_order_sku_pb.SpOrderSku.toObject(includeInstance, f),
    spSpu: (f = msg.getSpSpu()) && common_sp_spu_pb.SpSpu.toObject(includeInstance, f),
    spSku: (f = msg.getSpSku()) && common_sp_sku_pb.SpSku.toObject(includeInstance, f),
    spSkuImage: (f = msg.getSpSkuImage()) && common_sp_sku_images_pb.SpSkuImages.toObject(includeInstance, f),
    skuOptionList: jspb.Message.toObjectList(msg.getSkuOptionList(),
    proto.proto.shopOrderDetail.SkuOption.toObject, includeInstance)
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
 * @return {!proto.proto.shopOrderDetail.ShipmentSku}
 */
proto.proto.shopOrderDetail.ShipmentSku.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.ShipmentSku;
  return proto.proto.shopOrderDetail.ShipmentSku.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.ShipmentSku} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku}
 */
proto.proto.shopOrderDetail.ShipmentSku.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_shipment_skus_pb.SpOrderShipmentSkus;
      reader.readMessage(value,common_sp_order_shipment_skus_pb.SpOrderShipmentSkus.deserializeBinaryFromReader);
      msg.setSpOrderShipmentSku(value);
      break;
    case 2:
      var value = new common_sp_order_sku_pb.SpOrderSku;
      reader.readMessage(value,common_sp_order_sku_pb.SpOrderSku.deserializeBinaryFromReader);
      msg.setSpOrderSku(value);
      break;
    case 3:
      var value = new common_sp_spu_pb.SpSpu;
      reader.readMessage(value,common_sp_spu_pb.SpSpu.deserializeBinaryFromReader);
      msg.setSpSpu(value);
      break;
    case 4:
      var value = new common_sp_sku_pb.SpSku;
      reader.readMessage(value,common_sp_sku_pb.SpSku.deserializeBinaryFromReader);
      msg.setSpSku(value);
      break;
    case 5:
      var value = new common_sp_sku_images_pb.SpSkuImages;
      reader.readMessage(value,common_sp_sku_images_pb.SpSkuImages.deserializeBinaryFromReader);
      msg.setSpSkuImage(value);
      break;
    case 6:
      var value = new proto.proto.shopOrderDetail.SkuOption;
      reader.readMessage(value,proto.proto.shopOrderDetail.SkuOption.deserializeBinaryFromReader);
      msg.addSkuOption(value);
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
proto.proto.shopOrderDetail.ShipmentSku.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.ShipmentSku.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.ShipmentSku} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.ShipmentSku.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderShipmentSku();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_shipment_skus_pb.SpOrderShipmentSkus.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderSku();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_sp_order_sku_pb.SpOrderSku.serializeBinaryToWriter
    );
  }
  f = message.getSpSpu();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_sp_spu_pb.SpSpu.serializeBinaryToWriter
    );
  }
  f = message.getSpSku();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_sp_sku_pb.SpSku.serializeBinaryToWriter
    );
  }
  f = message.getSpSkuImage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_sp_sku_images_pb.SpSkuImages.serializeBinaryToWriter
    );
  }
  f = message.getSkuOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.shopOrderDetail.SkuOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderShipmentSkus sp_order_shipment_sku = 1;
 * @return {?proto.proto.SpOrderShipmentSkus}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSpOrderShipmentSku = function() {
  return /** @type{?proto.proto.SpOrderShipmentSkus} */ (
    jspb.Message.getWrapperField(this, common_sp_order_shipment_skus_pb.SpOrderShipmentSkus, 1));
};


/**
 * @param {?proto.proto.SpOrderShipmentSkus|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSpOrderShipmentSku = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSpOrderShipmentSku = function() {
  return this.setSpOrderShipmentSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.hasSpOrderShipmentSku = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.SpOrderSku sp_order_sku = 2;
 * @return {?proto.proto.SpOrderSku}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSpOrderSku = function() {
  return /** @type{?proto.proto.SpOrderSku} */ (
    jspb.Message.getWrapperField(this, common_sp_order_sku_pb.SpOrderSku, 2));
};


/**
 * @param {?proto.proto.SpOrderSku|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSpOrderSku = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSpOrderSku = function() {
  return this.setSpOrderSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.hasSpOrderSku = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.SpSpu sp_spu = 3;
 * @return {?proto.proto.SpSpu}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSpSpu = function() {
  return /** @type{?proto.proto.SpSpu} */ (
    jspb.Message.getWrapperField(this, common_sp_spu_pb.SpSpu, 3));
};


/**
 * @param {?proto.proto.SpSpu|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSpSpu = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSpSpu = function() {
  return this.setSpSpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.hasSpSpu = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional proto.SpSku sp_sku = 4;
 * @return {?proto.proto.SpSku}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSpSku = function() {
  return /** @type{?proto.proto.SpSku} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_pb.SpSku, 4));
};


/**
 * @param {?proto.proto.SpSku|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSpSku = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSpSku = function() {
  return this.setSpSku(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.hasSpSku = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional proto.SpSkuImages sp_sku_image = 5;
 * @return {?proto.proto.SpSkuImages}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSpSkuImage = function() {
  return /** @type{?proto.proto.SpSkuImages} */ (
    jspb.Message.getWrapperField(this, common_sp_sku_images_pb.SpSkuImages, 5));
};


/**
 * @param {?proto.proto.SpSkuImages|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSpSkuImage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSpSkuImage = function() {
  return this.setSpSkuImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.hasSpSkuImage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated SkuOption sku_option = 6;
 * @return {!Array<!proto.proto.shopOrderDetail.SkuOption>}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.getSkuOptionList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.SkuOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.SkuOption, 6));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.SkuOption>} value
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
*/
proto.proto.shopOrderDetail.ShipmentSku.prototype.setSkuOptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.SkuOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.SkuOption}
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.addSkuOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.shopOrderDetail.SkuOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.ShipmentSku} returns this
 */
proto.proto.shopOrderDetail.ShipmentSku.prototype.clearSkuOptionList = function() {
  return this.setSkuOptionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.InStockShipment.repeatedFields_ = [3];



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
proto.proto.shopOrderDetail.InStockShipment.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.InStockShipment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.InStockShipment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.InStockShipment.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderShipment: (f = msg.getSpOrderShipment()) && common_sp_order_shipment_pb.SpOrderShipment.toObject(includeInstance, f),
    spOrderShipmentInStock: (f = msg.getSpOrderShipmentInStock()) && common_sp_order_shipment_in_stock_pb.SpOrderShipmentInStock.toObject(includeInstance, f),
    shipmentSkuList: jspb.Message.toObjectList(msg.getShipmentSkuList(),
    proto.proto.shopOrderDetail.ShipmentSku.toObject, includeInstance),
    createStaff: (f = msg.getCreateStaff()) && proto.proto.shopOrderDetail.StaffExtend.toObject(includeInstance, f)
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
 * @return {!proto.proto.shopOrderDetail.InStockShipment}
 */
proto.proto.shopOrderDetail.InStockShipment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.InStockShipment;
  return proto.proto.shopOrderDetail.InStockShipment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.InStockShipment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.InStockShipment}
 */
proto.proto.shopOrderDetail.InStockShipment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_shipment_pb.SpOrderShipment;
      reader.readMessage(value,common_sp_order_shipment_pb.SpOrderShipment.deserializeBinaryFromReader);
      msg.setSpOrderShipment(value);
      break;
    case 2:
      var value = new common_sp_order_shipment_in_stock_pb.SpOrderShipmentInStock;
      reader.readMessage(value,common_sp_order_shipment_in_stock_pb.SpOrderShipmentInStock.deserializeBinaryFromReader);
      msg.setSpOrderShipmentInStock(value);
      break;
    case 3:
      var value = new proto.proto.shopOrderDetail.ShipmentSku;
      reader.readMessage(value,proto.proto.shopOrderDetail.ShipmentSku.deserializeBinaryFromReader);
      msg.addShipmentSku(value);
      break;
    case 4:
      var value = new proto.proto.shopOrderDetail.StaffExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.StaffExtend.deserializeBinaryFromReader);
      msg.setCreateStaff(value);
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
proto.proto.shopOrderDetail.InStockShipment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.InStockShipment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.InStockShipment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.InStockShipment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderShipment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_shipment_pb.SpOrderShipment.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderShipmentInStock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_sp_order_shipment_in_stock_pb.SpOrderShipmentInStock.serializeBinaryToWriter
    );
  }
  f = message.getShipmentSkuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.proto.shopOrderDetail.ShipmentSku.serializeBinaryToWriter
    );
  }
  f = message.getCreateStaff();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.shopOrderDetail.StaffExtend.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderShipment sp_order_shipment = 1;
 * @return {?proto.proto.SpOrderShipment}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.getSpOrderShipment = function() {
  return /** @type{?proto.proto.SpOrderShipment} */ (
    jspb.Message.getWrapperField(this, common_sp_order_shipment_pb.SpOrderShipment, 1));
};


/**
 * @param {?proto.proto.SpOrderShipment|undefined} value
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
*/
proto.proto.shopOrderDetail.InStockShipment.prototype.setSpOrderShipment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.clearSpOrderShipment = function() {
  return this.setSpOrderShipment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.hasSpOrderShipment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.SpOrderShipmentInStock sp_order_shipment_in_stock = 2;
 * @return {?proto.proto.SpOrderShipmentInStock}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.getSpOrderShipmentInStock = function() {
  return /** @type{?proto.proto.SpOrderShipmentInStock} */ (
    jspb.Message.getWrapperField(this, common_sp_order_shipment_in_stock_pb.SpOrderShipmentInStock, 2));
};


/**
 * @param {?proto.proto.SpOrderShipmentInStock|undefined} value
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
*/
proto.proto.shopOrderDetail.InStockShipment.prototype.setSpOrderShipmentInStock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.clearSpOrderShipmentInStock = function() {
  return this.setSpOrderShipmentInStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.hasSpOrderShipmentInStock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ShipmentSku shipment_sku = 3;
 * @return {!Array<!proto.proto.shopOrderDetail.ShipmentSku>}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.getShipmentSkuList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.ShipmentSku>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.ShipmentSku, 3));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.ShipmentSku>} value
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
*/
proto.proto.shopOrderDetail.InStockShipment.prototype.setShipmentSkuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.ShipmentSku=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.ShipmentSku}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.addShipmentSku = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.shopOrderDetail.ShipmentSku, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.clearShipmentSkuList = function() {
  return this.setShipmentSkuList([]);
};


/**
 * optional StaffExtend create_staff = 4;
 * @return {?proto.proto.shopOrderDetail.StaffExtend}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.getCreateStaff = function() {
  return /** @type{?proto.proto.shopOrderDetail.StaffExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.StaffExtend, 4));
};


/**
 * @param {?proto.proto.shopOrderDetail.StaffExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
*/
proto.proto.shopOrderDetail.InStockShipment.prototype.setCreateStaff = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.InStockShipment} returns this
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.clearCreateStaff = function() {
  return this.setCreateStaff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.InStockShipment.prototype.hasCreateStaff = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.ShipmentEvent.repeatedFields_ = [2];



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
proto.proto.shopOrderDetail.ShipmentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.ShipmentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.ShipmentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.ShipmentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderShipmentFactory: (f = msg.getSpOrderShipmentFactory()) && common_sp_order_shipment_factory_pb.SpOrderShipmentFactory.toObject(includeInstance, f),
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    common_sp_order_shipment_factory_files_pb.SpOrderShipmentFactoryFiles.toObject, includeInstance)
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
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent}
 */
proto.proto.shopOrderDetail.ShipmentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.ShipmentEvent;
  return proto.proto.shopOrderDetail.ShipmentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.ShipmentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent}
 */
proto.proto.shopOrderDetail.ShipmentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_shipment_factory_pb.SpOrderShipmentFactory;
      reader.readMessage(value,common_sp_order_shipment_factory_pb.SpOrderShipmentFactory.deserializeBinaryFromReader);
      msg.setSpOrderShipmentFactory(value);
      break;
    case 2:
      var value = new common_sp_order_shipment_factory_files_pb.SpOrderShipmentFactoryFiles;
      reader.readMessage(value,common_sp_order_shipment_factory_files_pb.SpOrderShipmentFactoryFiles.deserializeBinaryFromReader);
      msg.addFile(value);
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
proto.proto.shopOrderDetail.ShipmentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.ShipmentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.ShipmentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.ShipmentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderShipmentFactory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_shipment_factory_pb.SpOrderShipmentFactory.serializeBinaryToWriter
    );
  }
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_sp_order_shipment_factory_files_pb.SpOrderShipmentFactoryFiles.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderShipmentFactory sp_order_shipment_factory = 1;
 * @return {?proto.proto.SpOrderShipmentFactory}
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.getSpOrderShipmentFactory = function() {
  return /** @type{?proto.proto.SpOrderShipmentFactory} */ (
    jspb.Message.getWrapperField(this, common_sp_order_shipment_factory_pb.SpOrderShipmentFactory, 1));
};


/**
 * @param {?proto.proto.SpOrderShipmentFactory|undefined} value
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent} returns this
*/
proto.proto.shopOrderDetail.ShipmentEvent.prototype.setSpOrderShipmentFactory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent} returns this
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.clearSpOrderShipmentFactory = function() {
  return this.setSpOrderShipmentFactory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.hasSpOrderShipmentFactory = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated proto.SpOrderShipmentFactoryFiles file = 2;
 * @return {!Array<!proto.proto.SpOrderShipmentFactoryFiles>}
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.getFileList = function() {
  return /** @type{!Array<!proto.proto.SpOrderShipmentFactoryFiles>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_shipment_factory_files_pb.SpOrderShipmentFactoryFiles, 2));
};


/**
 * @param {!Array<!proto.proto.SpOrderShipmentFactoryFiles>} value
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent} returns this
*/
proto.proto.shopOrderDetail.ShipmentEvent.prototype.setFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.SpOrderShipmentFactoryFiles=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderShipmentFactoryFiles}
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.addFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.SpOrderShipmentFactoryFiles, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent} returns this
 */
proto.proto.shopOrderDetail.ShipmentEvent.prototype.clearFileList = function() {
  return this.setFileList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.FactoryShipment.repeatedFields_ = [2,3];



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
proto.proto.shopOrderDetail.FactoryShipment.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.FactoryShipment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.FactoryShipment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.FactoryShipment.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderShipment: (f = msg.getSpOrderShipment()) && common_sp_order_shipment_pb.SpOrderShipment.toObject(includeInstance, f),
    shipmentSkuList: jspb.Message.toObjectList(msg.getShipmentSkuList(),
    proto.proto.shopOrderDetail.ShipmentSku.toObject, includeInstance),
    eventList: jspb.Message.toObjectList(msg.getEventList(),
    proto.proto.shopOrderDetail.ShipmentEvent.toObject, includeInstance)
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
 * @return {!proto.proto.shopOrderDetail.FactoryShipment}
 */
proto.proto.shopOrderDetail.FactoryShipment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.FactoryShipment;
  return proto.proto.shopOrderDetail.FactoryShipment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.FactoryShipment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.FactoryShipment}
 */
proto.proto.shopOrderDetail.FactoryShipment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_shipment_pb.SpOrderShipment;
      reader.readMessage(value,common_sp_order_shipment_pb.SpOrderShipment.deserializeBinaryFromReader);
      msg.setSpOrderShipment(value);
      break;
    case 2:
      var value = new proto.proto.shopOrderDetail.ShipmentSku;
      reader.readMessage(value,proto.proto.shopOrderDetail.ShipmentSku.deserializeBinaryFromReader);
      msg.addShipmentSku(value);
      break;
    case 3:
      var value = new proto.proto.shopOrderDetail.ShipmentEvent;
      reader.readMessage(value,proto.proto.shopOrderDetail.ShipmentEvent.deserializeBinaryFromReader);
      msg.addEvent(value);
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
proto.proto.shopOrderDetail.FactoryShipment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.FactoryShipment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.FactoryShipment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.FactoryShipment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderShipment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_shipment_pb.SpOrderShipment.serializeBinaryToWriter
    );
  }
  f = message.getShipmentSkuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shopOrderDetail.ShipmentSku.serializeBinaryToWriter
    );
  }
  f = message.getEventList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.proto.shopOrderDetail.ShipmentEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.SpOrderShipment sp_order_shipment = 1;
 * @return {?proto.proto.SpOrderShipment}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.getSpOrderShipment = function() {
  return /** @type{?proto.proto.SpOrderShipment} */ (
    jspb.Message.getWrapperField(this, common_sp_order_shipment_pb.SpOrderShipment, 1));
};


/**
 * @param {?proto.proto.SpOrderShipment|undefined} value
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
*/
proto.proto.shopOrderDetail.FactoryShipment.prototype.setSpOrderShipment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.clearSpOrderShipment = function() {
  return this.setSpOrderShipment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.hasSpOrderShipment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ShipmentSku shipment_sku = 2;
 * @return {!Array<!proto.proto.shopOrderDetail.ShipmentSku>}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.getShipmentSkuList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.ShipmentSku>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.ShipmentSku, 2));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.ShipmentSku>} value
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
*/
proto.proto.shopOrderDetail.FactoryShipment.prototype.setShipmentSkuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.ShipmentSku=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.ShipmentSku}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.addShipmentSku = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shopOrderDetail.ShipmentSku, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.clearShipmentSkuList = function() {
  return this.setShipmentSkuList([]);
};


/**
 * repeated ShipmentEvent event = 3;
 * @return {!Array<!proto.proto.shopOrderDetail.ShipmentEvent>}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.getEventList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.ShipmentEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.ShipmentEvent, 3));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.ShipmentEvent>} value
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
*/
proto.proto.shopOrderDetail.FactoryShipment.prototype.setEventList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.ShipmentEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.ShipmentEvent}
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.addEvent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.shopOrderDetail.ShipmentEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.FactoryShipment} returns this
 */
proto.proto.shopOrderDetail.FactoryShipment.prototype.clearEventList = function() {
  return this.setEventList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.OrderShipment.repeatedFields_ = [1,2];



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
proto.proto.shopOrderDetail.OrderShipment.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderShipment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderShipment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderShipment.toObject = function(includeInstance, msg) {
  var f, obj = {
    inStockShipmentList: jspb.Message.toObjectList(msg.getInStockShipmentList(),
    proto.proto.shopOrderDetail.InStockShipment.toObject, includeInstance),
    factoryShipmentList: jspb.Message.toObjectList(msg.getFactoryShipmentList(),
    proto.proto.shopOrderDetail.FactoryShipment.toObject, includeInstance)
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
 * @return {!proto.proto.shopOrderDetail.OrderShipment}
 */
proto.proto.shopOrderDetail.OrderShipment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderShipment;
  return proto.proto.shopOrderDetail.OrderShipment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderShipment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderShipment}
 */
proto.proto.shopOrderDetail.OrderShipment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.shopOrderDetail.InStockShipment;
      reader.readMessage(value,proto.proto.shopOrderDetail.InStockShipment.deserializeBinaryFromReader);
      msg.addInStockShipment(value);
      break;
    case 2:
      var value = new proto.proto.shopOrderDetail.FactoryShipment;
      reader.readMessage(value,proto.proto.shopOrderDetail.FactoryShipment.deserializeBinaryFromReader);
      msg.addFactoryShipment(value);
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
proto.proto.shopOrderDetail.OrderShipment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderShipment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderShipment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderShipment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInStockShipmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.shopOrderDetail.InStockShipment.serializeBinaryToWriter
    );
  }
  f = message.getFactoryShipmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.shopOrderDetail.FactoryShipment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InStockShipment in_stock_shipment = 1;
 * @return {!Array<!proto.proto.shopOrderDetail.InStockShipment>}
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.getInStockShipmentList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.InStockShipment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.InStockShipment, 1));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.InStockShipment>} value
 * @return {!proto.proto.shopOrderDetail.OrderShipment} returns this
*/
proto.proto.shopOrderDetail.OrderShipment.prototype.setInStockShipmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.InStockShipment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.InStockShipment}
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.addInStockShipment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.shopOrderDetail.InStockShipment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.OrderShipment} returns this
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.clearInStockShipmentList = function() {
  return this.setInStockShipmentList([]);
};


/**
 * repeated FactoryShipment factory_shipment = 2;
 * @return {!Array<!proto.proto.shopOrderDetail.FactoryShipment>}
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.getFactoryShipmentList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.FactoryShipment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.FactoryShipment, 2));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.FactoryShipment>} value
 * @return {!proto.proto.shopOrderDetail.OrderShipment} returns this
*/
proto.proto.shopOrderDetail.OrderShipment.prototype.setFactoryShipmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.FactoryShipment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.FactoryShipment}
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.addFactoryShipment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.shopOrderDetail.FactoryShipment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.OrderShipment} returns this
 */
proto.proto.shopOrderDetail.OrderShipment.prototype.clearFactoryShipmentList = function() {
  return this.setFactoryShipmentList([]);
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
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.OrderPaymentExtend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.OrderPaymentExtend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrderPayment: (f = msg.getSpOrderPayment()) && common_sp_order_payment_pb.SpOrderPayment.toObject(includeInstance, f),
    invoiceAddress: (f = msg.getInvoiceAddress()) && common_company_location_content_pb.CompanyLocationContent.toObject(includeInstance, f),
    exemptFile: (f = msg.getExemptFile()) && common_company_tax_exempt_files_pb.CompanyTaxExemptFiles.toObject(includeInstance, f),
    last4: jspb.Message.getFieldWithDefault(msg, 4, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 5, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.OrderPaymentExtend;
  return proto.proto.shopOrderDetail.OrderPaymentExtend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentExtend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_payment_pb.SpOrderPayment;
      reader.readMessage(value,common_sp_order_payment_pb.SpOrderPayment.deserializeBinaryFromReader);
      msg.setSpOrderPayment(value);
      break;
    case 2:
      var value = new common_company_location_content_pb.CompanyLocationContent;
      reader.readMessage(value,common_company_location_content_pb.CompanyLocationContent.deserializeBinaryFromReader);
      msg.setInvoiceAddress(value);
      break;
    case 3:
      var value = new common_company_tax_exempt_files_pb.CompanyTaxExemptFiles;
      reader.readMessage(value,common_company_tax_exempt_files_pb.CompanyTaxExemptFiles.deserializeBinaryFromReader);
      msg.setExemptFile(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast4(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExp(value);
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
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.OrderPaymentExtend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.OrderPaymentExtend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrderPayment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_payment_pb.SpOrderPayment.serializeBinaryToWriter
    );
  }
  f = message.getInvoiceAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_company_location_content_pb.CompanyLocationContent.serializeBinaryToWriter
    );
  }
  f = message.getExemptFile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_company_tax_exempt_files_pb.CompanyTaxExemptFiles.serializeBinaryToWriter
    );
  }
  f = message.getLast4();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExp();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional proto.SpOrderPayment sp_order_payment = 1;
 * @return {?proto.proto.SpOrderPayment}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getSpOrderPayment = function() {
  return /** @type{?proto.proto.SpOrderPayment} */ (
    jspb.Message.getWrapperField(this, common_sp_order_payment_pb.SpOrderPayment, 1));
};


/**
 * @param {?proto.proto.SpOrderPayment|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setSpOrderPayment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.clearSpOrderPayment = function() {
  return this.setSpOrderPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.hasSpOrderPayment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.CompanyLocationContent invoice_address = 2;
 * @return {?proto.proto.CompanyLocationContent}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getInvoiceAddress = function() {
  return /** @type{?proto.proto.CompanyLocationContent} */ (
    jspb.Message.getWrapperField(this, common_company_location_content_pb.CompanyLocationContent, 2));
};


/**
 * @param {?proto.proto.CompanyLocationContent|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setInvoiceAddress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.clearInvoiceAddress = function() {
  return this.setInvoiceAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.hasInvoiceAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.CompanyTaxExemptFiles exempt_file = 3;
 * @return {?proto.proto.CompanyTaxExemptFiles}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getExemptFile = function() {
  return /** @type{?proto.proto.CompanyTaxExemptFiles} */ (
    jspb.Message.getWrapperField(this, common_company_tax_exempt_files_pb.CompanyTaxExemptFiles, 3));
};


/**
 * @param {?proto.proto.CompanyTaxExemptFiles|undefined} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
*/
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setExemptFile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.clearExemptFile = function() {
  return this.setExemptFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.hasExemptFile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string last4 = 4;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getLast4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setLast4 = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string brand = 5;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string exp = 6;
 * @return {string}
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.getExp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.OrderPaymentExtend} returns this
 */
proto.proto.shopOrderDetail.OrderPaymentExtend.prototype.setExp = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.repeatedFields_ = [4,5,6,10];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.oneofGroups_ = [[12,13]];

/**
 * @enum {number}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.PersonCase = {
  PERSON_NOT_SET: 0,
  PLACED_BUYER: 12,
  PLACED_STAFF: 13
};

/**
 * @return {proto.proto.shopOrderDetail.PullOrderDetailResponse.PersonCase}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getPersonCase = function() {
  return /** @type {proto.proto.shopOrderDetail.PullOrderDetailResponse.PersonCase} */(jspb.Message.computeOneofCase(this, proto.proto.shopOrderDetail.PullOrderDetailResponse.oneofGroups_[0]));
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
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shopOrderDetail.PullOrderDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shopOrderDetail.PullOrderDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spOrder: (f = msg.getSpOrder()) && common_sp_order_pb.SpOrder.toObject(includeInstance, f),
    totalProducts: jspb.Message.getFieldWithDefault(msg, 2, 0),
    orderPayment: (f = msg.getOrderPayment()) && proto.proto.shopOrderDetail.OrderPaymentExtend.toObject(includeInstance, f),
    spOrderPaymentAmendmentList: jspb.Message.toObjectList(msg.getSpOrderPaymentAmendmentList(),
    common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.toObject, includeInstance),
    spOrderPaymentRemainingBalanceList: jspb.Message.toObjectList(msg.getSpOrderPaymentRemainingBalanceList(),
    common_sp_order_payment_remaining_balance_pb.SpOrderPaymentRemainingBalance.toObject, includeInstance),
    orderPaymentBilledList: jspb.Message.toObjectList(msg.getOrderPaymentBilledList(),
    proto.proto.shopOrderDetail.OrderPaymentBilledExtend.toObject, includeInstance),
    actualTotalAmount: jspb.Message.getFieldWithDefault(msg, 7, ""),
    allPayMethods: jspb.Message.getFieldWithDefault(msg, 8, ""),
    totalAmendment: jspb.Message.getFieldWithDefault(msg, 9, ""),
    orderedSkuList: jspb.Message.toObjectList(msg.getOrderedSkuList(),
    proto.proto.shopOrderDetail.OrderedSkuExtend.toObject, includeInstance),
    orderDeliveryInformation: (f = msg.getOrderDeliveryInformation()) && proto.proto.shopOrderDetail.OrderDeliveryInformation.toObject(includeInstance, f),
    placedBuyer: (f = msg.getPlacedBuyer()) && proto.proto.shopOrderDetail.BuyerExtend.toObject(includeInstance, f),
    placedStaff: (f = msg.getPlacedStaff()) && proto.proto.shopOrderDetail.StaffExtend.toObject(includeInstance, f),
    orderShipment: (f = msg.getOrderShipment()) && proto.proto.shopOrderDetail.OrderShipment.toObject(includeInstance, f),
    canCancel: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shopOrderDetail.PullOrderDetailResponse;
  return proto.proto.shopOrderDetail.PullOrderDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shopOrderDetail.PullOrderDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalProducts(value);
      break;
    case 3:
      var value = new proto.proto.shopOrderDetail.OrderPaymentExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderPaymentExtend.deserializeBinaryFromReader);
      msg.setOrderPayment(value);
      break;
    case 4:
      var value = new common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment;
      reader.readMessage(value,common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.deserializeBinaryFromReader);
      msg.addSpOrderPaymentAmendment(value);
      break;
    case 5:
      var value = new common_sp_order_payment_remaining_balance_pb.SpOrderPaymentRemainingBalance;
      reader.readMessage(value,common_sp_order_payment_remaining_balance_pb.SpOrderPaymentRemainingBalance.deserializeBinaryFromReader);
      msg.addSpOrderPaymentRemainingBalance(value);
      break;
    case 6:
      var value = new proto.proto.shopOrderDetail.OrderPaymentBilledExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderPaymentBilledExtend.deserializeBinaryFromReader);
      msg.addOrderPaymentBilled(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActualTotalAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAllPayMethods(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalAmendment(value);
      break;
    case 10:
      var value = new proto.proto.shopOrderDetail.OrderedSkuExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderedSkuExtend.deserializeBinaryFromReader);
      msg.addOrderedSku(value);
      break;
    case 11:
      var value = new proto.proto.shopOrderDetail.OrderDeliveryInformation;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderDeliveryInformation.deserializeBinaryFromReader);
      msg.setOrderDeliveryInformation(value);
      break;
    case 12:
      var value = new proto.proto.shopOrderDetail.BuyerExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.BuyerExtend.deserializeBinaryFromReader);
      msg.setPlacedBuyer(value);
      break;
    case 13:
      var value = new proto.proto.shopOrderDetail.StaffExtend;
      reader.readMessage(value,proto.proto.shopOrderDetail.StaffExtend.deserializeBinaryFromReader);
      msg.setPlacedStaff(value);
      break;
    case 14:
      var value = new proto.proto.shopOrderDetail.OrderShipment;
      reader.readMessage(value,proto.proto.shopOrderDetail.OrderShipment.deserializeBinaryFromReader);
      msg.setOrderShipment(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanCancel(value);
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
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shopOrderDetail.PullOrderDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shopOrderDetail.PullOrderDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_sp_order_pb.SpOrder.serializeBinaryToWriter
    );
  }
  f = message.getTotalProducts();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOrderPayment();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.shopOrderDetail.OrderPaymentExtend.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderPaymentAmendmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment.serializeBinaryToWriter
    );
  }
  f = message.getSpOrderPaymentRemainingBalanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_sp_order_payment_remaining_balance_pb.SpOrderPaymentRemainingBalance.serializeBinaryToWriter
    );
  }
  f = message.getOrderPaymentBilledList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.shopOrderDetail.OrderPaymentBilledExtend.serializeBinaryToWriter
    );
  }
  f = message.getActualTotalAmount();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAllPayMethods();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTotalAmendment();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOrderedSkuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.proto.shopOrderDetail.OrderedSkuExtend.serializeBinaryToWriter
    );
  }
  f = message.getOrderDeliveryInformation();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.proto.shopOrderDetail.OrderDeliveryInformation.serializeBinaryToWriter
    );
  }
  f = message.getPlacedBuyer();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.proto.shopOrderDetail.BuyerExtend.serializeBinaryToWriter
    );
  }
  f = message.getPlacedStaff();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.proto.shopOrderDetail.StaffExtend.serializeBinaryToWriter
    );
  }
  f = message.getOrderShipment();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.proto.shopOrderDetail.OrderShipment.serializeBinaryToWriter
    );
  }
  f = message.getCanCancel();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional proto.SpOrder sp_order = 1;
 * @return {?proto.proto.SpOrder}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getSpOrder = function() {
  return /** @type{?proto.proto.SpOrder} */ (
    jspb.Message.getWrapperField(this, common_sp_order_pb.SpOrder, 1));
};


/**
 * @param {?proto.proto.SpOrder|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setSpOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearSpOrder = function() {
  return this.setSpOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasSpOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 total_products = 2;
 * @return {number}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getTotalProducts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setTotalProducts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional OrderPaymentExtend order_payment = 3;
 * @return {?proto.proto.shopOrderDetail.OrderPaymentExtend}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getOrderPayment = function() {
  return /** @type{?proto.proto.shopOrderDetail.OrderPaymentExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.OrderPaymentExtend, 3));
};


/**
 * @param {?proto.proto.shopOrderDetail.OrderPaymentExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setOrderPayment = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearOrderPayment = function() {
  return this.setOrderPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasOrderPayment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated proto.SpOrderPaymentAmendment sp_order_payment_amendment = 4;
 * @return {!Array<!proto.proto.SpOrderPaymentAmendment>}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getSpOrderPaymentAmendmentList = function() {
  return /** @type{!Array<!proto.proto.SpOrderPaymentAmendment>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_payment_amendment_pb.SpOrderPaymentAmendment, 4));
};


/**
 * @param {!Array<!proto.proto.SpOrderPaymentAmendment>} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setSpOrderPaymentAmendmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.SpOrderPaymentAmendment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderPaymentAmendment}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.addSpOrderPaymentAmendment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.SpOrderPaymentAmendment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearSpOrderPaymentAmendmentList = function() {
  return this.setSpOrderPaymentAmendmentList([]);
};


/**
 * repeated proto.SpOrderPaymentRemainingBalance sp_order_payment_remaining_balance = 5;
 * @return {!Array<!proto.proto.SpOrderPaymentRemainingBalance>}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getSpOrderPaymentRemainingBalanceList = function() {
  return /** @type{!Array<!proto.proto.SpOrderPaymentRemainingBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_payment_remaining_balance_pb.SpOrderPaymentRemainingBalance, 5));
};


/**
 * @param {!Array<!proto.proto.SpOrderPaymentRemainingBalance>} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setSpOrderPaymentRemainingBalanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.SpOrderPaymentRemainingBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderPaymentRemainingBalance}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.addSpOrderPaymentRemainingBalance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.SpOrderPaymentRemainingBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearSpOrderPaymentRemainingBalanceList = function() {
  return this.setSpOrderPaymentRemainingBalanceList([]);
};


/**
 * repeated OrderPaymentBilledExtend order_payment_billed = 6;
 * @return {!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledExtend>}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getOrderPaymentBilledList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledExtend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.OrderPaymentBilledExtend, 6));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.OrderPaymentBilledExtend>} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setOrderPaymentBilledList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.OrderPaymentBilledExtend}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.addOrderPaymentBilled = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.shopOrderDetail.OrderPaymentBilledExtend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearOrderPaymentBilledList = function() {
  return this.setOrderPaymentBilledList([]);
};


/**
 * optional string actual_total_amount = 7;
 * @return {string}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getActualTotalAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setActualTotalAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string all_pay_methods = 8;
 * @return {string}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getAllPayMethods = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setAllPayMethods = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string total_amendment = 9;
 * @return {string}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getTotalAmendment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setTotalAmendment = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated OrderedSkuExtend ordered_sku = 10;
 * @return {!Array<!proto.proto.shopOrderDetail.OrderedSkuExtend>}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getOrderedSkuList = function() {
  return /** @type{!Array<!proto.proto.shopOrderDetail.OrderedSkuExtend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.shopOrderDetail.OrderedSkuExtend, 10));
};


/**
 * @param {!Array<!proto.proto.shopOrderDetail.OrderedSkuExtend>} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setOrderedSkuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.proto.shopOrderDetail.OrderedSkuExtend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.shopOrderDetail.OrderedSkuExtend}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.addOrderedSku = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.proto.shopOrderDetail.OrderedSkuExtend, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearOrderedSkuList = function() {
  return this.setOrderedSkuList([]);
};


/**
 * optional OrderDeliveryInformation order_delivery_information = 11;
 * @return {?proto.proto.shopOrderDetail.OrderDeliveryInformation}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getOrderDeliveryInformation = function() {
  return /** @type{?proto.proto.shopOrderDetail.OrderDeliveryInformation} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.OrderDeliveryInformation, 11));
};


/**
 * @param {?proto.proto.shopOrderDetail.OrderDeliveryInformation|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setOrderDeliveryInformation = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearOrderDeliveryInformation = function() {
  return this.setOrderDeliveryInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasOrderDeliveryInformation = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BuyerExtend placed_buyer = 12;
 * @return {?proto.proto.shopOrderDetail.BuyerExtend}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getPlacedBuyer = function() {
  return /** @type{?proto.proto.shopOrderDetail.BuyerExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.BuyerExtend, 12));
};


/**
 * @param {?proto.proto.shopOrderDetail.BuyerExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setPlacedBuyer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.proto.shopOrderDetail.PullOrderDetailResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearPlacedBuyer = function() {
  return this.setPlacedBuyer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasPlacedBuyer = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional StaffExtend placed_staff = 13;
 * @return {?proto.proto.shopOrderDetail.StaffExtend}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getPlacedStaff = function() {
  return /** @type{?proto.proto.shopOrderDetail.StaffExtend} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.StaffExtend, 13));
};


/**
 * @param {?proto.proto.shopOrderDetail.StaffExtend|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setPlacedStaff = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.proto.shopOrderDetail.PullOrderDetailResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearPlacedStaff = function() {
  return this.setPlacedStaff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasPlacedStaff = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional OrderShipment order_shipment = 14;
 * @return {?proto.proto.shopOrderDetail.OrderShipment}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getOrderShipment = function() {
  return /** @type{?proto.proto.shopOrderDetail.OrderShipment} */ (
    jspb.Message.getWrapperField(this, proto.proto.shopOrderDetail.OrderShipment, 14));
};


/**
 * @param {?proto.proto.shopOrderDetail.OrderShipment|undefined} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
*/
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setOrderShipment = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.clearOrderShipment = function() {
  return this.setOrderShipment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.hasOrderShipment = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 can_cancel = 15;
 * @return {number}
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.getCanCancel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shopOrderDetail.PullOrderDetailResponse} returns this
 */
proto.proto.shopOrderDetail.PullOrderDetailResponse.prototype.setCanCancel = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


goog.object.extend(exports, proto.proto.shopOrderDetail);
