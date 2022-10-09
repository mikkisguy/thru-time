import express, { Response, Application } from "express";
import helmet from "helmet";
import { LOG_STYLING, MINUTE, SERVER_PORT } from "./shared/constants";
import { logger } from "./shared/utils";
import cors from "cors";
import SlowDown from "express-slow-down";

const app: Application = express();

app.use(helmet());

const speedLimiter = SlowDown({
  windowMs: MINUTE * 15,
  delayAfter: 100,
  delayMs: 500,
});

app.use(speedLimiter);

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (_, res: Response): void => {
  res.send({ message: "Hello World!" });
});

app.listen(SERVER_PORT, (): void => {
  logger(
    `${LOG_STYLING.UNDERSCORE}*** THRU TIME BACKEND RUNNING ***${LOG_STYLING.RESET}`
  );
});
