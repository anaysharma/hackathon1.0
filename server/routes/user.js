const express = require("express");
const route = express.Router();

const { register, login, getUser } = require("../controllers/user.js");

route.post("/register", register);
route.post("/login", login);
route.post("/get", getUser);

module.exports = route;
