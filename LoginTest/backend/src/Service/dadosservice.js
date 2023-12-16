const db = require("../../db");

module.exports = {
    BuscarUsers: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM DadosUsers", (error, results) => {
                if (error) {
                    console.error(`Erro na consulta: ${error.message}`);
                    reject(error);
                } else {
                    console.log(`Resultados da consulta: ${results}`);
                    resolve(results);
                }
            });
        });
    },

    AddUser: (Email, Password) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO DadosUsers (Email, Password) VALUES (LOWER(?), ?)", [Email, Password], (error, results) => {
                if (error) {
                    console.error(`Erro ao adicionar usuário: ${error.message}`);
                    reject(error);
                } else {
                    console.log(`Resultados da adição da conta: ${results}`);
                    resolve(results);
                }
            });
        });
    },

    UserSearch: (Email, Password) =>{
        return new Promise((resolve, reject) =>{
            
            db.query("SELECT * FROM DadosUsers WHERE Email = LOWER(?) AND Password = ?", [Email,Password],(error, results) => {
                if (error){
                console.log(`Erro ao buscar conta: ${error.message}`)
                reject(error)
                }else{
                    console.log(`Resultados da busca: ${JSON.stringify(results)}`);
                    resolve(results)
                }
            });
        });
    }
};