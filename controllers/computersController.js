const Computer = require("../models/computer");

const computersController = {
  getAllProducts: async (req, res) => {
    try {
      const computer = await Computer.find();
      res.status(201).json({
        success: true,
        data: computer,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  createComputer: async (req, res) => {
    try {
      console.log(req.body);
      const computer = await Computer.create(req.body);
      res.status(201).json({
        success: true,
        data: computer,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  getComputerById: async (req, res) => {
    try {
      const computer = await Computer.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: computer,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  updateComputer: async (req, res) => {
    try {
      const computer = await Computer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!computer) {
        return res
          .status(404)
          .json({ success: false, message: "computer not found" });
      }
      res.status(200).json({
        success: true,
        data: computer,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteComputer: async (req, res) => {
    try {
      const computer = await Computer.findByIdAndDelete(req.params.id);
      if (!computer) {
        return res
          .status(404)
          .json({ success: false, message: "computer not found" });
      }
      res
        .status(200)
        .json({ success: true, message: "computer deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = computersController;
