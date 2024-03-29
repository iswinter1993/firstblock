// source: common/sp_order_shipment_factory_files.proto
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

goog.exportSymbol('proto.proto.SpOrderShipmentFactoryFiles', null, global);
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
proto.proto.SpOrderShipmentFactoryFiles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpOrderShipmentFactoryFiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpOrderShipmentFactoryFiles.displayName = 'proto.proto.SpOrderShipmentFactoryFiles';
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
proto.proto.SpOrderShipmentFactoryFiles.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpOrderShipmentFactoryFiles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpOrderShipmentFactoryFiles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderShipmentFactoryFiles.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spOrderShipmentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    originalFilename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    internalFilename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fileSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    extension: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deleted: jspb.Message.getFieldWithDefault(msg, 7, 0),
    md5Base64: jspb.Message.getFieldWithDefault(msg, 8, ""),
    mimeContentType: jspb.Message.getFieldWithDefault(msg, 9, ""),
    link: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.proto.SpOrderShipmentFactoryFiles}
 */
proto.proto.SpOrderShipmentFactoryFiles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpOrderShipmentFactoryFiles;
  return proto.proto.SpOrderShipmentFactoryFiles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpOrderShipmentFactoryFiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpOrderShipmentFactoryFiles}
 */
proto.proto.SpOrderShipmentFactoryFiles.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalFilename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalFilename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFileSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeleted(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5Base64(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeContentType(value);
      break;
    case 10:
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
proto.proto.SpOrderShipmentFactoryFiles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpOrderShipmentFactoryFiles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpOrderShipmentFactoryFiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpOrderShipmentFactoryFiles.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOriginalFilename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInternalFilename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getExtension$();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeleted();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMd5Base64();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMimeContentType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_order_shipment_id = 2;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getSpOrderShipmentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setSpOrderShipmentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string original_filename = 3;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getOriginalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setOriginalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string internal_filename = 4;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getInternalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setInternalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 file_size = 5;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string extension = 6;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 deleted = 7;
 * @return {number}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getDeleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string md5_base_64 = 8;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getMd5Base64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setMd5Base64 = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string mime_content_type = 9;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getMimeContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setMimeContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string link = 10;
 * @return {string}
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpOrderShipmentFactoryFiles} returns this
 */
proto.proto.SpOrderShipmentFactoryFiles.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


goog.object.extend(exports, proto.proto);
