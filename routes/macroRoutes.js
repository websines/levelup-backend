import { Router } from "express";
import { macros } from "../controllers/macroController.js";

const router = Router();

router.post("/macros", macros);

export default router;
