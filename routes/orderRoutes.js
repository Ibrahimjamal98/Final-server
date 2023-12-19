const express = require("express");
const route = express.Router();
const orderController = require("../controllers/orderControllers");

route.get("/", orderController.getAllOrders);
route.post("/", orderController.createOrder);

route.get("/:id", orderController.getOrderById);

module.exports = route;
