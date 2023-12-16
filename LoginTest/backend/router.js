const express = require("express");
const routers = express.Router();

const dadosconstroller = require("./src/Controller/dadoscontroller")

routers.get("/users", dadosconstroller.BuscarUsers);
routers.get("/usersearch/:Email/:Password", dadosconstroller.UserSearch);
routers.post("/user/:Email/:Password", dadosconstroller.AddUser);

module.exports = routers;