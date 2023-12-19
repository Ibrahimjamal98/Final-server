const Products = require("../models/products");

const ProductsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching products: " + error.message,
      });
    }
  },

  createProduct: async (req, res) => {
    try {
      console.log(req.body);
      const product = await Products.create(req.body);
      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(400).json({
        success: false,
        message: "Error creating product: " + error.message,
      });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching product by ID: " + error.message,
      });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({
        success: false,
        message: "Error updating product: " + error.message,
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting product: " + error.message,
      });
    }
  },
};

module.exports = ProductsController;
