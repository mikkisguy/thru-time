import { format } from "date-fns";
import { LOG_STYLING } from "./constants";

export const logger = (message: string, error = false) => {
  const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const type = error ? `${LOG_STYLING.RED}ERROR` : `${LOG_STYLING.CYAN}INFO`;

  return console.log(`${date} | ${type}${LOG_STYLING.RESET} | ${message}`);
};
