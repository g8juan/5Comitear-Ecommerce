const express = require("express");
const passport = require("passport");
const { User } = require("../models");
const router = express.Router();

const usersRouter = require("./users")
const productsRouter = require("./products")


router.use("/users", usersRouter)
router.use("/products", productsRouter)
// router.use("/orders", require("./orders"))


router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  res.send(req.user);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
