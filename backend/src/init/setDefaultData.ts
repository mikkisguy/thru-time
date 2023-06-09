import LanguageModel from "../models/Language";
import { GENERAL_SETTING_KEY, LANGUAGE } from "../shared/constants";
import { GeneralSettingModel } from "./initDatabase";

export const setDefaultData = async () => {
  await GeneralSettingModel.bulkCreate([
    { settingKey: GENERAL_SETTING_KEY.ALLOW_SIGNUPS, settingValue: false },
  ]);

  await LanguageModel.bulkCreate([
    { language: LANGUAGE.FI },
    { language: LANGUAGE.EN },
  ]);
};
