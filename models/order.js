const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    cakes: [
      {
        cakeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "cakes", 
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      }
    ],

    total: {
      type: Number,
      required: true,
    },
    
    name: {
      type: String,
      required: true,
    },
    
    address: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
