import {getConnection} from "./../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";


const getObjetivos = async(req, res) =>{
    try {
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT SQL_NO_CACHE  * FROM objetivos"); 
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
        const connection = await getConnection(); 
        const result = await connection.query("SELECT * FROM objetivos"); 
        res.json({message: "TUPU"}); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const addobjetivos = async (req, res) =>{
    try {
        const [{idobjetivos, nombre, puntaje, descripcion, inicio, fin, id_trabajador}] = req.body;
        const objetivo = {idobjetivos, nombre, puntaje, descripcion, inicio, fin, id_trabajador}; 
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