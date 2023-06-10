import express from "express";
import morgan from "morgan";
//import cors from "cors";

import objetivos_router from "../src/routes/objetivos_router.js"
import metrica_router from "../src/routes/metrica_router.js"
import progreso_router from "../src/routes/progreso_router.js"

const app = express();

//Settings 
app.set("port", 4000);


//Middlewares 
//app.use(cors({
//    origin: '*'
//}));
app.use(morgan("dev"));
app.use(express.json());



//Routes 
app.use("/api/objetivos", objetivos_router);
app.use("/api/metrica", metrica_router);
app.use("/api/progreso", progreso_router);

export default app; 
