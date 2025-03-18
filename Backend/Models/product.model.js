const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: { type: String, required: true },
  image: { type: String, required: true },
  stock: Number,
}, { timestamps: true, versionKey: false });

const productModel = mongoose.model("Product", ProductSchema);
module.exports = productModel;
