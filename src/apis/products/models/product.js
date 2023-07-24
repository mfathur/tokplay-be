import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  relatedVideoIds: {
    type: [String],
  },
});

export const Product = new mongoose.model("Product", ProductSchema);
