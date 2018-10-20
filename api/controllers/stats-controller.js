const logger = require("../utils/logger.js");
const CIStatService = require("../services/ci-stat-service.js");

class StatsController {

  static getCountries(req, res) {
    CIStatService.getByCountries().then((results) => {
      res.send(results);
    }).catch((err) => {
      console.log(err);
      logger.error(err);
      res.status(500).send("SOME ERROR!");
    });
  }

}


module.exports = StatsController;
