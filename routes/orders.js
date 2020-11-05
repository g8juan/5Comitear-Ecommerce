const router = require("express").Router();

const {Order, Product} = require("../models/index");
const database = require('../database/database')
const {QueryTypes} = require("sequelize")

//RUTAS MANU Y YENIEN---------------------------------
router.get("/", (req, res, next) => {
  Order.findAll().then(order => res.send(order))
})

router.post("/", (req, res) => {
  Order.create({ammount: req.body.ammount, address: req.body.address, orderStatus: req.body.orderStatus})
    .then(order => {
      const user = req.body.user
      order.setUser(user)
    }).then(() => res.sendStatus(200))
})

/* router.get("/favorites/:id",(req,res)=>{
    Favorites.findAll({where:{UserId: req.params.id}}).then(favorites => res.status(200).send(favorites))
 })

router.delete("/favorites/:id",(req,res)=>{
    Favorites.destroy({where:{id : req.params.id}}).then(()=> res.sendStatus(204))
 }) */





//RUTAS order VITTO--------------------------------
//SHOPPING CART

//create new order // new cart //JSON modelo a enviar {"userId": 1, "ammount": 200, "adress": "Chiringuito 314"}
//Desde el front se debe aplicar la lógica que restringa que el usuario tenga mas de un carrito. En un futuro quizá se permita tener mas de un carrito a cada usuario
router.post('/newCart', (req, res) => {
  const {userId, ammount, address} = req.body
  database.query(`INSERT INTO orders ("userId", "ammount", "address", "orderStatus", "createdAt","updatedAt")
  VALUES (${userId}, ${ammount}, '${address}', 'pending', NOW(), NOW())`)
    .then(() => {res.sendStatus(201)}).catch(err => console.log(err))
})

//add item to order // cart  //JSON modelo a enviar {"orderId": 5, "productId":5}
router.post('/addItemToCart', (req, res) => {
  const {orderId, productId} = req.body
  database.query(`INSERT INTO order_product ("quantity", "createdAt","updatedAt", "orderId", "productId") 
  VALUES (1, NOW(), NOW(), ${orderId}, ${productId})`)
    .then(() => res.sendStatus(200)).catch(err => console.log(err))
})

router.get('/getClientOrder/:userId', (req, res)=>{
  console.log("llego a la ruta del back, reqbody=",req.params)
  Order.findOne({where:{userId:req.params.userId, orderStatus:"pending"}})
  .then(order => res.send(order))
  .catch(err=> console.log(err))
})

//update order quantity // item quantity (BOTONES - / +) //JSON modelo a enviar  {"quantity": 12, "orderId": 2, "productId":2}
//La logica de aumentar o disminuir la cantidad se hace desde el front
router.put('/updateItemQuantity', (req, res) => {
  const {quantity, orderId, productId} = req.body 
  database.query(`UPDATE order_product SET quantity = ${quantity}, "updatedAt" = NOW() WHERE "orderId" = ${orderId} AND "productId" = ${productId}`)
    .then(() => {res.sendStatus(200)}).catch(err => console.log(err))
})

//get all user cart data //JSON modelo a enviar  {"userId": 12}
router.get('/getUserCartData', (req, res) => {
  database.query(
  `SELECT * FROM products as p
   JOIN order_product as op ON p.id = op."productId"
   JOIN orders as o ON op."orderId" = o.id
   WHERE o."userId" = ${req.body.userId} AND o."orderStatus" = 'pending'`, //&& o."orderStatus" = pending
    {type: QueryTypes.SELECT})
    .then((query) => res.status(200).send(query))
    .catch(err => console.log(err))
})


//change order/cart status //JSON modelo a enviar  {"id":13 ,"orderStatus":"completed"}
//carritos/ordenes no se eliminan, simplemente se cancelan/completan/pending. Esto permite tener data de la preferncia de compra del cliente. (Recomendarle el televisor que nunca compró) (Se pueden hacer operaciones luego para mover las ordenes cancelled asi como los productos comprados a otras tablas para alivianar la query de la operatoria normal, ver cleanup mas abajo)
router.put('/changeCartStatus', (req, res)=>{
  database.query(`UPDATE orders SET "orderStatus" = '${req.body.orderStatus}', "updatedAt" = NOW() WHERE id=${req.body.id}`)
  .then(()=>res.sendStatus(200)).catch((err)=>console.log(err))
})


///transfer/database cleanup-----------------
/*
SELECT * INTO "rejectedOrders"
FROM orders
WHERE "orderStatus" = "cancelled"
------then=>
DELETE FROM orders
WHERE "orderStatus" = "cancelled"
*/
//Se deberia mover también los elemntos de order_product, moviendola a cancelled_order_product por ej y cambiar el nombre de las claves foraneas.
/*
ALTER TABLE `cancelled_order_product` 
DROP FOREIGN KEY `orderId`;  

ALTER TABLE `cancelled_order_product`  
ADD CONSTRAINT `cancelled_orderId` 
    FOREIGN KEY (`cancelled_order_productId`) REFERENCES `cancelled_order` (`id`) ON DELETE CASCADE; 
repetir para productId
*/

//MASS UPDATE DE ITEMS (No es buena practica, mejor actualizar uno a uno a medida que suceden los cambios)
// update item quantity
// router.get("/test/:quantity/:orderId/:productId", (req, res) =>{
//   const {quantity, orderId, productId} = req.params
//   database.query(`insert into order_product ("quantity","createdAt","updatedAt","productId","orderId") values (?,NOW(),NOW(),?,?)`,{
//     replacements:[quantity,orderId,productId]
//   })
// })

//update several items
// router.get('/test/', (req, res)=>{
//   database.query(
//     `
//         UPDATE order_product
//         SET 'orderId' = new.'orderId', 'productId' = new.'productId', 'quantity' = new.'quantity'
//         from (values ?) AS new('orderId', 'productId', 'quantity')
//         WHERE employee.id = new.employeeId
//     `,
//     {
//         replacements: [[1, 13, 1],[1, 4, 1],[2, 1, 2],[1, 13, 1]],
//         type: models.models.sequelize.QueryTypes.INSERT // type: Sequelize.QueryTypes.INSERT o sera database.queryTypes.Insert
//     }
//   )
// } 






module.exports = router;
