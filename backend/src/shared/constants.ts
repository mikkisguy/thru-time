import { PathOrFileDescriptor } from "fs";

export const ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = ENV === "production";
export const IS_PREVIEW = ENV === "preview";
export const IS_DEV = ENV === "dev";

export const EXPRESS_PORT = process.env.EXPRESS_PORT;

export const TIME = {
  MINUTE: 60000,
  SECOND: 1000,
};

export const POSTGRES_CONNECTION_STRING =
  "postgres://" +
  `${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}` +
  `@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}` +
  `/${process.env.POSTGRES_DB}`;

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

export const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss.SSS";

export const BASE_PATH = "/";
export const USER_PATH = BASE_PATH + "users";
export const LOGIN_PATH = BASE_PATH + "login";
export const SIGNUP_PATH = BASE_PATH + "signup";

export const SALT_ROUNDS = 12;

// export const GENERAL_SETTING_KEY = {
//   // TODO
// };

export const BLOG_POST_STATUS = {
  DRAFT: "DRAFT",
  PRIVATE: "PRIVATE",
  PUBLISHED: "PUBLISHED",
  PROTECTED: "PROTECTED",
};

export const LANGUAGE = {
  FI: "FI",
  EN: "EN",
};
