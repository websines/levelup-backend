import { Router } from "express";
import {
  averageScore,
  getAverageScore,
} from "../controllers/scoringController.js";

const router = Router();

router.post("/score", averageScore);

router.get("/score/:id", getAverageScore);

export default router;
