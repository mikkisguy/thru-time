import { PathOrFileDescriptor } from "fs";

export const ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = ENV === "production";
export const IS_PREVIEW = ENV === "preview";

export const EXPRESS_PORT = process.env.EXPRESS_PORT;

export const TIME = {
  MINUTE: 60000,
  SECOND: 1000,
};

export const DB = {
  NAME: process.env.POSTGRES_DB,
  USER: process.env.POSTGRES_USER,
  PASSWORD: process.env.POSTGRES_PASSWORD,
};

export const SSL: {
  CERT_PATH: PathOrFileDescriptor;
  KEY_PATH: PathOrFileDescriptor;
} = {
  CERT_PATH: process.env.SSL_CERT_PATH as PathOrFileDescriptor,
  KEY_PATH: process.env.SSL_KEY_PATH as PathOrFileDescriptor,
};

export const JWT = {
  SECRET: process.env.JWT_SECRET,
  ALGORITHM: "HS256",
};

export const LOG_STYLING = {
  RESET: "\x1b[0m",
  UNDERSCORE: "\x1b[4m",
  RED: "\x1b[31m",
  CYAN: "\x1b[36m",
};
