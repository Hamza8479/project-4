const express = require("express");
const Router = express.Router();
const {
  loginController,
  registerController,
} = require("../controller/loginRegisterController");
//routes
Router.post("/login", loginController);
Router.post("/register", registerController);
module.exports = Router;
