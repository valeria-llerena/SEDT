import express from "express"; 
import morgan from "morgan"; 

import objetivos_router from "../src/routes/objetivos_router.js"

const app = express(); 

//Settings 
app.set("port", 4000); 


//Middlewares 
app.use(morgan("dev"));
app.use(express.json());



//Routes 
app.use("/api/objetivos", objetivos_router);

export default app; 
