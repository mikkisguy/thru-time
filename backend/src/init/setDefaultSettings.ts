import { GENERAL_SETTING_KEY } from "../shared/constants";
import { GeneralSettingModel } from "./initDatabase";

export const setDefaultSettings = async () => {
  await GeneralSettingModel.bulkCreate([
    { settingKey: GENERAL_SETTING_KEY.ALLOW_SIGNUPS, settingValue: false },
  ]);
};
