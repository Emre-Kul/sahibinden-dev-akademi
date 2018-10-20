const CIStatModel = require("../models/ci-stat-model.js");
const CIStatMapperService = require("./ci-stat-mapper-service.js");

/*
*
* */
class CIStatService {

  static get(pagination) {
    return new Promise((resolve, reject) => {
      CIStatModel.find().limit(pagination.limit || 100).exec().then((results) => {
        resolve(CIStatMapperService.map(results));
      }).catch(reject);
    });
  }

  static getByGenders() {
    return CIStatService.getCleanCIStats("$viewer_gender", "gender");
  }

  static getByCountries() {
    return CIStatService.getCleanCIStats("$viewer_user_city", "city");
  }

  static getByMaritalStatus() {
    return CIStatService.getCleanCIStats("$viewer_marital_status", "marital_status");
  }

  static getCleanCIStats(seperator, mapKey) {
    return new Promise((resolve, reject) => {
      CIStatModel.aggregate([
        {
          $group: {
            _id: {
              val: seperator,
              event: "$event_type",
            },
            total: { $sum: 1 },
          },
        },
      ]).exec().then((results) => {
        resolve((CIStatMapperService.map(results, mapKey)));
      }).catch(reject);
    });
  }

}

module.exports = CIStatService;
