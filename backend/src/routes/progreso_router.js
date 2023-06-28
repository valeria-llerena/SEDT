import { Router, response } from "express";
import {methods as progreso_controller} from "../controllers/progreso_controller.js"

const router = Router(); 
router.get("/", progreso_controller.getProgresos);
router.post("/", progreso_controller.addProgreso);
router.get("/:id", progreso_controller.getProgreso);
router.get("/per/:id", progreso_controller.getProgresoPersona);
router.get("/obj/:id", progreso_controller.getProgresoObjetivo);
export default router; 