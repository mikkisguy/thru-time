import express, { Response, Application } from "express";
import { LOG_STYLING, SERVER_PORT } from "./shared/constants";
import { logger } from "./shared/utils";

const app: Application = express();

const PORT = SERVER_PORT || 8000;

app.get("/", (_, res: Response): void => {
  res.send("Hello World!");
});

app.listen(PORT, (): void => {
  logger(
    `${LOG_STYLING.UNDERSCORE}*** THRU TIME BACKEND RUNNING ***${LOG_STYLING.RESET}`
  );
});
