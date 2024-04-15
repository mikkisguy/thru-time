import LanguageModel from "../models/Language";
import { LANGUAGE } from "../shared/constants";

export const setDefaultData = async () => {
  // await GeneralSettingModel.bulkCreate([
  // TODO
  // ]);

  await LanguageModel.bulkCreate([
    { language: LANGUAGE.FI },
    { language: LANGUAGE.EN },
  ]);
};
