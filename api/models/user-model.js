const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  "id": Number,
  "cityName": String,
  "education": String,
  "job": String,
  "martialStatus": String,
  "age": Number,
  "gender": String // enum E,K
}, { collection: "User", versionKey: false });

userSchema.statics = {};
userSchema.methods = {};
module.exports = mongoose.model("User", userSchema);
