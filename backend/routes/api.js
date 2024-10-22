const express = require("express");
const routes = express.Router();
const apiController = require("../controllers/apiController.js");

routes.get("/data", apiController.getData);

module.exports = routes;
