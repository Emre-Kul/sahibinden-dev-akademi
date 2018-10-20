const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cIStatScheme = new Schema({
  "id": Number,
  "viewer_user_id": Number,
  "viewer_education": String,
  "viewer_job": String,
  "viewer_marital_status": String,
  "viewer_birt_year": String,
  "viewer_gender": String,
  "ad_id": Number,
  "ad_title": String,
  "ad_call_to_action": String,
  "ad_description": String,
  "ad_bid_price_kurus": String,
  "ad_daily_budget_kurus": String,
  "event_type": String,
  "event_date": String,
  "event_category": String,
  "viewer_user_city": String
}, { collection: "CIStat", versionKey: false });

cIStatScheme.statics = {};
cIStatScheme.methods = {};
module.exports = mongoose.model("CIStat", cIStatScheme);
