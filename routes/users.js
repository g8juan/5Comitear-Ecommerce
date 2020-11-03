const router = require("express").Router();
const {User} = require("../models/index")

router.get("/", (req, res, next) => {
  User.findAll().then(users => res.send(users))
})

module.exports = router;