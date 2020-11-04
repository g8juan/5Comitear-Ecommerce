const router = require("express").Router();
const {Product} = require("../models/index")

router.get("/", (req, res, next) => {
  if (Object.keys(req.query).length !== 0) {
    Product.findAll({where: req.query}).then(filteredProducts=>res.send(filteredProducts))
  } else {
    Product.findAll()
      .then(products => res.send(products))
  }
})

router.post("/", (req, res) => {
    Product.create(req.body)
    .then(products => res.send(products))
  })

router.get("/singleProduct", (req, res) => {
    Product.findByPk(req.query.id)
     .then(product => res.send(product))
  })

module.exports = router;