require ("dotenv").config({path: 'dados.env'});

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const Routers = require("./router.js");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(bodyparser.urlencoded({extended: false}));
server.use('/api', Routers);

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
});