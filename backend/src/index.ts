import express, { Response, Application, NextFunction } from "express";
import helmet from "helmet";
import { LOG_STYLING, EXPRESS_PORT, SSL, TIME } from "./shared/constants";
import { logger, requestErrorHandler } from "./shared/utils";
import cors from "cors";
import SlowDown from "express-slow-down";
import https from "https";
import * as fs from "fs";

const app: Application = express();

const httpsServer = https.createServer(
  {
    cert: fs.readFileSync(SSL.CERT_PATH),
    key: fs.readFileSync(SSL.KEY_PATH),
  },
  app
);

app.use(helmet());

const speedLimiter = SlowDown({
  windowMs: TIME.MINUTE * 15,
  delayAfter: 100,
  delayMs: 500,
});

app.use(speedLimiter);

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (_, res: Response, next: NextFunction): void => {
  try {
    res.send({ message: "Hello World!" });
  } catch (error) {
    next(error);
  }
});

app.use(requestErrorHandler);

httpsServer.listen(EXPRESS_PORT, (): void => {
  logger(
    `${LOG_STYLING.UNDERSCORE}*** THRU TIME BACKEND RUNNING ON PORT ${EXPRESS_PORT} ***${LOG_STYLING.RESET}`
  );
});
