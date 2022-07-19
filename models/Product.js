const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    oldPrice: { type: Number },
    newPrice: { type: Number, required: true },
    image: { type: String, required: true },
    imgDetail1: { type: String, required: true },
    imgDetail2: { type: String, required: true },
    categories: { type: Array },
    heartIcon: { type: String },
    hotIcon: { type: String },
    saleTag: { type: String },
    newTag: { type: String },
    sale: { type: String },
    colors: { type: Array },
    size: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
