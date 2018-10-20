const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cIStatScheme = new Schema({
  "id": Number,
  "adId": Number,
  "bidPriceKurus": Number,
  "dailyBudgetKurus": Number,
  "category": String,
  "eventType": String,
  "title": String,
  "description": String,
  "callToAction": String,
  "viewerUserId": Number,
  "viewerAddressCityName": String,
  "viewerEducation": String,
  "viewerJob": String,
  "viewerMaritalStatus": String,
  "viewerBirthdate": String,
  "viewerGender": String,
  "creationDate": Number
}, { collection: "CIStat", versionKey: false });

cIStatScheme.statics = {};
cIStatScheme.methods = {};
module.exports = mongoose.model("CIStat", cIStatScheme);
