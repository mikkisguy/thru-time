import { IS_DEV, SALT_ROUNDS } from "../shared/constants";
import { logger } from "../shared/utils";
import { UserModel } from "./initDatabase";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const seedDatabase = () => {
  // Only in local dev for now
  if (!IS_DEV) {
    return;
  }

  const ENV = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    USER_PASSWORD: process.env.SEED_DATA_PASSWORD!,
    USER_NAME: process.env.SEED_DATA_USER,
    USER_EMAIL: process.env.SEED_DATA_EMAIL,
  };

  bcrypt.hash(ENV.USER_PASSWORD, SALT_ROUNDS, (err, hash) => {
    if (err) {
      logger.error(err);
    }

    try {
      UserModel.create({
        uuid: uuidv4(),
        username: ENV.USER_NAME,
        passwordHash: hash,
        email: ENV.USER_EMAIL,
      });
    } catch (error) {
      logger.error(error);
    }
  });
};
