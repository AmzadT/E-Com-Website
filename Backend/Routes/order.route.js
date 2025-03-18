const express = require("express");
const orderModel = require("../Models/order.model");
const Authenticate = require("../Middlewares/authentication.middleware");

const orderRouter = express.Router();

// Create an Order
orderRouter.post("/", Authenticate, async (req, res) => {
    try {
        const { products, totalAmount } = req.body;
        const newOrder = await orderModel.create({ userId: req.user.userId, products, totalAmount });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get User Orders
orderRouter.get("/", Authenticate, async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.user.userId }).populate("products.product");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = orderRouter;
