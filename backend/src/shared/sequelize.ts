import { UserModel } from "../models/user";
import { IS_DEV, IS_PREVIEW } from "./constants";
import { sequelize } from "./utils";

export { UserModel };

export const initDatabase = async () => {
  // Relationships
  // TODO

  // Sync
  await sequelize.sync({ force: IS_DEV || IS_PREVIEW });
};
