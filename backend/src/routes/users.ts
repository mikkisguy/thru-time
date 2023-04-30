import express, { Request, Response, Router, NextFunction } from "express";
import { UserPostSchema } from "../schemas/user";
import { PATH } from "../shared/constants";

const router: Router = express.Router();

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
      const validation = UserPostSchema.validate(req.body);

      if (validation.error) {
        throw new Error(validation.error.details[0].message);
      }

      const responseJson = {
        message: `users post route`,
      };

      res.send(responseJson);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
