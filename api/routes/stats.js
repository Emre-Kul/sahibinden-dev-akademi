const statRouter = require("express").Router();
const QueryMiddleware = require("../middlewares/query-middleware.js");
const StatsController = require("../controllers/stats-controller.js");

statRouter.get("/", QueryMiddleware.pagination, StatsController.get);
statRouter.get("/country", StatsController.getCountries);
statRouter.get("/gender", StatsController.getGenders);
statRouter.get("/martialStatus", StatsController.getMaritalStatus);

module.exports = statRouter;
