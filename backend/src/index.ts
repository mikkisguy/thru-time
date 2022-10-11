import express, { Response, Application, NextFunction } from "express";
import helmet from "helmet";
import { LOG_STYLING, EXPRESS_PORT, SSL, TIME, ENV } from "./shared/constants";
import { logger, requestErrorHandler } from "./shared/utils";
import cors from "cors";
import SlowDown from "express-slow-down";
import https from "https";
import * as fs from "fs";
import main from "./routes/main";

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
    origin:
      ENV !== undefined
        ? ["https://preview.mikkis.fi", "https://new.mikkis.fi"]
        : ["http://localhost:5173"],
  })
);

app.get("/", main);

app.use(requestErrorHandler);

httpsServer.listen(EXPRESS_PORT, (): void => {
  logger(
    `${LOG_STYLING.UNDERSCORE}*** THRU TIME BACKEND RUNNING ON PORT ${EXPRESS_PORT} ***${LOG_STYLING.RESET}`
  );
});
