const statRouter = require("express").Router();
const StatsController = require("../controllers/stats-controller.js");

statRouter.get("/",  StatsController.get);
statRouter.get("/country", StatsController.getCountries);
statRouter.get("/gender", StatsController.getGenders);

module.exports = statRouter;
