import {getConnection} from "../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";


const getmetricas = async(req, res) =>{
    try {
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT   * FROM metrica"); 
        console.log(result);
        res.json(result); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const  getmetrica= async(req, res) =>{
    try {
        console.log(req.params);
        const {id} = req.params;  
        const idmetrica = id;
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT * FROM metrica WHERE idmetrica =?", idmetrica); 
        res.json({message: result}); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const  getmetricacuali= async(req, res) =>{
    try {
        console.log(req.params);
        const {id} = req.params;  
        const idmetrica = id;
        const connection = await getConnection(); 
        const result = await connection.promise().query("SELECT * FROM metrica WHERE idmetrica =?", idmetrica); 
        res.json({message: result}); 
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
    
};

const addmetricas = async (req, res) =>{
    try {
        const {idmetrica, tipo, nombre, medicion}= req.body;
        const metrica = {idmetrica, tipo, nombre, medicion}; 
        const connection = await getConnection();
        await connection.promise().query("INSERT INTO metrica SET ?", metrica);
        res.json({message: "Metrica Added"}); 
      
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
};

export const methods = {
    getmetricas,
    addmetricas,
    getmetricacuali,
    getmetrica
}; 