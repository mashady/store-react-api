const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/products");
const stripeRoute = require("./routes/stripe");

const mongoose = require("mongoose");
const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", productRouter);
app.use("/api/products", productRouter);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, (req, res) => console.log("server is running"));
