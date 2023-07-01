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
      .query("SELECT * FROM objetivo WHERE idObjetivo =?", idObjetivo);
    res.json({ message: result });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addObjetivos = async (req, res) => {
  try {
    const connection = await getConnection();
    await connection.promise().query("INSERT INTO objetivo SET ?", req.body);
    res.json({ message: "Objetivo Agregado", response: true });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getObjetivos,
  addObjetivos,
  getObjetivo,
};
