const router = require("express").Router();
const { Product, Category } = require("../models/index")
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get("/", (req, res, next) => {
  const searchTerm = req.query.searchTerm
  const query = {
    where: searchTerm ? { name: { [Op.iLike]: `%${searchTerm}%` } } : null, attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }
  if (req.query.categoryId) {
    const categoryId = parseInt(req.query.categoryId)
    query.include = [{ model: Category, through: { attributes: [] }, where: { id: categoryId }, required: true }]
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
router.get("/productsByCategory", (req, res) => {
  console.log(req.query)
  Category.findAll({
    where: { id: req.query.categoryId },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
      model: Product,
      through: { attributes: [] },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }]
  }).then(order => res.send(order))
    .catch((err) => console.log(err))
});


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