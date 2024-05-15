import { Router } from "express";
import HomeController from "../controller/Home.controller";

const homeRouter = Router();

homeRouter.get("/", HomeController.home);
homeRouter.post("/annoucement", HomeController.announcement);
homeRouter.put("/annoucement/:id", HomeController.announcement);
homeRouter.post("/category", HomeController.category);
homeRouter.put("/category/:id", HomeController.category);
homeRouter.post("/main", HomeController.mainCategory);
homeRouter.put("/main/:id", HomeController.mainCategory);
homeRouter.post("/shop", HomeController.shop);
homeRouter.put("/shop/:id", HomeController.shop);

export default homeRouter;
