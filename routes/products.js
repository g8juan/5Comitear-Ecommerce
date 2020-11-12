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

// router.get("/test", (req, res, next) => {
//   const searchTerm = req.query.searchTerm
//   const query = {
//     where: searchTerm ? {name: {[Op.iLike]: `%${searchTerm}%`}} : null,
//     attributes: {
//       exclude: ['createdAt', 'updatedAt']
//     },

//     include: [{
//       model: ProductUser,
//       attributes: ['productId', [Sequelize.fn('AVG', Sequelize.col('review')), 'reviewAvg']],
//       group: ['productId'],
//       order: [[Sequelize.fn('AVG', Sequelize.col('review')), 'DESC']]
//     }],
//     group:['productId']

//   }
//   if (req.query.categoryId) {
//     const categoryId = parseInt(req.query.categoryId)
//     query.include.push({model: Category, through: {attributes: []}, where: {id: categoryId}, required: true})
//   }
//   Product.findAll(query).then(products => res.send(products)).catch((err) => console.log(err))
// })






// router.get("/test", (req,res)=>{
//   Category.findAll({
//     where: {id: req.query.c},
//     attributes: {exclude: ['createdAt', 'updatedAt']},
//     include: [{
//       model: Product,
//       where:{name: {[Op.iLike]: `%${req.query.s}%`}},
//       through: {attributes: []},
//       attributes: {
//         exclude: ['createdAt', 'updatedAt']
//       }
//     }]
//   }).then(order => res.send(order)).catch((err) => console.log(err))
// })


module.exports = router;