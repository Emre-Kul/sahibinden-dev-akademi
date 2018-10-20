const CIStatModel = require("../models/ci-stat-model.js");
const CIStatMapperService = require("./ci-stat-mapper-service.js");


class CIStatService {

  static getByCountries() {
    return new Promise((resolve, reject) => {
      CIStatModel.find({ id: 81 }).then((ads) => {
        resolve(CIStatMapperService.map(ads));
      }).catch(reject);
    });
  }
}

module.exports = CIStatService;
