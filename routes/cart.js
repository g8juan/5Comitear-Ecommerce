const router = require("express").Router();
const {OrderProduct, Product, Order} = require("../models/index");

router.get("/:id", (req, res) => {
  Order.findOne({
    where: {id: req.params.id},
    include: [{model: Product}]
  })
    .then(order => res.send(order))
});


router.post("/modify", async (req, res) => {
  console.log("REQ BODY quantity", req.body.quantity)
  const {orderId, productId, quantity} = req.body;
  const foundItem = await OrderProduct.findOne({where: {orderId, productId}});
  
  //Si no encuentra el producto en la db, lo crea
  if (!foundItem) { 
    const product = await OrderProduct.create({
      quantity,
      productId,
      orderId
    })
    return res.status(200).send(product)
  }

  //Se destruye en caso que la cantidad sea menor a 0
  if (foundItem.quantity + quantity <= 0) { 
    await foundItem.destroy()
    return res.status(200).send(null)
  }

  //Finalmente, si existe el producto en la db y la cantidad no baja de 0 la updatea.
  const product = await foundItem.update({quantity: foundItem.quantity + quantity})
  return res.status(201).send(product);
})


router.get("/test/:orderId", (req, res) => {
  Product.findAll({
    include: [{
      model: Order,
      attributes: [],
      through: {attributes: []}, where: {id: req.params.orderId}, required: true
    }],
    attributes: {exclude: ['createdAt', 'updatedAt']}
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