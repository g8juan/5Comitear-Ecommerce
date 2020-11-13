const router = require("express").Router();
const { Order } = require("../models/index");

router.get("/", (req, res) => Order.findAll().then((order) => res.send(order)));

router.post("/new", (req, res) => {
  console.log(req.body);
  Order.create({
    userId: req.body.userId,
    orderStatus: "pending",
    userEmail: req.body.userEmail,
  })
    .then((order) => res.send(order))
    .catch((err) => console.log(err));
});

router.put("/update", (req, res) => {
  if (req.body.address) {
    Order.findByPk(req.body.orderId)
      .then((order) => {
        order.address = req.body.address;
        order.save();
        res.send(order);
      })
      .catch((err) => console.log(err));
  } else if (req.body.subtotal) {
    Order.findByPk(req.body.orderId)
      .then((order) => {
        order.ammount = req.body.subtotal;
        order.save();
        res.send(order);
      })
      .catch((err) => console.log(err));
  } else if (req.body.fullName) {
    Order.findByPk(req.body.orderId)
      .then((order) => {
        order.recipient = req.body.fullName;
        order.save();
        res.send(order);
      })
      .catch((err) => console.log(err));
  } else if (req.body.status) {
    console.log(
      "entrando al update con status",
      req.body.status,
      "y order",
      req.body.orderId
    );
    Order.findByPk(req.body.orderId)
      .then((order) => {
        order.orderStatus = req.body.status;
        order.save();
        res.send(order);
      })
      .catch((err) => console.log(err));
  }
});

//+Get order (for current user)
router.get("/:userId", (req, res) => {
  Order.findOne({
    where: { userId: req.params.userId, orderStatus: "pending" },
  })
    .then((order) => res.status(200).send(order))
    .catch((err) => console.log(err));
});

//+Get single order (for any user)
router.get("/getsingleorder/:id", (req, res) => {
  Order.findByPk(req.params.id)
    .then((order) => res.status(200).send(order))
    .catch((err) => console.log(err));
});

//+Get all orders for current user
router.get("/list/:userId", (req, res) => {
  Order.findAll({
    where: { userId: req.params.userId },
    order: [["updatedAt", "DESC"]],
  })
    .then((orders) => res.status(200).send(orders))
    .catch((err) => console.log(err));
});

//+Ruta solo para el seed
router.post("/newCompletedOrder", (req, res) => {
  Order.create({
    userId: req.body.userId,
    orderStatus: req.body.orderStatus,
    ammount: req.body.ammount,
    address: req.body.address,
  })
    .then((order) => res.send(order))
    .catch((err) => console.log(err));
});

module.exports = router;
