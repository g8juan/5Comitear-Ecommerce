const router = require("express").Router();
const {Product} = require("../models/index")

router.get("/", (req, res, next) => {
  Product.findAll(req.body)
  .then(products => res.send(products))
})

router.post("/", (req, res, next) => {
    Product.create(req.body)
    .then(products => res.send(products))
  })

module.exports = router;