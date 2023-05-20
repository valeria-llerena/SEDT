import { Router, response } from "express";
import {methods as objetivos_controller} from "./../controllers/objetivos_controller.js"

const router = Router(); 
router.get("/", objetivos_controller.getObjetivos);
router.post("/", objetivos_controller.addobjetivos);
router.get("/:id", objetivos_controller.getObjetivos);
export default router; 