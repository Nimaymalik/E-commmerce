const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
   return res.status(200).send({ message: "Welcome to Ecommerce API", status: true })
})

const authRouters=require("./Routes/auth.routes");
app.use("/auth", authRouters);

const userRouters= require("./Routes/user.route");
app.use("/api/users", userRouters);

const productRouter = require("./Routes/product.routes");
app.use("/api/products", productRouter);

const adminProductRouter = require("./Routes/adminProduct.routes");//
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./Routes/cart.routes");//
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./Routes/cartItem.routes");//
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require("./Routes/order.routes");
app.use("/api/orders", orderRouter);

const adminOrderRouter = require("./Routes/admincontroller.routes");
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require("./Routes/review.routes");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("./Routes/rating.routes");
app.use("/api/ratings", ratingRouter);

module.exports = app;
