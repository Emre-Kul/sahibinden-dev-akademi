class CIStatMapperService {

  static mapByCountry(cIStatResults) {
    return cIStatResults.map((cIStatResult) => {
      return {
        city: cIStatResult._id.val,
        event: cIStatResult._id.event,
        count: cIStatResult.total,
      };
    });
  }

  static mapByGender(cIStatResults){
    return cIStatResults.map((cIStatResult) => {
      return {
        gender: cIStatResult._id.val,
        event: cIStatResult._id.event,
        count: cIStatResult.total,
      };
    });
  }
}

module.exports = CIStatMapperService;
