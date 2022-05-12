// source: common/sp_order_payment_remaining_balance.proto
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

goog.exportSymbol('proto.proto.SpOrderPaymentRemainingBalance', null, global);
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
proto.proto.SpOrderPaymentRemainingBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpOrderPaymentRemainingBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpOrderPaymentRemainingBalance.displayName = 'proto.proto.SpOrderPaymentRemainingBalance';
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
proto.proto.SpOrderPaymentRemainingBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpOrderPaymentRemainingBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpOrderPaymentRemainingBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderPaymentRemainingBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spOrderPaymentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isBilled: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deleted: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.proto.SpOrderPaymentRemainingBalance}
 */
proto.proto.SpOrderPaymentRemainingBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpOrderPaymentRemainingBalance;
  return proto.proto.SpOrderPaymentRemainingBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpOrderPaymentRemainingBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpOrderPaymentRemainingBalance}
 */
proto.proto.SpOrderPaymentRemainingBalance.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSpOrderPaymentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsBilled(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeleted(value);
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
proto.proto.SpOrderPaymentRemainingBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpOrderPaymentRemainingBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpOrderPaymentRemainingBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderPaymentRemainingBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpOrderPaymentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsBilled();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDeleted();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_order_payment_id = 2;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getSpOrderPaymentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setSpOrderPaymentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string amount = 4;
 * @return {string}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 is_billed = 5;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getIsBilled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setIsBilled = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 deleted = 6;
 * @return {number}
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.getDeleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderPaymentRemainingBalance} returns this
 */
proto.proto.SpOrderPaymentRemainingBalance.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.proto);
