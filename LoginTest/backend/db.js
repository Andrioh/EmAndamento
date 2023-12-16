const mysql = require("mysql")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if (error){
        throw error;
    }else{
        console.log(`Conectado ao banco de dados: ${DB_NAME}`)
    }
});

module.exports = connection;