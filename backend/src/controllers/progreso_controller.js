import { getConnection } from "../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";

const getProgresos = async (req, res) => {
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

const getProgresoPersona = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const idPersona = id;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("SELECT * FROM progreso WHERE idPersona = ?", idPersona);
    res.json({ message: result });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getProgresoObjetivo = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("SELECT * FROM progreso WHERE idObjetivo = ?", id);
    res.json({ message: result });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getProgreso = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const idProgreso = id;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("SELECT * FROM progreso WHERE idProgreso =?", idProgreso);
    res.json({ message: result });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addProgreso = async (req, res) => {
  try {
    console.log("reqbody", req.body);
    const connection = await getConnection();
    await connection.promise().query("INSERT INTO progreso SET ?", req.body);
    res.json({ message: "Progreso Agregado", response: true });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateStatus = async (req, res) => {
  try {
    const { idProgreso, status } = req.body;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("UPDATE progreso  SET status = ? WHERE idProgreso =  ?", [
        status,
        idProgreso,
      ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updatePorc = async (req, res) => {
  try {
    const { idProgreso, porcentaje } = req.body;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("UPDATE progreso  SET porcentaje = ? WHERE idProgreso =  ?", [
        porcentaje,
        idProgreso,
      ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getProgresos,
  addProgreso,
  getProgreso,
  getProgresoObjetivo,
  getProgresoPersona,
  updateStatus,
  updatePorc,
};
