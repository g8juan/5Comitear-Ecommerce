const express = require("express");
const passport = require("passport");

const { User } = require("../models");
const router = express.Router();

const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require("./orders");

router.use("/categories", categoriesRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => console.log(err));
});

router.get("/404", (req, res) => {
  res.send("No existe el usuario");
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  console.log("SOY REQ USER", req.user);
  res.json(req.user);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
