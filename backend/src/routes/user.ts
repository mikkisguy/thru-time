import express, { Response, Router, NextFunction } from "express";

const router: Router = express.Router();

router.get("/user", (_, res: Response, next: NextFunction): void => {
  try {
    const responseJson = {
      message: `user route`,
    };

    res.send(responseJson);
  } catch (error) {
    next(error);
  }
});

export default router;
