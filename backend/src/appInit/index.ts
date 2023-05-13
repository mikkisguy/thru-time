import { setDefaultSettings } from "./setDefaultSettings";
import { initDatabase } from "./initDatabase";

export const appInitializationHandler = async () => {
  await initDatabase();
  setDefaultSettings();
};
