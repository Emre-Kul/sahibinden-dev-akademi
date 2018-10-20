const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nativeAdSchema = new Schema({
  "id": Number,
  "title": String,
  "description": String,
  "callToAction": String,
  "bidPriceKurus": Number,
  "dailyBudgetKurus": Number,
}, { collection: "NativeAd", versionKey: false });

nativeAdSchema.statics = {
  getAll() {
    return this.find({}).exec();
  },
  getByVirtualId(id) {
    return this.find({ id }).exec();
  },
};
nativeAdSchema.methods = {};

module.exports = mongoose.model("NativeAd", nativeAdSchema);
