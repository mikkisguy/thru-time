import { format } from "date-fns";
import {
  DATE_FORMAT,
  IS_PRODUCTION,
  LOG_STYLING,
  POSTGRES_CONNECTION_STRING,
} from "./constants";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";

export const logger = (message: string, error = false) => {
  const date = format(new Date(), DATE_FORMAT);
  const type = error ? `${LOG_STYLING.RED}ERROR` : `${LOG_STYLING.CYAN}INFO`;
  const logLine = `${date} | ${type}${LOG_STYLING.RESET} | ${message}`;

  return error ? console.error(logLine) : console.info(logLine);
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

export const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
  logging: (...msg) => logger(`SEQUELIZE: ${msg}`),
});

export const initDatabase = async () => {
  // Relationships
  // TODO

  await sequelize.sync();
};
