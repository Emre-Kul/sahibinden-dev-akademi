const developmentConfig = require("./development.json");
const productionConfig = require("./production.json");

let config;

if (process.env.NODE_ENV === "production") {
  config = productionConfig;
} else {
  config = developmentConfig;
}

module.exports = config;
