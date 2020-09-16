require("dotenv").config();

const appHost = process.env.HOST || "localhost";
const appEnv = process.env.APP_ENV;
const appPort = process.env.APP_PORT;
const logLevel = process.env.LOG_LEVEL || "debug";
const loggerName = process.env.LOGGER_NAME;

export default {
  appEnv,
  appHost,
  appPort,
  logLevel,
  loggerName
};
