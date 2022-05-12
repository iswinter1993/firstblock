// source: shop/orders/buyer/orderedProduct/pullOrderSkuReturnRes.proto
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

var common_sp_order_sku_request_parts_pb = require('../../../../common/sp_order_sku_request_parts_pb.js');
goog.object.extend(proto, common_sp_order_sku_request_parts_pb);
var common_sp_order_sku_replace_pb = require('../../../../common/sp_order_sku_replace_pb.js');
goog.object.extend(proto, common_sp_order_sku_replace_pb);
var common_sp_order_sku_return_pb = require('../../../../common/sp_order_sku_return_pb.js');
goog.object.extend(proto, common_sp_order_sku_return_pb);
var common_sp_order_sku_return_resolution_pb = require('../../../../common/sp_order_sku_return_resolution_pb.js');
goog.object.extend(proto, common_sp_order_sku_return_resolution_pb);
var common_sp_order_sku_return_reason_pb = require('../../../../common/sp_order_sku_return_reason_pb.js');
goog.object.extend(proto, common_sp_order_sku_return_reason_pb);
var common_sp_order_sku_replace_reason_pb = require('../../../../common/sp_order_sku_replace_reason_pb.js');
goog.object.extend(proto, common_sp_order_sku_replace_reason_pb);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg', null, global);
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
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.repeatedFields_, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.displayName = 'proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.repeatedFields_ = [1,2,3,4,5,6];



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
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestPartList: jspb.Message.toObjectList(msg.getRequestPartList(),
    common_sp_order_sku_request_parts_pb.SpOrderSkuRequestParts.toObject, includeInstance),
    returnList: jspb.Message.toObjectList(msg.getReturnList(),
    common_sp_order_sku_return_pb.SpOrderSkuReturn.toObject, includeInstance),
    replaceList: jspb.Message.toObjectList(msg.getReplaceList(),
    common_sp_order_sku_replace_pb.SpOrderSkuReplace.toObject, includeInstance),
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
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg;
  return proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_sp_order_sku_request_parts_pb.SpOrderSkuRequestParts;
      reader.readMessage(value,common_sp_order_sku_request_parts_pb.SpOrderSkuRequestParts.deserializeBinaryFromReader);
      msg.addRequestPart(value);
      break;
    case 2:
      var value = new common_sp_order_sku_return_pb.SpOrderSkuReturn;
      reader.readMessage(value,common_sp_order_sku_return_pb.SpOrderSkuReturn.deserializeBinaryFromReader);
      msg.addReturn(value);
      break;
    case 3:
      var value = new common_sp_order_sku_replace_pb.SpOrderSkuReplace;
      reader.readMessage(value,common_sp_order_sku_replace_pb.SpOrderSkuReplace.deserializeBinaryFromReader);
      msg.addReplace(value);
      break;
    case 4:
      var value = new common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason;
      reader.readMessage(value,common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason.deserializeBinaryFromReader);
      msg.addReturnReason(value);
      break;
    case 5:
      var value = new common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution;
      reader.readMessage(value,common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution.deserializeBinaryFromReader);
      msg.addReturnResolution(value);
      break;
    case 6:
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
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestPartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_sp_order_sku_request_parts_pb.SpOrderSkuRequestParts.serializeBinaryToWriter
    );
  }
  f = message.getReturnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_sp_order_sku_return_pb.SpOrderSkuReturn.serializeBinaryToWriter
    );
  }
  f = message.getReplaceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_sp_order_sku_replace_pb.SpOrderSkuReplace.serializeBinaryToWriter
    );
  }
  f = message.getReturnReasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason.serializeBinaryToWriter
    );
  }
  f = message.getReturnResolutionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution.serializeBinaryToWriter
    );
  }
  f = message.getReplaceReasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason.serializeBinaryToWriter
    );
  }
};


/**
 * repeated proto.SpOrderSkuRequestParts request_part = 1;
 * @return {!Array<!proto.proto.SpOrderSkuRequestParts>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getRequestPartList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuRequestParts>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_request_parts_pb.SpOrderSkuRequestParts, 1));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuRequestParts>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setRequestPartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.SpOrderSkuRequestParts=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuRequestParts}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addRequestPart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.SpOrderSkuRequestParts, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearRequestPartList = function() {
  return this.setRequestPartList([]);
};


/**
 * repeated proto.SpOrderSkuReturn return = 2;
 * @return {!Array<!proto.proto.SpOrderSkuReturn>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getReturnList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReturn>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_return_pb.SpOrderSkuReturn, 2));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReturn>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setReturnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReturn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReturn}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addReturn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.SpOrderSkuReturn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearReturnList = function() {
  return this.setReturnList([]);
};


/**
 * repeated proto.SpOrderSkuReplace replace = 3;
 * @return {!Array<!proto.proto.SpOrderSkuReplace>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getReplaceList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReplace>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_replace_pb.SpOrderSkuReplace, 3));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReplace>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setReplaceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReplace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReplace}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addReplace = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.SpOrderSkuReplace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearReplaceList = function() {
  return this.setReplaceList([]);
};


/**
 * repeated proto.SpOrderSkuReturnReason return_reason = 4;
 * @return {!Array<!proto.proto.SpOrderSkuReturnReason>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getReturnReasonList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReturnReason>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_return_reason_pb.SpOrderSkuReturnReason, 4));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReturnReason>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setReturnReasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReturnReason=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReturnReason}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addReturnReason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.SpOrderSkuReturnReason, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearReturnReasonList = function() {
  return this.setReturnReasonList([]);
};


/**
 * repeated proto.SpOrderSkuReturnResolution return_resolution = 5;
 * @return {!Array<!proto.proto.SpOrderSkuReturnResolution>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getReturnResolutionList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReturnResolution>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_return_resolution_pb.SpOrderSkuReturnResolution, 5));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReturnResolution>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setReturnResolutionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReturnResolution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReturnResolution}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addReturnResolution = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.SpOrderSkuReturnResolution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearReturnResolutionList = function() {
  return this.setReturnResolutionList([]);
};


/**
 * repeated proto.SpOrderSkuReplaceReason replace_reason = 6;
 * @return {!Array<!proto.proto.SpOrderSkuReplaceReason>}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.getReplaceReasonList = function() {
  return /** @type{!Array<!proto.proto.SpOrderSkuReplaceReason>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_sp_order_sku_replace_reason_pb.SpOrderSkuReplaceReason, 6));
};


/**
 * @param {!Array<!proto.proto.SpOrderSkuReplaceReason>} value
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.setReplaceReasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.SpOrderSkuReplaceReason=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpOrderSkuReplaceReason}
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.addReplaceReason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.SpOrderSkuReplaceReason, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes.Msg.prototype.clearReplaceReasonList = function() {
  return this.setReplaceReasonList([]);
};


goog.object.extend(exports, proto.proto.shop.orders.buyer.orderedProduct.pullOrderSkuReturnRes);
