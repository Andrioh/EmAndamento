const db = require("../../db")

module.exports = {
    BuscarUsers: ()=>{
        return new Promise((success, reject) =>{
            db.query("", (error, results) => {
                if (error){
                    throw error;
                    reject(error);
                }else{
                    console.log(`Resultados da consulta: ${results}`)
                    success(results)
                }
            });
        });
    }
};