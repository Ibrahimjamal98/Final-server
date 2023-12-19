const Order = require("../models/order");

const orderController = {
  createOrder: async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, error: error.message });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ success: false, error: "Order not found" });
      }
      res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = orderController;
