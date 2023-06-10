import {getConnection} from "../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";


const getprogresos = async(req, res) =>{
    try {
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT   * FROM progreso"); 
        console.log(result);
        res.json(result); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const getprogreso= async(req, res) =>{
    try {
        console.log(req.params);
        const {id} = req.params;  
        const idprogreso = id;
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT * FROM progreso WHERE idprogreso =?", idprogreso); 
        res.json({message: result}); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
    
};

const addprogreso = async (req, res) =>{
    try {
        const {idprogreso, fecha, porcentaje,idobjetivo, descripcion} = req.body;
        const progreso = {idprogreso, fecha, porcentaje,idobjetivo, descripcion}; 

        const connection = await getConnection();
        await connection.promise().query("INSERT INTO progreso SET ?", progreso);
        await connection.promise().query("call sumar(" + porcentaje+ "," + idobjetivo+")"); 
        res.json({message: "Progreso Added"}); 

      
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
};

export const methods = {
    getprogresos,
    addprogreso,
    getprogreso
}; 