const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger.js");

const statRouter = require("./routes/stats.js");

class App {
  constructor() {
    this.app = express();
  }

  start(port) {


    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      next();
    });

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.setRoutes();

    this.app.listen(port, () => {
      logger.info("Server Started");
    });

  }

  setRoutes() {
    this.app.use("/stats", statRouter);
    this.app.get("*", (req, res) => {
      res.status(404).send("NO PAGE!");
    });

  }

}

module.exports = App;
