import express, { Response, Router, NextFunction } from "express";
import { USER_PATH } from "../shared/constants";

const router: Router = express.Router();

router.get(USER_PATH, (_, res: Response, next: NextFunction): void => {
  try {
    const responseJson = {
      message: `users get route`,
    };

    res.send(responseJson);
  } catch (error) {
    next(error);
  }
});

export default router;
