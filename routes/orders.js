const router = require("express").Router();

const {Order} = require("../models/index");
const database = require("../database/database");

router.get("/", (req, res) => Order.findAll().then((order) => res.send(order)));

router.post("/new", (req, res) => {
  Order.create({userId: req.body.userId, orderStatus: "pending"})
    .then(order => res.send(order))
    .catch((err) => console.log(err))
})

//+Get pending order for current user
router.get("/:userId", (req, res) => {
  Order.findOne({where: {userId: req.params.userId, orderStatus: "pending"}})
    .then((order) => res.status(200).send(order))
    .catch((err) => console.log(err));
});

//+Get all orders for current user
router.get("/list/:userId", (req, res) => {
  Order.findAll({where: {userId: req.params.userId}, order: [['updatedAt', 'DESC']]})
    .then((orders) => res.status(200).send(orders))
    .catch((err) => console.log(err))
})

//change order/cart status //JSON modelo a enviar  {"id":13 ,"orderStatus":"completed"}
//carritos/ordenes no se eliminan, simplemente se cancelan/completan/pending. Esto permite tener data de la preferncia de compra del cliente. (Recomendarle el televisor que nunca compró) (Se pueden hacer operaciones luego para mover las ordenes cancelled asi como los productos comprados a otras tablas para alivianar la query de la operatoria normal, ver cleanup mas abajo)
router.put("/changeCartStatus", (req, res) => {
  database
    .query(
      `UPDATE orders SET "orderStatus" = '${req.body.orderStatus}', "updatedAt" = NOW() WHERE id=${req.body.id}`
    )
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});




//+Ruta solo para el seed
router.post("/newCompletedOrder", (req, res) => {
  Order.create({userId: req.body.userId, orderStatus: req.body.orderStatus, ammount:req.body.ammount, address: req.body.address})
    .then(order => res.send(order))
    .catch((err) => console.log(err))
})

module.exports = router;

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

// router.post("/new", (req, res) => {
//   database.query(
//       `INSERT INTO orders ("userId", "ammount", "address", "orderStatus", "createdAt","updatedAt")
//   VALUES (${req.body.userId}, 0, '', 'pending', NOW(), NOW())`
//     )
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch((err) => console.log(err));
// });


// router.put("/updateItemQuantity", (req, res) => {
//   const { quantity, orderId, productId } = req.body;
//   database
//     .query(
//       `UPDATE order_product SET quantity = ${quantity}, "updatedAt" = NOW() WHERE "orderId" = ${orderId} AND "productId" = ${productId}`
//     )
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .catch((err) => console.log(err));
// });

//    /api/orders/getCart
// router.get("/getCart", (req, res)=>{
//   Order.findOrCreate({where:{userId:req.body.userId, orderStatus:"pending"}, 
//   defaults: {ammount:0, address:req.body.address}})
//   .then((user)=>{
//     console.log(user)
//     res.send(user)
//   })
// })
