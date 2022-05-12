// source: common/sp_order_shipment_factory.proto
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

goog.exportSymbol('proto.proto.SpOrderShipmentFactory', null, global);
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
proto.proto.SpOrderShipmentFactory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpOrderShipmentFactory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpOrderShipmentFactory.displayName = 'proto.proto.SpOrderShipmentFactory';
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
proto.proto.SpOrderShipmentFactory.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpOrderShipmentFactory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpOrderShipmentFactory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderShipmentFactory.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spOrderShipmentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    eventType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    location: jspb.Message.getFieldWithDefault(msg, 6, ""),
    country: jspb.Message.getFieldWithDefault(msg, 7, ""),
    city: jspb.Message.getFieldWithDefault(msg, 8, ""),
    position: jspb.Message.getFieldWithDefault(msg, 9, ""),
    trackingNum: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatePersonId: jspb.Message.getFieldWithDefault(msg, 11, 0),
    updatePersonType: jspb.Message.getFieldWithDefault(msg, 12, ""),
    creationTime: jspb.Message.getFieldWithDefault(msg, 13, 0),
    latest: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.proto.SpOrderShipmentFactory}
 */
proto.proto.SpOrderShipmentFactory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpOrderShipmentFactory;
  return proto.proto.SpOrderShipmentFactory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpOrderShipmentFactory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpOrderShipmentFactory}
 */
proto.proto.SpOrderShipmentFactory.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSpOrderShipmentId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEventType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingNum(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpdatePersonId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatePersonType(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTime(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatest(value);
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
proto.proto.SpOrderShipmentFactory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpOrderShipmentFactory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpOrderShipmentFactory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderShipmentFactory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpOrderShipmentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEventType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPosition();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTrackingNum();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatePersonId();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getUpdatePersonType();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreationTime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getLatest();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_order_shipment_id = 2;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getSpOrderShipmentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setSpOrderShipmentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 event_type = 3;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getEventType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setEventType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string location = 6;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string country = 7;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string city = 8;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string position = 9;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setPosition = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string tracking_num = 10;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getTrackingNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setTrackingNum = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 update_person_id = 11;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getUpdatePersonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setUpdatePersonId = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string update_person_type = 12;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactory.prototype.getUpdatePersonType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setUpdatePersonType = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 creation_time = 13;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 latest = 14;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactory.prototype.getLatest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactory} returns this
 */
proto.proto.SpOrderShipmentFactory.prototype.setLatest = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


goog.object.extend(exports, proto.proto);
