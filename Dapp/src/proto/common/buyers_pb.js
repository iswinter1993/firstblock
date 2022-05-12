// source: common/buyers.proto
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

goog.exportSymbol('proto.proto.Buyers', null, global);
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
proto.proto.Buyers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Buyers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Buyers.displayName = 'proto.proto.Buyers';
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
proto.proto.Buyers.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Buyers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Buyers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Buyers.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    company: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    address: jspb.Message.getFieldWithDefault(msg, 9, ""),
    zipcode: jspb.Message.getFieldWithDefault(msg, 10, ""),
    country: jspb.Message.getFieldWithDefault(msg, 11, ""),
    achStripeCustomerId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    defaultOrderPaymentOption: jspb.Message.getFieldWithDefault(msg, 13, ""),
    deleted: jspb.Message.getFieldWithDefault(msg, 14, 0),
    confirmationCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
    creationTime: jspb.Message.getFieldWithDefault(msg, 16, 0),
    lastLogTime: jspb.Message.getFieldWithDefault(msg, 17, 0),
    originalPassword: jspb.Message.getFieldWithDefault(msg, 18, ""),
    cancelledTax: jspb.Message.getFieldWithDefault(msg, 19, 0),
    activeCode: jspb.Message.getFieldWithDefault(msg, 20, ""),
    state: jspb.Message.getFieldWithDefault(msg, 21, 0),
    emailVerification: jspb.Message.getFieldWithDefault(msg, 22, ""),
    lastEmailDate: jspb.Message.getFieldWithDefault(msg, 23, 0),
    isCancelledTax: jspb.Message.getFieldWithDefault(msg, 24, 0),
    isEmailActived: jspb.Message.getFieldWithDefault(msg, 25, 0),
    creator: jspb.Message.getFieldWithDefault(msg, 26, ""),
    activeTime: jspb.Message.getFieldWithDefault(msg, 27, 0),
    stripeCustomerId: jspb.Message.getFieldWithDefault(msg, 28, ""),
    referralCode: jspb.Message.getFieldWithDefault(msg, 29, ""),
    sampleShippingCredit: jspb.Message.getFieldWithDefault(msg, 30, ""),
    weeklySampleShippingCredit: jspb.Message.getFieldWithDefault(msg, 31, ""),
    isTest: jspb.Message.getFieldWithDefault(msg, 32, 0),
    timeZone: jspb.Message.getFieldWithDefault(msg, 33, 0),
    currentCredit: jspb.Message.getFieldWithDefault(msg, 34, ""),
    weeklyAllowance: jspb.Message.getFieldWithDefault(msg, 35, ""),
    isVerified: jspb.Message.getFieldWithDefault(msg, 36, 0),
    noEmail: jspb.Message.getFieldWithDefault(msg, 37, 0),
    noNotification: jspb.Message.getFieldWithDefault(msg, 38, 0),
    synopsis: jspb.Message.getFieldWithDefault(msg, 39, ""),
    buyerType: jspb.Message.getFieldWithDefault(msg, 40, ""),
    lessThanAmountToFullpay: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0),
    stopInviteEmail: jspb.Message.getFieldWithDefault(msg, 42, 0),
    paypal: jspb.Message.getFieldWithDefault(msg, 43, 0),
    canFobOrder: jspb.Message.getFieldWithDefault(msg, 44, 0),
    staffId: jspb.Message.getFieldWithDefault(msg, 45, 0),
    agreeNewsletter: jspb.Message.getFieldWithDefault(msg, 46, 0),
    companyId: jspb.Message.getFieldWithDefault(msg, 47, 0),
    status: jspb.Message.getFieldWithDefault(msg, 48, ""),
    isAdmin: jspb.Message.getFieldWithDefault(msg, 49, 0),
    title: jspb.Message.getFieldWithDefault(msg, 50, "")
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
 * @return {!proto.proto.Buyers}
 */
proto.proto.Buyers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Buyers;
  return proto.proto.Buyers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Buyers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Buyers}
 */
proto.proto.Buyers.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompany(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipcode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAchStripeCustomerId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultOrderPaymentOption(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeleted(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmationCode(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastLogTime(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalPassword(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCancelledTax(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setActiveCode(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailVerification(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastEmailDate(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsCancelledTax(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsEmailActived(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActiveTime(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeCustomerId(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferralCode(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setSampleShippingCredit(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeeklySampleShippingCredit(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsTest(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeZone(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentCredit(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeeklyAllowance(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsVerified(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoEmail(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoNotification(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setSynopsis(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerType(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLessThanAmountToFullpay(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStopInviteEmail(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypal(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanFobOrder(value);
      break;
    case 45:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStaffId(value);
      break;
    case 46:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAgreeNewsletter(value);
      break;
    case 47:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompanyId(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 49:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsAdmin(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
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
proto.proto.Buyers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Buyers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Buyers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Buyers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCompany();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getZipcode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAchStripeCustomerId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDefaultOrderPaymentOption();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDeleted();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getConfirmationCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCreationTime();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getLastLogTime();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getOriginalPassword();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getCancelledTax();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getActiveCode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = message.getEmailVerification();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getLastEmailDate();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getIsCancelledTax();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getIsEmailActived();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getActiveTime();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
  f = message.getStripeCustomerId();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getReferralCode();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getSampleShippingCredit();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getWeeklySampleShippingCredit();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getIsTest();
  if (f !== 0) {
    writer.writeInt32(
      32,
      f
    );
  }
  f = message.getTimeZone();
  if (f !== 0) {
    writer.writeInt32(
      33,
      f
    );
  }
  f = message.getCurrentCredit();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getWeeklyAllowance();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getIsVerified();
  if (f !== 0) {
    writer.writeInt32(
      36,
      f
    );
  }
  f = message.getNoEmail();
  if (f !== 0) {
    writer.writeInt32(
      37,
      f
    );
  }
  f = message.getNoNotification();
  if (f !== 0) {
    writer.writeInt32(
      38,
      f
    );
  }
  f = message.getSynopsis();
  if (f.length > 0) {
    writer.writeString(
      39,
      f
    );
  }
  f = message.getBuyerType();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getLessThanAmountToFullpay();
  if (f !== 0.0) {
    writer.writeDouble(
      41,
      f
    );
  }
  f = message.getStopInviteEmail();
  if (f !== 0) {
    writer.writeInt32(
      42,
      f
    );
  }
  f = message.getPaypal();
  if (f !== 0) {
    writer.writeInt32(
      43,
      f
    );
  }
  f = message.getCanFobOrder();
  if (f !== 0) {
    writer.writeInt32(
      44,
      f
    );
  }
  f = message.getStaffId();
  if (f !== 0) {
    writer.writeInt32(
      45,
      f
    );
  }
  f = message.getAgreeNewsletter();
  if (f !== 0) {
    writer.writeInt32(
      46,
      f
    );
  }
  f = message.getCompanyId();
  if (f !== 0) {
    writer.writeInt32(
      47,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      48,
      f
    );
  }
  f = message.getIsAdmin();
  if (f !== 0) {
    writer.writeInt32(
      49,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.proto.Buyers.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.proto.Buyers.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.proto.Buyers.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.proto.Buyers.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_name = 5;
 * @return {string}
 */
proto.proto.Buyers.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string last_name = 6;
 * @return {string}
 */
proto.proto.Buyers.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string company = 7;
 * @return {string}
 */
proto.proto.Buyers.prototype.getCompany = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCompany = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.proto.Buyers.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string address = 9;
 * @return {string}
 */
proto.proto.Buyers.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string zipcode = 10;
 * @return {string}
 */
proto.proto.Buyers.prototype.getZipcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setZipcode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string country = 11;
 * @return {string}
 */
proto.proto.Buyers.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string ach_stripe_customer_id = 12;
 * @return {string}
 */
proto.proto.Buyers.prototype.getAchStripeCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setAchStripeCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string default_order_payment_option = 13;
 * @return {string}
 */
proto.proto.Buyers.prototype.getDefaultOrderPaymentOption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setDefaultOrderPaymentOption = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 deleted = 14;
 * @return {number}
 */
proto.proto.Buyers.prototype.getDeleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string confirmation_code = 15;
 * @return {string}
 */
proto.proto.Buyers.prototype.getConfirmationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setConfirmationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional int64 creation_time = 16;
 * @return {number}
 */
proto.proto.Buyers.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCreationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 last_log_time = 17;
 * @return {number}
 */
proto.proto.Buyers.prototype.getLastLogTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setLastLogTime = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional string original_password = 18;
 * @return {string}
 */
proto.proto.Buyers.prototype.getOriginalPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setOriginalPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional int32 cancelled_tax = 19;
 * @return {number}
 */
proto.proto.Buyers.prototype.getCancelledTax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCancelledTax = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string active_code = 20;
 * @return {string}
 */
proto.proto.Buyers.prototype.getActiveCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setActiveCode = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int32 state = 21;
 * @return {number}
 */
proto.proto.Buyers.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional string email_verification = 22;
 * @return {string}
 */
proto.proto.Buyers.prototype.getEmailVerification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setEmailVerification = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int64 last_email_date = 23;
 * @return {number}
 */
proto.proto.Buyers.prototype.getLastEmailDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setLastEmailDate = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 is_cancelled_tax = 24;
 * @return {number}
 */
proto.proto.Buyers.prototype.getIsCancelledTax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setIsCancelledTax = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int32 is_email_actived = 25;
 * @return {number}
 */
proto.proto.Buyers.prototype.getIsEmailActived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setIsEmailActived = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional string creator = 26;
 * @return {string}
 */
proto.proto.Buyers.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional int64 active_time = 27;
 * @return {number}
 */
proto.proto.Buyers.prototype.getActiveTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setActiveTime = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional string stripe_customer_id = 28;
 * @return {string}
 */
proto.proto.Buyers.prototype.getStripeCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setStripeCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string referral_code = 29;
 * @return {string}
 */
proto.proto.Buyers.prototype.getReferralCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setReferralCode = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string sample_shipping_credit = 30;
 * @return {string}
 */
proto.proto.Buyers.prototype.getSampleShippingCredit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setSampleShippingCredit = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string weekly_sample_shipping_credit = 31;
 * @return {string}
 */
proto.proto.Buyers.prototype.getWeeklySampleShippingCredit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setWeeklySampleShippingCredit = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional int32 is_test = 32;
 * @return {number}
 */
proto.proto.Buyers.prototype.getIsTest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setIsTest = function(value) {
  return jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional int32 time_zone = 33;
 * @return {number}
 */
proto.proto.Buyers.prototype.getTimeZone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional string current_credit = 34;
 * @return {string}
 */
proto.proto.Buyers.prototype.getCurrentCredit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCurrentCredit = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string weekly_allowance = 35;
 * @return {string}
 */
proto.proto.Buyers.prototype.getWeeklyAllowance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setWeeklyAllowance = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional int32 is_verified = 36;
 * @return {number}
 */
proto.proto.Buyers.prototype.getIsVerified = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setIsVerified = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional int32 no_email = 37;
 * @return {number}
 */
proto.proto.Buyers.prototype.getNoEmail = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setNoEmail = function(value) {
  return jspb.Message.setProto3IntField(this, 37, value);
};


/**
 * optional int32 no_notification = 38;
 * @return {number}
 */
proto.proto.Buyers.prototype.getNoNotification = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setNoNotification = function(value) {
  return jspb.Message.setProto3IntField(this, 38, value);
};


/**
 * optional string synopsis = 39;
 * @return {string}
 */
proto.proto.Buyers.prototype.getSynopsis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setSynopsis = function(value) {
  return jspb.Message.setProto3StringField(this, 39, value);
};


/**
 * optional string buyer_type = 40;
 * @return {string}
 */
proto.proto.Buyers.prototype.getBuyerType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setBuyerType = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional double less_than_amount_to_fullpay = 41;
 * @return {number}
 */
proto.proto.Buyers.prototype.getLessThanAmountToFullpay = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setLessThanAmountToFullpay = function(value) {
  return jspb.Message.setProto3FloatField(this, 41, value);
};


/**
 * optional int32 stop_invite_email = 42;
 * @return {number}
 */
proto.proto.Buyers.prototype.getStopInviteEmail = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setStopInviteEmail = function(value) {
  return jspb.Message.setProto3IntField(this, 42, value);
};


/**
 * optional int32 paypal = 43;
 * @return {number}
 */
proto.proto.Buyers.prototype.getPaypal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setPaypal = function(value) {
  return jspb.Message.setProto3IntField(this, 43, value);
};


/**
 * optional int32 can_fob_order = 44;
 * @return {number}
 */
proto.proto.Buyers.prototype.getCanFobOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCanFobOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 44, value);
};


/**
 * optional int32 staff_id = 45;
 * @return {number}
 */
proto.proto.Buyers.prototype.getStaffId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 45, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setStaffId = function(value) {
  return jspb.Message.setProto3IntField(this, 45, value);
};


/**
 * optional int32 agree_newsletter = 46;
 * @return {number}
 */
proto.proto.Buyers.prototype.getAgreeNewsletter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 46, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setAgreeNewsletter = function(value) {
  return jspb.Message.setProto3IntField(this, 46, value);
};


/**
 * optional int32 company_id = 47;
 * @return {number}
 */
proto.proto.Buyers.prototype.getCompanyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 47, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3IntField(this, 47, value);
};


/**
 * optional string status = 48;
 * @return {string}
 */
proto.proto.Buyers.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 48, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 48, value);
};


/**
 * optional int32 is_admin = 49;
 * @return {number}
 */
proto.proto.Buyers.prototype.getIsAdmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 49, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3IntField(this, 49, value);
};


/**
 * optional string title = 50;
 * @return {string}
 */
proto.proto.Buyers.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Buyers} returns this
 */
proto.proto.Buyers.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};


goog.object.extend(exports, proto.proto);
