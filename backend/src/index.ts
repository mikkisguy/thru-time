import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import https from "https";
import * as fs from "fs";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";

import { EXPRESS_PORT, SSL, TIME, ENV, IS_DEV } from "./shared/constants";
import { initDatabase } from "./shared/sequelize";
import routeController from "./routes";
import { handleLogging, handleRequestError } from "./shared/utils";

const app: Application = express();

const httpsServer = https.createServer(
  {
    cert: fs.readFileSync(SSL.CERT_PATH),
    key: fs.readFileSync(SSL.KEY_PATH),
  },
  app
);

const { loggerMiddleware, logger } = handleLogging();

// Middleware
app.use(loggerMiddleware);

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
httpsServer.listen(EXPRESS_PORT, (): void => {
  logger.info(
    `*** THRU TIME ${ENV?.toUpperCase()} BACKEND RUNNING ON PORT ${EXPRESS_PORT} ***`
  );

  try {
    initDatabase();
  } catch (error) {
    logger.error(error);
  }
});
