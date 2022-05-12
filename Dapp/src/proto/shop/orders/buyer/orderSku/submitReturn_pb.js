// source: shop/orders/buyer/orderSku/submitReturn.proto
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

goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.BusinessCase', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems', null, global);
goog.exportSymbol('proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems', null, global);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.displayName = 'proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems';
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.displayName = 'proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts';
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.displayName = 'proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems';
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_);
};
goog.inherits(proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.displayName = 'proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg';
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.toObject = function(includeInstance, msg) {
  var f, obj = {
    reasonId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resolutionId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems;
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReasonId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResolutionId(value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReasonId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getResolutionId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 reason_id = 1;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.getReasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.setReasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 resolution_id = 2;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.getResolutionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.prototype.setResolutionId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts;
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.toObject = function(includeInstance, msg) {
  var f, obj = {
    reasonId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems;
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReasonId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReasonId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 reason_id = 1;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.getReasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.setReasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 quantity = 2;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_ = [[6,7,8]];

/**
 * @enum {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.BusinessCase = {
  BUSINESS_NOT_SET: 0,
  RETURN_ITEM: 6,
  PART: 7,
  REPLACE_ITEM: 8
};

/**
 * @return {proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.BusinessCase}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getBusinessCase = function() {
  return /** @type {proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.BusinessCase} */(jspb.Message.computeOneofCase(this, proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_[0]));
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    personId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    personType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    orderSkuId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    returnItem: (f = msg.getReturnItem()) && proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.toObject(includeInstance, f),
    part: (f = msg.getPart()) && proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.toObject(includeInstance, f),
    replaceItem: (f = msg.getReplaceItem()) && proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.toObject(includeInstance, f)
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
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg;
  return proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPersonId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompanyId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderSkuId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = new proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems;
      reader.readMessage(value,proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.deserializeBinaryFromReader);
      msg.setReturnItem(value);
      break;
    case 7:
      var value = new proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts;
      reader.readMessage(value,proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.deserializeBinaryFromReader);
      msg.setPart(value);
      break;
    case 8:
      var value = new proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems;
      reader.readMessage(value,proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.deserializeBinaryFromReader);
      msg.setReplaceItem(value);
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
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPersonId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPersonType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompanyId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOrderSkuId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReturnItem();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems.serializeBinaryToWriter
    );
  }
  f = message.getPart();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts.serializeBinaryToWriter
    );
  }
  f = message.getReplaceItem();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 person_id = 1;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getPersonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setPersonId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string person_type = 2;
 * @return {string}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getPersonType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setPersonType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 company_id = 3;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getCompanyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 order_sku_id = 4;
 * @return {number}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getOrderSkuId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setOrderSkuId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ReturnItems return_item = 6;
 * @return {?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getReturnItem = function() {
  return /** @type{?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems} */ (
    jspb.Message.getWrapperField(this, proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems, 6));
};


/**
 * @param {?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReturnItems|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setReturnItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.clearReturnItem = function() {
  return this.setReturnItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.hasReturnItem = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Parts part = 7;
 * @return {?proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getPart = function() {
  return /** @type{?proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts} */ (
    jspb.Message.getWrapperField(this, proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts, 7));
};


/**
 * @param {?proto.proto.shop.orders.buyer.orderSku.submitReturn.Parts|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setPart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.clearPart = function() {
  return this.setPart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.hasPart = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ReplaceItems replace_item = 8;
 * @return {?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.getReplaceItem = function() {
  return /** @type{?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems} */ (
    jspb.Message.getWrapperField(this, proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems, 8));
};


/**
 * @param {?proto.proto.shop.orders.buyer.orderSku.submitReturn.ReplaceItems|undefined} value
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
*/
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.setReplaceItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg} returns this
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.clearReplaceItem = function() {
  return this.setReplaceItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.shop.orders.buyer.orderSku.submitReturn.Msg.prototype.hasReplaceItem = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.proto.shop.orders.buyer.orderSku.submitReturn);