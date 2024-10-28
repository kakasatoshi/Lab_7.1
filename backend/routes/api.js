const express = require("express");
const routes = express.Router();
const apiController = require("../controllers/apiController.js");

routes.get("/product", apiController.getProduct); // lấy data từ controller aipcontroller.

routes.post("/product", apiController.postProduct); // post data

module.exports = routes;
