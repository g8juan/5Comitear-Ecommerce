const nodemailer = require('nodemailer');
const router = require("express").Router();

// NODEMAILER
const transport = {
  // host: 'smtp.gmail.com', 
  service: 'gmail',
  auth: {
    user: 'cincommitear@gmail.com',
    pass: 'cincomitear@P5'
  },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Node Mailer andando ok!');
  }
});

router.post('/email', (req, res, next) => {

  console.log('ENTRO A POST SEND EMAIL')

  const order = req.body.order
  const email = req.body.email
  const products = req.body.products.map(product => (
    `<ul>
    <li>Producto: ${product.name}</li>
    <li>Descripcion: ${product.description}</li>
    <li>Precio: ARS ${product.price}</li>
  </ul>`
  ))

  const message = (
    `<div>
      <h4>Muchas gracias por tu compra en 5mitear</h4>
      <p>Aca tienes tu resumen de compra:</p>
      ${products}
      <p>El total de tu compra es: ARS$ ${order.ammount}.</p>
      <p>Tu compra te estara llegando en los proximos dias a: ${order.address}</p>
      <p>Recorda tener tu DNI a mano al recibir tu compra, sera enviado a nombre de: ${order.recipient}.</p>
    </div>`
  )

  const mail = {
    from: 'cincommitear@hotmail.com',
    to: email,
    subject: `Tu compra en 5mitear ha sido confirmada. Orden numero: ${order.id}`,
    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.send(console.log(err))
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;