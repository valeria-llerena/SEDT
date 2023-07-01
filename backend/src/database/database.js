import mysql from "mysql2";
import config from "../config.js";

const connection = mysql.createConnection({
    host: "34.172.3.130",
    database: "sedt",
    user: "root", 
    password: "",
    port: 8080
});

export const getConnection = ()=>{
    return connection
};

