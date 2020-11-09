const router = require("express").Router();
const passport = require("passport");
const { User } = require("../models/index");
const { Op } = require("sequelize");

router.get("/", (req, res, next) => {
  User.findAll({
    order: [["id", "ASC"]],
    where: { userType: { [Op.ne]: "3" } },
  }).then((users) => res.send(users));
});

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.put("/admin/users", (req, res) => {
  User.update(
    { userType: req.body.userType },
    { where: { id: req.body.id }, returning: true, plain: true }
  )
    .then((user) => res.send(user))
    .catch((err) => console.log("Error!", err));
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
