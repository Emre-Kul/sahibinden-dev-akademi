const winston = require("winston");

const ignorePrivate = winston.format((info) => {
  if (info.private) { return false; }
  return info;
});

const logger = winston.createLogger({
  format: winston.format.combine(ignorePrivate(),
    winston.format.json(),
    winston.format.colorize()),
  transports: [new winston.transports.Console()],
});

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green"
});


module.exports = logger;
