import express, { Request, Response, Router, NextFunction } from "express";
import { UserModel } from "../models/user";
import { UserPostSchema } from "../schemas/user";
import { PATH, SALT_ROUNDS } from "../shared/constants";
import { handleLogging, handleValidation } from "../shared/utils";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const router: Router = express.Router();

const { logger } = handleLogging();

router.get(PATH.USERS, (_, res: Response, next: NextFunction): void => {
  try {
    const responseJson = {
      message: `users get route`,
    };

    res.send(responseJson);
  } catch (error) {
    next(error);
  }
});

router.post(
  PATH.USERS,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { isValid, validationError } = handleValidation(
        UserPostSchema,
        req
      );

      if (!isValid && validationError) {
        res.status(400).send(validationError);
        return;
      }

      const { username, password, email } = req.body;

      const userUuid = uuidv4();

      bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
        if (err) {
          logger.error(err);
          next(err);
        }

        try {
          const newUser = await UserModel.create({
            uuid: userUuid,
            username: username,
            passwordHash: hash,
            email: email,
          });

          res.send({ slug: newUser?.slug });
        } catch (error) {
          res.status(500);
          next(error);
        }
      });
    } catch (error) {
      res.status(500);
      next(error);
    }
  }
);

export default router;
