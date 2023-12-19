const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add name "],
    },

    productImage: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productType: {
      type: String,
      required: [true, "Please specify the product type!"],
    },

    productBrand: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
