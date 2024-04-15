import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import https from "https";
import * as fs from "fs";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";

import { EXPRESS_PORT, SSL, TIME, ENV, IS_DEV } from "./shared/constants";
import routeController from "./routes";
import {
  gracefulShutdown,
  handleLogging,
  handleRequestError,
  logger,
} from "./shared/utils";
import { handleAppInitialization } from "./init";

const app: Application = express();

// Middleware
app.use(handleLogging());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());

app.use(
  rateLimit({
    windowMs: TIME.MINUTE * 15,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(
  cors({
    origin: !IS_DEV
      ? ["https://preview.mikkis.fi", "https://mikkis.fi"]
      : ["http://localhost:5173"],
  })
);

// Route controller
routeController(app);

// Error handler
app.use(handleRequestError);

// GO!
const server = https
  .createServer(
    {
      cert: fs.readFileSync(SSL.CERT_PATH),
      key: fs.readFileSync(SSL.KEY_PATH),
    },
    app
  )
  .listen(EXPRESS_PORT, (): void => {
    logger.info(
      `*** THRU TIME ${ENV?.toUpperCase()} BACKEND RUNNING ON PORT ${EXPRESS_PORT} ***`
    );

    try {
      handleAppInitialization();
    } catch (error) {
      logger.error(error);
    }
  });

// Gracefully shutdown the server
process.on("SIGINT", () => gracefulShutdown(server));
process.on("SIGTERM", () => gracefulShutdown(server));
