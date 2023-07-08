import { getConnection } from "./../database/database.js";
//const bcrypt = require('bcrypt');
import mysql from "mysql2/promise.js";
import bcrypt from "bcrypt/bcrypt.js";
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

const getResponsable = async (req, res) => {
  try {
    const { dni } = req.params;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("SELECT  * FROM persona WHERE dni = ?", dni);
    res.json(result[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const logPersona = async (req, res) => {
  try {
    const { dni, dni2 } = req.body;
    const connection = await getConnection();
    connection.query('SELECT * FROM persona WHERE dni = ?', [dni], (error, results) => {
      if (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
  
      if (results.length === 0) {
        // User does not exist
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const user = results[0];
      
      if(dni === dni2){
        return res.send(results); 
      }
      else{
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  });
  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
    
};

const addPersona = async (req, res) => {
  try {
    const { dni, nombre, apellido, correo, puesto, foto, supervisor } =
      req.body;
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
  logPersona,
  addPersona,
  getResponsable,
};
