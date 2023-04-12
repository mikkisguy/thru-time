import { UserModel } from "../models/user";
import { IS_DEV, IS_PREVIEW } from "./constants";
import { sequelize } from "./utils";

export const User = UserModel;

export const initDatabase = async () => {
  await sequelize.sync({ force: IS_DEV || IS_PREVIEW });
};
