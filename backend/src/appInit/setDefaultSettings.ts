import { GENERAL_SETTING } from "../shared/constants";
import { GeneralSettingModel } from "./initDatabase";

export const setDefaultSettings = async () => {
  await GeneralSettingModel.bulkCreate([
    { settingKey: GENERAL_SETTING.ALLOW_SIGNUPS, settingValue: false },
  ]);
};
