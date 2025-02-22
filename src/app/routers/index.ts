import { Router } from "express";
import { gymToolsRoutes } from "../modules/gymtools/gymtools.route";

const router = Router();

router.use("/gymtools", gymToolsRoutes);

export default router;
