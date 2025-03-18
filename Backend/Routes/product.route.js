const express = require("express");
const productModel = require("../Models/product.model");

const productRouter = express.Router();

// Get all products
productRouter.get("/", async (req, res) => {
    const products = await productModel.find();
    res.json(products);
});

// Create a product
productRouter.post("/", async (req, res) => {
    const product = await productModel.create(req.body);
    res.json(product);
});

module.exports = productRouter;
