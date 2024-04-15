import { Application } from "express";
import {
  BASE_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  USER_PATH,
} from "../shared/constants";
import main from "./main";
import users from "./users";
import auth from "./auth";
import { getResponseMsg } from "../shared/utils";

const routeController = (app: Application) => {
  // Main
  app.get(BASE_PATH, main);

  // Users
  app.get(USER_PATH, users);

  // Auth
  app.post(SIGNUP_PATH, auth);
  app.post(LOGIN_PATH, auth);

  // 404
  app.get("*", (_, res) => {
    res.status(404).send(getResponseMsg("404 - Not found"));
  });
};

export default routeController;
