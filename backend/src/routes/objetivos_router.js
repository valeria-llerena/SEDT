import { Router, response } from "express";
import {methods as objetivos_controller} from "./../controllers/objetivos_controller.js"

const router = Router(); 
router.get("/", objetivos_controller.getObjetivos);
router.post("/", objetivos_controller.addObjetivos);
router.get("/:id", objetivos_controller.getObjetivo);
export default router; 