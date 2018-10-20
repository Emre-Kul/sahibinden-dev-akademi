const statRouter = require("express").Router();


statRouter.get("/", (res, req) => { res.send("OK"); });


module.exports = statRouter;
