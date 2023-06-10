import { Router, response } from "express";
import {methods as progreso_controller} from "../controllers/progreso_controller.js"

const router = Router(); 
router.get("/", progreso_controller.getprogresos);
router.post("/", progreso_controller.addprogreso);
router.get("/:id", progreso_controller.getprogreso);
export default router; 