import {getConnection} from "./../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";


const getObjetivos = async(req, res) =>{
    try {
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT  * FROM objetivo"); 
        console.log(result);
        res.json(result); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const getObjetivo = async(req, res) =>{
    try {
        console.log(req.params);
        const {id} = req.params;  
        const idobjetivos = id;
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT * FROM objetivo WHERE idobjetivos =?", idobjetivos); 
        res.json({message: result}); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const addobjetivos = async (req, res) =>{
    try {
        const {idobjetivo, nombre, descripcion, porcentaje, persona, idmetrica, fechainicio, fecahfin, meta, aceptable} = req.body;
        const objetivo = {idobjetivo, nombre, descripcion, porcentaje, persona, idmetrica, fechainicio, fecahfin, meta, aceptable }; 
        const connection = await getConnection();
        await connection.promise().query("INSERT INTO objetivos SET ?", objetivo);
        res.json({message: "Objetivo Added"}); 
      
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
};

export const methods = {
    getObjetivos,
    addobjetivos,
    getObjetivo
}; 