const router = require("express").Router();
const { Category, Product, CategoryProduct } = require("../models/index");

router.get("/", (req, res) => {
  Category.findAll().then((categories) => {
    res.send(categories);
  });
});

router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => res.send(category))
    .catch((err) => res.sendStatus(500));
});

router.put("/edit", (req, res) => {
  console.log("soy req body", req.body);
  Category.update(
    { name: req.body.name },
    { where: { id: req.body.id }, returning: true, plain: true }
  )
    .then((category) => res.send(category[1]))
    .catch((err) => console.log(err));
});

router.post("/delete", (req, res) => {
  Category.destroy({ where: { id: req.body.id } }).then(() =>
    res.send("category deleted")
  );
});

router.get("/singleCategory", (req, res) => {
  console.log("soy req query", req.query);
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

router.put("/update", (req, res) => {
  CategoryProduct.update(
    {
      categoryId: req.body.categoryId,
    },
    { where: { productId: req.body.productId }, returning: true, plain: true }
  )
    .then((productCategory) => res.status(200).send(productCategory[1]))
    .catch((err) => console.log(err));
});

router.get("/productCategory", (req, res) => {
  CategoryProduct.findOne({
    where: { productId: req.query.productId },
  }).then((product) => res.send(product));
});

module.exports = router;
