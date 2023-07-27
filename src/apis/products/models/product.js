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
  imgUrl: {
    type: String,
    required: true,
  },
  relatedVideoIds: {
    type: [String],
  },
  discount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    range: [0, 5],
    default: 0,
  },
  sold_amount: {
    type: Number,
    default: 0,
  },
});

export const Product = new mongoose.model("Product", ProductSchema);
