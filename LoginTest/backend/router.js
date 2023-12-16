const express = require("express");
const routers = express.Router();

const dadosconstroller = require("./src/Controller/dadoscontroller")

routers.get("/users", dadosconstroller.BuscarUsers);
// routers.post("/user/:email/:senha", dadosconstroller.AddUser); 

module.exports = routers;