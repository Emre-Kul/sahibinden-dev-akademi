const statRouter = require("express").Router();

//click impression

statRouter.get("/", (req, res) => { res.send("Stats EndPoint"); });
statRouter.get("/country", (req, res) => { res.send("Stats By User Country"); });
statRouter.get("/country?name", (req, res) => { res.send("Stats User Country Name"); });

module.exports = statRouter;
