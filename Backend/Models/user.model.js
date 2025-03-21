const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
}, { timestamps: true, versionKey: false });

const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
