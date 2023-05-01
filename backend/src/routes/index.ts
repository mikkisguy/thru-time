import { Application } from "express";
import { BASE_PATH, PATH } from "../shared/constants";
import main from "./main";
import users from "./users";

const routeController = (app: Application) => {
  // Main
  app.get(BASE_PATH, main);

  // Users
  app.get(PATH.USERS, users);
  app.post(PATH.USERS, users);
};

export default routeController;
