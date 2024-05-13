import express, { Application, NextFunction, Request, Response } from "express";
// import cors from "cors";

import AppError from "./config/AppError";
import globalErrorHandler from "./controller/errorHandler";
import router from "./route";

class App {
  app!: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.route();
    this.errorHandler();
  }

  private middleware() {
    // this.app.use(cors());
    this.app.use(express.json({}));
  }

  private route() {
    this.app.get("/", (req: Request, res: Response) => res.redirect("/api/v1"));
    this.app.use("/api/v1", router);
    this.app.use((req: Request, res: Response, next:NextFunction) => {
      next(
        new AppError(`Ooops.. ${req.originalUrl} not found on this server`, 404)
      );
    });
  }

  private errorHandler() {
    this.app.use(globalErrorHandler);
  }
}

export default new App();
