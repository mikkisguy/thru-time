import { setDefaultSettings } from "./setDefaultSettings";
import { initDatabase } from "./initDatabase";

export const handleAppInitialization = async () => {
  await initDatabase();
  setDefaultSettings();
};
