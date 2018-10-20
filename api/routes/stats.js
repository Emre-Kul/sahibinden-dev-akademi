const statRouter = require("express").Router();
const StatsController = require("../controllers/stats-controller.js");

statRouter.get("/", (req, res) => { res.send("Stats EndPoint"); });
statRouter.get("/country", StatsController.getCountries);
statRouter.get("/country?name", (req, res) => { res.send("Stats User Country Name"); });

module.exports = statRouter;
