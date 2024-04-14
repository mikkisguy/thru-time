import express, { Request, Response, Router, NextFunction } from "express";
import UserModel from "../models/User";
import { UserPostSchema } from "../schemas/User";
import {
  GENERAL_SETTING_KEY,
  LOGIN_PATH,
  SALT_ROUNDS,
  SIGNUP_PATH,
} from "../shared/constants";
import {
  getResponseMsg,
  handleLogging,
  handleValidation,
} from "../shared/utils";
import bcrypt from "bcrypt";
import { fetchGeneralSetting } from "../init";

const router: Router = express.Router();

const { logger } = handleLogging();

router.post(
  SIGNUP_PATH,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Is sign ups allowed?
      const isSignUpsAllowed = await fetchGeneralSetting(
        GENERAL_SETTING_KEY.ALLOW_SIGNUPS
      );

      if (!isSignUpsAllowed) {
        res.status(400).send(getResponseMsg("Sign ups are closed"));
        return;
      }

      // Is the request valid?
      const validationError = handleValidation(UserPostSchema, req);

      if (validationError) {
        res.status(400).send(validationError);
        return;
      }

      // Create new user
      const { username, password, email } = req.body;

      bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
        if (err) {
          logger.error(err);
          next(err);
        }

        try {
          const newUser = await UserModel.create({
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

router.post(
  LOGIN_PATH,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO
    } catch (error) {
      res.status(500);
      next(error);
    }
  }
);

export default router;
