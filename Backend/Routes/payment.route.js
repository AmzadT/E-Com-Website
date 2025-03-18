require("dotenv").config();
const express = require("express");

const paymentRouter = express.Router();

// Use a dummy API key if none is provided
const stripeKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummyKey123";
const Stripe = require("stripe");
const stripe = new Stripe(stripeKey);

// Check if a valid Stripe API key is available
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("⚠️ WARNING: Stripe API key is missing. Using a dummy key.");
}

// Example payment route (it won’t actually process payments)
paymentRouter.post("/checkout", async (req, res) => {
  res.status(200).json({ message: "Stripe payment simulation success!" });
});

module.exports = paymentRouter;
