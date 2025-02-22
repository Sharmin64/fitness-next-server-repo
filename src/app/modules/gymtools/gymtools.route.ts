import { Router } from "express";
import {
  createToolIntoDB,
  getAllGymToolsFromDB,
  getGymToolByIdFromDB,
} from "./gymtools.controller";

const router = Router();

router.post("/", createToolIntoDB);
router.get("/", getAllGymToolsFromDB);
router.get("/:id", getGymToolByIdFromDB);

export const gymToolsRoutes = router;
