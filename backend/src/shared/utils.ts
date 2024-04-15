import { format } from "date-fns";
import { DATE_FORMAT, IS_DEV, POSTGRES_CONNECTION_STRING } from "./constants";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
import pino from "pino";
import pinoHttp from "pino-http";
import { Schema } from "joi";
import slugify from "slugify";
import https from "https";

export const getSlug = (stringToSlugify: string) =>
  slugify(stringToSlugify, { lower: true, strict: true });

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

export const { logger } = handleLogging();

export const getResponseMsg = (message: string | Error) => {
  return {
    message,
  };
};

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

      return getResponseMsg(error);
    }

    return getResponseMsg(error.name ? error.name : "Error");
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
    validationError = getResponseMsg(validation.error.details[0].message);
  }

  return validationError;
};

/**
 * Gracefully shuts down the server and closes the database connection.
 *
 * @param {https.Server} server - The server to shut down.
 * @return {Promise<void>} - A Promise that resolves when the server is closed.
 */
export const gracefulShutdown = async (server: https.Server): Promise<void> => {
  logger.info("Received kill signal, shutting down gracefully...");

  await sequelize
    .close()
    .then(() => logger.info("Database connection closed."));

  server.close(() => {
    logger.info("Server closed.");
    process.exit(0);
  });
};
