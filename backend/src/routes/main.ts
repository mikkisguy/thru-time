import { format } from "date-fns";
import express, { Response, Router, NextFunction } from "express";
import { IS_PREVIEW } from "../shared/constants";

const router: Router = express.Router();
const date = format(new Date(), "yyyy-MM-dd HH:mm:ss O");

router.get("/", (_, res: Response, next: NextFunction): void => {
  try {
    const responseJson = {
      message: `${IS_PREVIEW ? "Preview " : ""}API for Mikkis.fi`,
      updatedOn: date,
    };

    res.send(responseJson);
  } catch (error) {
    next(error);
  }
});

export default router;
