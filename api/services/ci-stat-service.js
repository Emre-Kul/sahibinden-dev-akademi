const CIStatModel = require("../models/ci-stat-model.js");
const CIStatMapperService = require("./ci-stat-mapper-service.js");

/*
*
* */
class CIStatService {

  static get(limit = 100) { // deneme
    return new Promise((resolve, reject) => {
      CIStatModel.find().limit(limit).exec().then((results) => {
        resolve(CIStatMapperService.map(results));
      }).catch(reject);
    });
  }

  static getByGenders(){
    return CIStatService.getCleanCIStats("$viewer_gender", CIStatMapperService.mapByGender);
  }

  static getByCountries() {
    return CIStatService.getCleanCIStats("$viewer_user_city", CIStatMapperService.mapByCountry);
  }

  static getCleanCIStats(seperator, mapper) {
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
        resolve((mapper(results)));
      }).catch(reject);
    });
  }

}

module.exports = CIStatService;
