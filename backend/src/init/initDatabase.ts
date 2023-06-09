import BlogCategoryModel from "../models/BlogCategory";
import BlogPostModel from "../models/BlogPost";
import BlogTagModel from "../models/BlogTag";
import GeneralSettingModel from "../models/GeneralSetting";
import LanguageModel from "../models/Language";
import UserModel from "../models/User";
import { IS_DEV, IS_PREVIEW } from "../shared/constants";
import { logger, sequelize } from "../shared/utils";

export {
  GeneralSettingModel,
  LanguageModel,
  UserModel,
  BlogCategoryModel,
  BlogTagModel,
  BlogPostModel,
};

export const initDatabase = async () => {
  try {
    await sequelize
      .sync({ force: IS_DEV || IS_PREVIEW })
      .then(() => logger.info("Models synchronized successfully"));
  } catch (error) {
    logger.error("Error synchronizing models:", error);
  }
};
