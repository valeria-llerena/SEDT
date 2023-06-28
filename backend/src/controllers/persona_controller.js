import { getConnection } from "./../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";

const getPersonas = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.promise().query("SELECT  * FROM persona");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPersona = async (req, res) => {
  try {
    const { id, contra } = req.params;
    const idPersona = id;
    const contraseña = contra; 
    if(id == contra){
      const connection = await getConnection();
      const result = await connection
        .promise()
        .query("SELECT * FROM persona WHERE dni =?", idPersona);
      res.json({ message: result });
   }
    else{
      res.json({ message: "ID O CONTRASEÑA INCORRECTA" });
    }
  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
    
};

const addPersona = async (req, res) => {
  try {
    const {
      dni, nombre, apellido, correo, puesto, foto, supervisor
    } = req.body;
    const connection = await getConnection();
    console.log("objetivo", objetivo);
    await connection.promise().query("INSERT INTO persona SET ?", req.body);
    res.json({ message: "Objetivo Agregado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPersonas,
  getPersona,
  addPersona,
};
