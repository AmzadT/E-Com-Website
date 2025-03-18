require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const Connection = require("./Config/db");
const userRouter = require("./Routes/auth.route");
const productRouter = require("./Routes/product.route");
const paymentRouter = require("./Routes/payment.route");
const orderRouter = require("./Routes/order.route"); 
const Authenticate = require("./Middlewares/authentication.middleware"); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Set up the port to listen on
const PORT = process.env.PORT || 3005;

// Routes
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/orders", Authenticate, orderRouter); 

// Homepage route
app.get("/", (req, res) => {
  res.send("Welcome to my E-Commerce Server");
});

// 404 Error Handling Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Page Not Found" });
});

// ✅ General Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, async () => {
  try {
    await Connection();
    console.log(`✅ Server is running on Port: ${PORT} and Connected to the Database`);
  } catch (error) {
    console.error(`❌ Error Connecting to Database: ${error.message}`);
  }
});
