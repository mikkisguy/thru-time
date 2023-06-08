import { GeneralSettingModel } from "../models/generalSetting";
import { LanguageModel } from "../models/language";
import { UserModel } from "../models/user";
import { IS_DEV, IS_PREVIEW } from "../shared/constants";
import { sequelize } from "../shared/utils";

export { GeneralSettingModel, LanguageModel, UserModel };

export const initDatabase = async () => {
  // Relationships
  // TODO

  // Sync
  await sequelize.sync({ force: IS_DEV || IS_PREVIEW });
};
