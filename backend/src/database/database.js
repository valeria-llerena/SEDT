import mysql from "mysql2";
import config from "../config.js";

const connection = mysql.createConnection({
    host: "34.31.214.223",
    database: "sedt2",
    user: "root", 
    password: "2c'B#LQ'/,nTQVZ{",
    port: 3306
});

export const getConnection = ()=>{
    return connection
};

