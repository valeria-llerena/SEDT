import { getConnection } from "./../database/database.js";

import mysql from "mysql2/promise.js";
import config from "../config.js";

const getObjetivos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.promise().query("SELECT  * FROM objetivo");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getObjetivo = async (req, res) => {
  try {
    const { id } = req.params;
    const idobjetivos = id;
    const connection = await getConnection();
    const result = await connection
      .promise()
      .query("SELECT * FROM objetivo WHERE idobjetivos =?", idobjetivos);
    res.json({ message: result });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addobjetivos = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      porcentaje,
      persona,
      id_metrica,
      fechainicio,
      fechafin,
      meta,
      aceptable,
    } = req.body;
    const objetivo = {
      nombre,
      descripcion,
      porcentaje,
      persona,
      id_metrica,
      fechainicio,
      fechafin,
      meta,
      aceptable,
    };
    const connection = await getConnection();
    console.log("objetivo", objetivo);
    await connection.promise().query("INSERT INTO objetivos SET ?", objetivo);
    res.json({ message: "Objetivo Added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getObjetivos,
  addobjetivos,
  getObjetivo,
};
