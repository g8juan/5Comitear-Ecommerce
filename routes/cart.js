const router = require("express").Router();
const { OrderProduct, Product, Order } = require("../models/index");

router.get("/:id", (req, res) => {
  Order.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }]
  })
    .then(order => res.send(order))
});

/*
router.get("/:orderId", (req, res) => {
  Product.findAll({
    include: [{
      model: OrderProduct,
      attributes: ["quantity"],
      where: {orderId: req.params.orderId},
      required: true
    }],
    attributes: {exclude: ['createdAt', 'updatedAt']}
  }).then(order => res.send(order))
});
*/

router.post("/modify", async (req, res) => {
  const { orderId, productId } = req.body;
  let quantity = req.body.quantity || 1 // esta linea esta de mas se puede poner arriba ya especifica en front.
  const foundItem = await OrderProduct.findOne({ where: { orderId, productId } });
  if (!foundItem) {
    const product = await OrderProduct.create({ quantity, productId: req.body.productId, orderId: req.body.orderId })
    return res.status(200).send(product)
  }
  if (foundItem.quantity + quantity === 0) {
    await foundItem.destroy()
    return res.status(200).send(null)
  }
  const product = await foundItem.update({ quantity: foundItem.quantity + quantity })
  return res.status(201).send(product);
})


router.get("/test/:orderId", (req, res) => {
  Product.findAll({
    include: [{
      model: Order,
      attributes: [],
      through: { attributes: [] }, where: { id: req.params.orderId }, required: true
    }],
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
    .then(order => res.send(order))
});


module.exports = router;

// const categories = await models.Category.findAll({
//   attributes: ['id', 'title', 'description'],
//   order: [['title', 'ASC'], [models.Product, models.Price, 'createdAt', 'DESC']],
//   include: [
//     {
//       model: models.Product,
//       attributes: ['id', 'title'],
//       through: { attributes: [] },
//       include: [
//         {
//           model: models.Price,
//           attributes: ['id', 'amount', 'createdAt'],
//           separate: true,
//           limit: 1,
//         },
//       ],
//     },
//   ],
// });