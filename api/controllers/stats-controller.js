const NativeAdModel = require("../models/native-ad-model.js");
const logger = require("../utils/logger.js");

class StatsController {

  static getCountries(req, res) {
    NativeAdModel.getAll().then((results) => {
      res.send(results);
    }).catch((err) => {
      logger.error(err);
      res.status(500).send("SOME ERROR!");
    });

  }

}


module.exports = StatsController;
