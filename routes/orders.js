const router = require("express").Router();

const {Order, Product} = require("../models/index");

//RUTAS MANU Y YENIEN---------------------------------
router.get("/", (req, res, next) => {
    Order.findAll().then(order => res.send(order))
})

router.post("/",(req,res)=>{
    Order.create({ammount:req.body.ammount, address:req.body.address, orderStatus: req.body.orderStatus})
    .then(order => {
        const user = req.body.user 
        order.setUser(user)
    }).then(()=> res.sendStatus(200))
 }) 

/* router.get("/favorites/:id",(req,res)=>{
    Favorites.findAll({where:{UserId: req.params.id}}).then(favorites => res.status(200).send(favorites))
 })

router.delete("/favorites/:id",(req,res)=>{
    Favorites.destroy({where:{id : req.params.id}}).then(()=> res.sendStatus(204))
 }) */





 //RUTAS order test VITTO--------------------------------
router.get("/test", (req, res) => {
  res.send("hola")
})

router.post("test/:id", (req, res) => {
  Product.findOne({where: {name: req.body.product}}).then(product => {
    Order.findByPk(req.params.id).then(order => {
      product.getOrders([order]).then(orderProduct => {
        orderProduct.update({quantity:req.body.quantity})
      })
    })
  })
})



module.exports = router;
