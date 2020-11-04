const router = require("express").Router();
const {Product} = require("../models/index")

router.get("/", (req, res, next) => {
  console.log("Llego a ruta GET")
  console.log(req.query)
  if (Object.keys(req.query).length !== 0) {
    Product.findAll({where: req.query}).then(filteredProducts=>res.send(filteredProducts))
  } else {
    Product.findAll()
      .then(products => res.send(products))
  }
})

router.post("/", (req, res, next) => {
  Product.create(req.body)
    .then(products => res.send(products))
})

module.exports = router;