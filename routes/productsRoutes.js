const express = require("express");
const route = express.Router();
const ProductsController = require("../controllers/productsControllers");
const { protect, authorize } = require("../middleware/auth");

route.get("/", ProductsController.getAllProducts);
route.post("/", protect, authorize("admin"), ProductsController.createProduct);

route.post("/products", (req, res) => {
  console.log("Received POST request to /products");
});

route.put(
  "/:id",
  protect,
  authorize("admin"),
  ProductsController.updateProduct
);
route.delete(
  "/:id",
  protect,
  authorize("admin"),
  ProductsController.deleteProduct
);
route.get("/:id", ProductsController.getProductById);

module.exports = route;
