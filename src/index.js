import Koa from "koa";
import koaBody from "koa-body";
import cors from "koa2-cors";

import logger from "./logger";
import variables from "./variables";
import {
  log as logMiddleware,
  responseHandler,
  requestId,
} from "./middlewares";
import router from "./router";

require("dotenv").config();

const app = new Koa();

app.use(koaBody());
app.use(requestId());
app.use(logMiddleware({ logger }));
app.use(cors({ origin: "*" }));
app.use(responseHandler());

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(variables.appPort, () => {
  logger.info(
    `API server listening on port ${variables.appPort}, in ${variables.appEnv}`
  );
});

export default server;
