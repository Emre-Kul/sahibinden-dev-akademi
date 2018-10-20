const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statSchema = new Schema({
  "id": Number,
  "adId": Number,
  "userId": Number,
  "eventType": String, // enum[IMP,CLICK]
  "category": String,
  "eventDate": Number, // yada unix date
}, { collection: "Stat", versionKey: false });

statSchema.statics = {};
statSchema.methods = {};
module.exports = mongoose.model("Stat", statSchema);
