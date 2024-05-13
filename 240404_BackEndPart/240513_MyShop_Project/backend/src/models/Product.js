import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    productImg: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    variation: [
      {
        size: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],
    price: { type: Number, required: true },
    stock: { type: String, required: true },
  },
  { collection: "product", timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
