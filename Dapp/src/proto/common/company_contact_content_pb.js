// source: common/company_contact_content.proto
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

goog.exportSymbol('proto.proto.CompanyContactContent', null, global);
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
proto.proto.CompanyContactContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CompanyContactContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompanyContactContent.displayName = 'proto.proto.CompanyContactContent';
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
proto.proto.CompanyContactContent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompanyContactContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompanyContactContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompanyContactContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userContactId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    companyName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactPerson: jspb.Message.getFieldWithDefault(msg, 4, ""),
    country: jspb.Message.getFieldWithDefault(msg, 5, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mailingAddressLine1: jspb.Message.getFieldWithDefault(msg, 8, ""),
    mailingAddressLine2: jspb.Message.getFieldWithDefault(msg, 9, ""),
    mailingAddressState: jspb.Message.getFieldWithDefault(msg, 10, ""),
    mailingAddressCity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    mailingAddressZipCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
    creationTime: jspb.Message.getFieldWithDefault(msg, 13, 0),
    latest: jspb.Message.getFieldWithDefault(msg, 14, 0),
    firstName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 16, ""),
    companyContactId: jspb.Message.getFieldWithDefault(msg, 17, 0)
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
 * @return {!proto.proto.CompanyContactContent}
 */
proto.proto.CompanyContactContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompanyContactContent;
  return proto.proto.CompanyContactContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompanyContactContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompanyContactContent}
 */
proto.proto.CompanyContactContent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserContactId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactPerson(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailingAddressLine1(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailingAddressLine2(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailingAddressState(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailingAddressCity(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailingAddressZipCode(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTime(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatest(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompanyContactId(value);
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
proto.proto.CompanyContactContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompanyContactContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompanyContactContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompanyContactContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserContactId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCompanyName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactPerson();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMailingAddressLine1();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMailingAddressLine2();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMailingAddressState();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMailingAddressCity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMailingAddressZipCode();
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
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCompanyContactId();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.CompanyContactContent.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 user_contact_id = 2;
 * @return {number}
 */
proto.proto.CompanyContactContent.prototype.getUserContactId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setUserContactId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string company_name = 3;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getCompanyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setCompanyName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contact_person = 4;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getContactPerson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setContactPerson = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string phone = 6;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string mailing_address_line1 = 8;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getMailingAddressLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setMailingAddressLine1 = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string mailing_address_line2 = 9;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getMailingAddressLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setMailingAddressLine2 = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string mailing_address_state = 10;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getMailingAddressState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setMailingAddressState = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string mailing_address_city = 11;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getMailingAddressCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setMailingAddressCity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string mailing_address_zip_code = 12;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getMailingAddressZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setMailingAddressZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 creation_time = 13;
 * @return {number}
 */
proto.proto.CompanyContactContent.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 latest = 14;
 * @return {number}
 */
proto.proto.CompanyContactContent.prototype.getLatest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setLatest = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string first_name = 15;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string last_name = 16;
 * @return {string}
 */
proto.proto.CompanyContactContent.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional int32 company_contact_id = 17;
 * @return {number}
 */
proto.proto.CompanyContactContent.prototype.getCompanyContactId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompanyContactContent} returns this
 */
proto.proto.CompanyContactContent.prototype.setCompanyContactId = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


goog.object.extend(exports, proto.proto);
