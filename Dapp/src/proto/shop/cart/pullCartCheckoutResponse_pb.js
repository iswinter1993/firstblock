// source: shop/cart/pullCartCheckoutResponse.proto
/**
 * @fileoverview
 * @enhanceable
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

var common_companies_pb = require('../../common/companies_pb.js');
goog.object.extend(proto, common_companies_pb);
var common_buyers_pb = require('../../common/buyers_pb.js');
goog.object.extend(proto, common_buyers_pb);
var common_company_contact_content_pb = require('../../common/company_contact_content_pb.js');
goog.object.extend(proto, common_company_contact_content_pb);
var common_company_location_content_pb = require('../../common/company_location_content_pb.js');
goog.object.extend(proto, common_company_location_content_pb);
goog.exportSymbol('proto.proto.shop.ShopCartCheckoutResponse', null, global);
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
proto.proto.shop.ShopCartCheckoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.ShopCartCheckoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.ShopCartCheckoutResponse.displayName = 'proto.proto.shop.ShopCartCheckoutResponse';
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
proto.proto.shop.ShopCartCheckoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.ShopCartCheckoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.ShopCartCheckoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopCartCheckoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    company: (f = msg.getCompany()) && common_companies_pb.Companies.toObject(includeInstance, f),
    buyer: (f = msg.getBuyer()) && common_buyers_pb.Buyers.toObject(includeInstance, f),
    companyCredit: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    deliveryCompanyContactContent: (f = msg.getDeliveryCompanyContactContent()) && common_company_contact_content_pb.CompanyContactContent.toObject(includeInstance, f),
    deliveryCompanyLocationContent: (f = msg.getDeliveryCompanyLocationContent()) && common_company_location_content_pb.CompanyLocationContent.toObject(includeInstance, f)
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
 * @return {!proto.proto.shop.ShopCartCheckoutResponse}
 */
proto.proto.shop.ShopCartCheckoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.ShopCartCheckoutResponse;
  return proto.proto.shop.ShopCartCheckoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.ShopCartCheckoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.ShopCartCheckoutResponse}
 */
proto.proto.shop.ShopCartCheckoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_companies_pb.Companies;
      reader.readMessage(value,common_companies_pb.Companies.deserializeBinaryFromReader);
      msg.setCompany(value);
      break;
    case 2:
      var value = new common_buyers_pb.Buyers;
      reader.readMessage(value,common_buyers_pb.Buyers.deserializeBinaryFromReader);
      msg.setBuyer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCompanyCredit(value);
      break;
    case 4:
      var value = new common_company_contact_content_pb.CompanyContactContent;
      reader.readMessage(value,common_company_contact_content_pb.CompanyContactContent.deserializeBinaryFromReader);
      msg.setDeliveryCompanyContactContent(value);
      break;
    case 5:
      var value = new common_company_location_content_pb.CompanyLocationContent;
      reader.readMessage(value,common_company_location_content_pb.CompanyLocationContent.deserializeBinaryFromReader);
      msg.setDeliveryCompanyLocationContent(value);
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
proto.proto.shop.ShopCartCheckoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.ShopCartCheckoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.ShopCartCheckoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.ShopCartCheckoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompany();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_companies_pb.Companies.serializeBinaryToWriter
    );
  }
  f = message.getBuyer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_buyers_pb.Buyers.serializeBinaryToWriter
    );
  }
  f = message.getCompanyCredit();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDeliveryCompanyContactContent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_company_contact_content_pb.CompanyContactContent.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryCompanyLocationContent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_company_location_content_pb.CompanyLocationContent.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.Companies company = 1;
 * @return {?proto.proto.Companies}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.getCompany = function() {
  return /** @type{?proto.proto.Companies} */ (
    jspb.Message.getWrapperField(this, common_companies_pb.Companies, 1));
};


/**
 * @param {?proto.proto.Companies|undefined} value
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
*/
proto.proto.shop.ShopCartCheckoutResponse.prototype.setCompany = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.clearCompany = function() {
  return this.setCompany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.hasCompany = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.Buyers buyer = 2;
 * @return {?proto.proto.Buyers}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.getBuyer = function() {
  return /** @type{?proto.proto.Buyers} */ (
    jspb.Message.getWrapperField(this, common_buyers_pb.Buyers, 2));
};


/**
 * @param {?proto.proto.Buyers|undefined} value
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
*/
proto.proto.shop.ShopCartCheckoutResponse.prototype.setBuyer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.clearBuyer = function() {
  return this.setBuyer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.hasBuyer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double company_credit = 3;
 * @return {number}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.getCompanyCredit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.setCompanyCredit = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional proto.CompanyContactContent delivery_company_contact_content = 4;
 * @return {?proto.proto.CompanyContactContent}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.getDeliveryCompanyContactContent = function() {
  return /** @type{?proto.proto.CompanyContactContent} */ (
    jspb.Message.getWrapperField(this, common_company_contact_content_pb.CompanyContactContent, 4));
};


/**
 * @param {?proto.proto.CompanyContactContent|undefined} value
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
*/
proto.proto.shop.ShopCartCheckoutResponse.prototype.setDeliveryCompanyContactContent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.clearDeliveryCompanyContactContent = function() {
  return this.setDeliveryCompanyContactContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.hasDeliveryCompanyContactContent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional proto.CompanyLocationContent delivery_company_location_content = 5;
 * @return {?proto.proto.CompanyLocationContent}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.getDeliveryCompanyLocationContent = function() {
  return /** @type{?proto.proto.CompanyLocationContent} */ (
    jspb.Message.getWrapperField(this, common_company_location_content_pb.CompanyLocationContent, 5));
};


/**
 * @param {?proto.proto.CompanyLocationContent|undefined} value
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
*/
proto.proto.shop.ShopCartCheckoutResponse.prototype.setDeliveryCompanyLocationContent = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.ShopCartCheckoutResponse} returns this
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.clearDeliveryCompanyLocationContent = function() {
  return this.setDeliveryCompanyLocationContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.ShopCartCheckoutResponse.prototype.hasDeliveryCompanyLocationContent = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.proto.shop);
