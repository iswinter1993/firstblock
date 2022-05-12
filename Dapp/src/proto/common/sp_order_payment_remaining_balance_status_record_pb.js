// source: common/sp_order_payment_remaining_balance_status_record.proto
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

goog.exportSymbol('proto.proto.SpOrderPaymentRemainingBalanceStatusRecord', null, global);
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
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpOrderPaymentRemainingBalanceStatusRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.displayName = 'proto.proto.SpOrderPaymentRemainingBalanceStatusRecord';
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
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spOrderPaymentRemainingBalanceId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isBilled: jspb.Message.getFieldWithDefault(msg, 3, 0),
    statusTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    personId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    personType: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpOrderPaymentRemainingBalanceStatusRecord;
  return proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSpOrderPaymentRemainingBalanceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsBilled(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatusTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPersonId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonType(value);
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
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpOrderPaymentRemainingBalanceId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsBilled();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStatusTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPersonId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPersonType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_order_payment_remaining_balance_id = 2;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getSpOrderPaymentRemainingBalanceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setSpOrderPaymentRemainingBalanceId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 is_billed = 3;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getIsBilled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setIsBilled = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 status_time = 4;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getStatusTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setStatusTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 person_id = 5;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getPersonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setPersonId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string person_type = 6;
 * @return {string}
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.getPersonType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalanceStatusRecord} returns this
 */
proto.proto.SpOrderPaymentRemainingBalanceStatusRecord.prototype.setPersonType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.proto);