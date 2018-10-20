const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger.js");

class App {

  static start(port){
    const app = express();

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      next();
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(port, () => {
      logger.info("Server Started");
    });

  }

}

module.exports = App;
