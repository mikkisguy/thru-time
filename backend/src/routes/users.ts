import express, { Request, Response, Router, NextFunction } from "express";
import { UserPostSchema } from "../schemas/user";
import { PATH } from "../shared/constants";
import { handleValidation } from "../shared/utils";

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
      handleValidation(UserPostSchema, req, res);

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
