class QueryMiddleware {

  static pagination(req, res, next) {
    req.query.pagination = {};
    if (req.query.limit) {
      req.query.pagination.limit = parseInt(req.query.limit, 10);
    }
    if (req.query.offset) {
      req.query.pagination.offset = parseInt(req.query.offset, 10);// kullanılmıyor
    }
    next();
  }

}

module.exports = QueryMiddleware;
