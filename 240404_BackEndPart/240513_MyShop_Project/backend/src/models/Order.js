import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now, immutable: true },
    products: { type: String, required: true },

    state: { type: String, required: true },

    price: { type: Number, required: true },

    customer: { type: String, required: true },
  },
  { collection: "order", timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
