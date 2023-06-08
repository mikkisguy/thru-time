import { LanguageModel } from "../models/language";
import { GENERAL_SETTING_KEY } from "../shared/constants";
import { GeneralSettingModel } from "./initDatabase";

export const setDefaultData = async () => {
  await GeneralSettingModel.bulkCreate([
    { settingKey: GENERAL_SETTING_KEY.ALLOW_SIGNUPS, settingValue: false },
  ]);

  await LanguageModel.bulkCreate([{ language: "fi" }, { language: "en" }]);
};
