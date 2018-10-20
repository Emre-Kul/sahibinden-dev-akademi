const statRouter = require("express").Router();


statRouter.get("/", (req, res) => { res.send("Stats EndPoint"); });


module.exports = statRouter;
