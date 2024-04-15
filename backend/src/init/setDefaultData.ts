import LanguageModel from "../models/Language";
import { LANGUAGE } from "../shared/constants";

export const setDefaultData = async () => {
  const languagesToCreate = [
    { language: LANGUAGE.FI },
    { language: LANGUAGE.EN },
  ];

  // Use Promise.all with map to handle multiple records efficiently
  await Promise.all(
    languagesToCreate.map((language) =>
      LanguageModel.findOrCreate({ where: language })
    )
  );
};
