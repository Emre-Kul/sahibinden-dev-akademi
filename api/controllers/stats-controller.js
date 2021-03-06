const CIStatService = require("../services/ci-stat-service.js");
const logger = require("../utils/logger.js");

class StatsController {
  static get(req, res) {
    StatsController.process(req, res, () => { return CIStatService.get(req.query.pagination); });
  }

  static getGenders(req, res) {
    StatsController.process(req, res, CIStatService.getByGenders);
  }

  static getCountries(req, res) {
    StatsController.process(req, res, CIStatService.getByCountries);
  }

  static getMaritalStatus(req, res) {
    StatsController.process(req, res, CIStatService.getByMaritalStatus);
  }

  static process(req, res, processFunction) {
    processFunction().then((results) => {
      res.send(results);
    }).catch((err) => {
      logger.error(err);
      res.status(500).send("SOME ERROR!");
    });
  }

}


module.exports = StatsController;
