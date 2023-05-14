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

  bcrypt.hash(process.env.SEED_DATA_PASSWORD!, SALT_ROUNDS, (err, hash) => {
    if (err) {
      logger.error(err);
    }

    try {
      UserModel.create({
        uuid: uuidv4(),
        username: process.env.SEED_DATA_USER,
        passwordHash: hash,
        email: process.env.SEED_DATA_EMAIL,
      });
    } catch (error) {
      logger.error(error);
    }
  });
};
