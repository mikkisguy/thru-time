import { format } from "date-fns";
import {
  DATE_FORMAT,
  IS_DEV,
  IS_PRODUCTION,
  POSTGRES_CONNECTION_STRING,
} from "./constants";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
import pino from "pino";
import pinoHttp, { HttpLogger } from "pino-http";
import { Schema } from "joi";

export const handleLogging = () => {
  const loggerMiddleware: HttpLogger = pinoHttp({
    logger: pino(
      IS_DEV
        ? {
            transport: {
              target: "pino-pretty",
            },
          }
        : {}
    ),
    level: process.env.PINO_LOG_LEVEL || "info",
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: () => `,"timestamp":"${format(new Date(), DATE_FORMAT)}"`,
  });

  return {
    loggerMiddleware,
    logger: loggerMiddleware.logger,
  };
};

const { logger } = handleLogging();

export const handleRequestError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const errorLogMessage = `Request ${request.method} ${request.url} -> ${
    IS_PRODUCTION ? error.message : error.stack
  }`;

  let statusCode = 500;

  if (error instanceof SyntaxError) {
    statusCode = 400;
  } else if (response.statusCode) {
    statusCode = response.statusCode;
  }

  if (response.headersSent) {
    logger.error("Headers already sent");

    return next(error);
  }

  logger.error(errorLogMessage);

  response.status(statusCode);
  response.send({ errorMessage: error.message });
};

export const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
  logging: (...msg) => logger.info(`SEQUELIZE: ${msg}`),
});

export const handleValidation = (
  schema: Schema,
  req: Request,
  res: Response
) => {
  const validation = schema.validate(req.body);

  if (validation.error) {
    res.status(400);
    throw new Error(validation.error.details[0].message);
  }

  return null;
};
