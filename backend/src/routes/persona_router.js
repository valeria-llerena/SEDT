import { Router, response } from "express";
import {methods as persona_controller} from "../controllers/persona_controller.js"

const router = Router(); 
router.get("/", persona_controller.getPersonas);
router.post("/", persona_controller.addPersona);
router.post("/login", persona_controller.logPersona);
export default router; 