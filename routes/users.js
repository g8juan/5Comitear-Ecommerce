const router = require("express").Router();
const passport = require("passport");
const { User } = require("../models/index");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  console.log("AUTHENTICATED", req.isAuthenticated());
  if (!req.user) return res.sendStatus(401);
  res.send(req.user);
});



module.exports = router;
