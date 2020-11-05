const router = require("express").Router();
const {Category} = require("../models/index")

router.get("/", (req, res) => {
  Category.findAll()
    .then(categories => res.send(categories))
})

router.post("/", (req, res) => {
  Category.create(req.body)
    .then(category => res.send(category))
})

router.get("/singleCategory", (req, res) => {
  Category.findByPk(req.query.id)
    .then(category => res.send(category))
})

module.exports = router;