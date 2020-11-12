const router = require("express").Router();
const {Product, Category, ProductUser} = require("../models/index")
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get("/", (req, res, next) => {
  const searchTerm = req.query.searchTerm
  const query = {
    where: searchTerm ? {name: {[Op.iLike]: `%${searchTerm}%`}} : null,
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }
  if (req.query.categoryId) {
    const categoryId = parseInt(req.query.categoryId)
    query.include = [{
      model: Category,
      through: {attributes: []},
      where: {id: categoryId},
      required: true
    }]
  }
  Product.findAll(query).then(products => res.send(products)).catch((err) => console.log(err))
})


router.post("/", (req, res) => {
  Product.create(req.body)
    .then(products => res.send(products))
})

router.get("/singleProduct", (req, res) => {
  Product.findByPk(req.query.id)
    .then(product => res.send(product))
})

//ruta para traer reviews de productos en orden mayor a menor
//+TOTALMENTE IMPERFORMANTE, SE HACE ESTO RAPIDO POR FALTA DE TIEMPO
router.get("/reviews", (req, res) => {
  ProductUser.findAll({
    attributes: ['productId', [Sequelize.fn('AVG', Sequelize.col('review')), 'reviewAvg']],
    group: ['productId'],
    order: [[Sequelize.fn('AVG', Sequelize.col('review')), 'DESC']]
  }).then(reviews => res.send(reviews)).catch((err) => console.log(err))
})

router.put("/singleProduct", (req, res) => {
  Product.update(req.body, {
    where: { id: req.body.id },
    returning: true,
    plain: true
  })
    .then(product => res.send(product[1]))
})

router.delete("/singleProduct", (req, res) => {
  Product.findByPk(req.query.id)
    .then((product) => {
      return Product.destroy({ where: { id: req.query.id } })
        .then((u) => res.send(product));
    });
})



module.exports = router;