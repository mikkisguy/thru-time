import { format } from "date-fns";
import { DATE_FORMAT, IS_DEV, POSTGRES_CONNECTION_STRING } from "./constants";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
import pino from "pino";
import pinoHttp from "pino-http";
import { Schema } from "joi";

export const handleLogging = () => {
  return pinoHttp({
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
};

const { logger } = handleLogging();

export const handleRequestError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const errorLogMessage = `Request ${request.method} ${request.url} -> ${
    error.name + "\n" + error.stack
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

  const getErrorResponse = () => {
    if (IS_DEV) {
      if (error === Object(error)) {
        return error;
      }

      return { message: error };
    }

    return { message: error.name ? error.name : "Error" };
  };

  response.status(statusCode).send(getErrorResponse());
};

export const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
  logging: (...msg) => logger.info(`SEQUELIZE: ${msg}`),
});

export const handleValidation = (schema: Schema, req: Request) => {
  let validationError = null;

  const validation = schema.validate(req.body);

  if (validation.error) {
    validationError = { message: validation.error.details[0].message };
  }

  return validationError;
};
