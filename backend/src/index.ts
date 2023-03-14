import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import https from "https";
import * as fs from "fs";
import rateLimit from "express-rate-limit";

import { LOG_STYLING, EXPRESS_PORT, SSL, TIME, ENV } from "./shared/constants";
import { logger, requestErrorHandler } from "./shared/utils";

import routes from "./routes";
import bodyParser from "body-parser";

const app: Application = express();

const httpsServer = https.createServer(
  {
    cert: fs.readFileSync(SSL.CERT_PATH),
    key: fs.readFileSync(SSL.KEY_PATH),
  },
  app
);

// Middleware
app.use(helmet());

app.use(
  rateLimit({
    windowMs: TIME.MINUTE * 15,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(
  cors({
    origin:
      ENV !== undefined
        ? ["https://preview.mikkis.fi", "https://mikkis.fi"]
        : ["http://localhost:5173"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", routes.main);

app.use(requestErrorHandler);

// GO!
httpsServer.listen(EXPRESS_PORT, (): void => {
  logger(
    `${LOG_STYLING.UNDERSCORE}*** THRU TIME BACKEND RUNNING ON PORT ${EXPRESS_PORT} ***${LOG_STYLING.RESET}`
  );
});
