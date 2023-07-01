import { Router, response } from "express";
import { methods as progreso_controller } from "../controllers/progreso_controller.js";

const router = Router();
router.get("/", progreso_controller.getProgresos);
router.post("/", progreso_controller.addProgreso);
router.get("/:id", progreso_controller.getProgresoObjetivo);
router.put("/status", progreso_controller.updateStatus);
router.post("/porc", progreso_controller.updatePorc);
export default router;
