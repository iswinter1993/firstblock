// source: common/sp_sku_images.proto
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

goog.exportSymbol('proto.proto.SpSkuImages', null, global);
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
proto.proto.SpSkuImages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpSkuImages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpSkuImages.displayName = 'proto.proto.SpSkuImages';
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
proto.proto.SpSkuImages.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpSkuImages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpSkuImages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuImages.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spSkuId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    originalFilename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    internalFilename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fileSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    extension: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deleted: jspb.Message.getFieldWithDefault(msg, 7, 0),
    md5Base64: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isMain: jspb.Message.getFieldWithDefault(msg, 9, 0),
    mimeContentType: jspb.Message.getFieldWithDefault(msg, 10, ""),
    creationTime: jspb.Message.getFieldWithDefault(msg, 11, 0),
    link: jspb.Message.getFieldWithDefault(msg, 12, ""),
    link80: jspb.Message.getFieldWithDefault(msg, 13, ""),
    link350: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.proto.SpSkuImages}
 */
proto.proto.SpSkuImages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpSkuImages;
  return proto.proto.SpSkuImages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpSkuImages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpSkuImages}
 */
proto.proto.SpSkuImages.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSpSkuId(value);
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsMain(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimeContentType(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTime(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink80(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink350(value);
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
proto.proto.SpSkuImages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpSkuImages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpSkuImages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpSkuImages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpSkuId();
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
  f = message.getIsMain();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getMimeContentType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreationTime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLink80();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLink350();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 sp_sku_id = 2;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getSpSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setSpSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string original_filename = 3;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getOriginalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setOriginalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string internal_filename = 4;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getInternalFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setInternalFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 file_size = 5;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string extension = 6;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 deleted = 7;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getDeleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string md5_base_64 = 8;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getMd5Base64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setMd5Base64 = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 is_main = 9;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getIsMain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setIsMain = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string mime_content_type = 10;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getMimeContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setMimeContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 creation_time = 11;
 * @return {number}
 */
proto.proto.SpSkuImages.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string link = 12;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string link_80 = 13;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getLink80 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setLink80 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string link_350 = 14;
 * @return {string}
 */
proto.proto.SpSkuImages.prototype.getLink350 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpSkuImages} returns this
 */
proto.proto.SpSkuImages.prototype.setLink350 = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


goog.object.extend(exports, proto.proto);