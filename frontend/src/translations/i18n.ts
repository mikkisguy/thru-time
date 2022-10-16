import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./en";
import finnish from "./fi";
import { IS_DEVELOPMENT } from "../shared/constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: IS_DEVELOPMENT,
    fallbackLng: "fi-FI",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "fi-FI": {
        translation: finnish,
      },
      en: {
        translation: english,
      },
    },
  });

export default i18n;
