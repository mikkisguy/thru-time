import { setDefaultSettings } from "./setDefaultSettings";
import { GeneralSettingModel, initDatabase } from "./initDatabase";
import { seedDatabase } from "./seedDatabase";

export const handleAppInitialization = async () => {
  await initDatabase();
  setDefaultSettings();
  seedDatabase();
};

export const fetchGeneralSetting = async (settingKey: string) => {
  const setting = await GeneralSettingModel.findOne({
    where: { settingKey },
    attributes: ["settingValue"],
  });

  return setting?.settingValue;
};
