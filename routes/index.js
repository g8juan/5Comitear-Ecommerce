const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require("./orders");
const cartRouter = require("./cart");

router.use("/categories", categoriesRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/cart", cartRouter);

router.use("/", function (req, res) {
  res.send("No se ha alcanzado ninguna ruta");
});

module.exports = router;


