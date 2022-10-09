import { format } from "date-fns";
import { IS_PRODUCTION, LOG_STYLING } from "./constants";
import { Request, Response, NextFunction } from "express";

export const logger = (message: string, error = false) => {
  const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const type = error ? `${LOG_STYLING.RED}ERROR` : `${LOG_STYLING.CYAN}INFO`;

  return console.log(`${date} | ${type}${LOG_STYLING.RESET} | ${message}`);
};

export const requestErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errorLogMessage = `Request ${request.method} ${request.url} from ${
    request.ip
  } -> ${IS_PRODUCTION ? error.message : error.stack}`;
  const status = error.status || 500;

  if (response.headersSent) {
    logger("Headers already sent");
    return next(error);
  }

  logger(errorLogMessage, true);

  response.sendStatus(status);
};
