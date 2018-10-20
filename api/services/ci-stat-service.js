const CIStatModel = require("../models/ci-stat-model.js");
const CIStatMapperService = require("./ci-stat-mapper-service.js");

/*
*
* */
class CIStatService {

  static getByCountries() {
    return new Promise((resolve, reject) => {
      CIStatModel.aggregate([
        {
          $group: {
            _id: "$viewer_user_city",
            total: { $sum: 1 }
          },
        },
      ]).exec().then((results) => {
        resolve(CIStatMapperService.map(results));
      }).catch(reject);
    });
  }
}

module.exports = CIStatService;
