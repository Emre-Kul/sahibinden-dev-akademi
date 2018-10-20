class CIStatMapperService {

  static map(cIStatResults, key) {
    return cIStatResults.map((cIStatResult) => {
      const mappedObj = {};
      mappedObj[key] = cIStatResult._id.val;
      mappedObj.event = cIStatResult._id.event;
      mappedObj.count = cIStatResult.total;

      return mappedObj;
    });
  }

}

module.exports = CIStatMapperService;
