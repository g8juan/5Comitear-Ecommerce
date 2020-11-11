const router = require("express").Router();
const { Category, Product, CategoryProduct } = require("../models/index");

router.get("/", (req, res) => {
  Category.findAll().then((categories) => {
    console.log(categories);
    res.send(categories);
  });
});

router.post("/", (req, res) => {
  Category.create(req.body).then((category) => res.send(category));
});

router.get("/singleCategory", (req, res) => {
  Category.findByPk(req.query.id).then((category) => res.send(category));
});

router.post("/add", (req, res) => {
  CategoryProduct.create({
    productId: req.body.productId,
    categoryId: req.body.categoryId,
  })
    .then((productCategory) => res.status(200).send(productCategory))
    .catch((err) => console.log(err));
});

module.exports = router;
