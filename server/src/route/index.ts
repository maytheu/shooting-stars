import { Router } from "express";
import homeRouter from "./home.route";

const router = Router();

router.use("/home", homeRouter);

export default router;
