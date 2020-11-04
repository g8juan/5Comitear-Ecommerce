const router = require("express").Router();
const {Order, Product} = require("../models/index");

router.get("/orders", (req, res) => {
  res.send("hola")
})

router.post("orders/:id", (req, res) => {
  Product.findOne({where: {name: req.body.product}}).then(product => {
    Order.findByPk(req.params.id).then(order => {
      product.getOrders([order]).then(orderProduct => {
        orderProduct.update({quantity:req.body.quantity})
      })
    })
  })
})

module.exports = router