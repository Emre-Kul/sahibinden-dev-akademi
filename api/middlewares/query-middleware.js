class QueryMiddleware {

  static pagination(req, res, next) {
    req.query.pagination = {};
    if (req.query.limit) {
      req.query.pagination.limit = req.query.limit;
    }
    if (req.query.offset) {
      req.query.pagination.offset = req.query.offset;
    }
    next();
  }

}

module.exports = QueryMiddleware;
