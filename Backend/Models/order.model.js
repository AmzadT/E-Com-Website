const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number }],
  totalAmount: Number,
  paymentStatus: { type: String, default: "Pending" },
}, { timestamps: true });

const orderModel = mongoose.model("Order", OrderSchema);
module.exports = orderModel;
