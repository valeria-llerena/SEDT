import { Router, response } from "express";
import {methods as metrica_controller} from "../controllers/metrica_controller.js"

const router = Router(); 
router.get("/", metrica_controller.getmetricas);
router.post("/", metrica_controller.addmetricas);
router.get("/:id", metrica_controller.getmetrica);
export default router; 