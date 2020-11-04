// const router = require("express").Router();
// const Order = require("../models/Order")
// const Product = require("../models/Product")

// router.get("/orders", (req, res) => {

// })

// router.post("orders/:id", (req, res) => {
//   Product.findOne({where: {name: req.body.product}}).then(product => {
//     Order.findByPk(req.params.id).then(order => {
//       product.getOrders([order]).then(orderProduct => {
//         orderProduct.update({quantity:req.body.quantity})
//       })
//     })
//   })
// })