import express, { Request, Response, Router, NextFunction } from "express";
import { LOGIN_PATH } from "../shared/constants";

const router: Router = express.Router();

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
