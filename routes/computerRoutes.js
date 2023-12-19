const express = require("express");
const route = express.Router();
const ComputerController = require("../controllers/ComputerControllers");

route
  .route("/")
  .get(ComputerController.getAllComputer)
  .post(ComputerController.createProduct);

route
  .route("/:id")
  .put(ComputerController.updateProduct)
  .delete(ComputerController.deleteProduct)
  .get(ComputerController.getProductById);

module.exports = route;
