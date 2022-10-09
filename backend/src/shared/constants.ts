import { PathOrFileDescriptor } from "fs";

export const ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = ENV === "production";
export const SERVER_PORT = process.env.SERVER_PORT;
export const DEV_PORT = process.env.DEV_PORT;

export const MINUTE = 60000;
export const SECOND = 1000;

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

export const DB = {
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
};

export const LOG_STYLING = {
  RESET: "\x1b[0m",
  UNDERSCORE: "\x1b[4m",
  RED: "\x1b[31m",
  CYAN: "\x1b[36m",
};
