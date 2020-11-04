const router = require("express").Router();
const {Order} = require("../models/index")

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

module.exports = router;
