require("./database/database")
const {User, Product, Order} = require("./models/index")

async function seed() {
  await User.create({firstName: "Juan", lastName: "Loza", email: "juana@gmail.com", password: "1231", address: "Pachanga 3032", phone: "2332432", userType: "3"}).catch(err=> console.log(err))
  await User.create({firstName: "Cristian", lastName: "Mendoza", email: "cristian@gmail.com", password: "cris132", address: "Aston 1311", phone: "43432432", userType: "1"}).catch(err=> console.log(err))
  await User.create({firstName: "Jose", lastName: "Perez", email: "jose@gmail.com", password: "1231", address: "Machacay 8042", phone: "7522432", userType: "1"}).catch(err=> console.log(err))
  console.log("usuarios generados")

  await Product.bulkCreate([
    {name: "camisa", price: 2000, description: "una bella camisa", thumbnail: "https://i.imgur.com/BY9MiuQ.png", image: "una bella image", stock: 4, reviews: [7, 6, 9]},
    {name: "pantalon", price: 2200, description: "un pantalon gris", thumbnail: "https://i.imgur.com/XTQuyir.png", image: "una bella imagen de pantalon", stock: 14, reviews: [8, 8, 9]},
    {name: "remera", price: 1000, description: "una remera dark", thumbnail: "https://i.imgur.com/af9yLS4.png", image: "una bella image", stock: 6, reviews: [7, 5, 6]},
    {name: "campera", price: 4800, description: "una campera muy abrigada", thumbnail: "https://i.imgur.com/JEDAPAg.png", image: "una bella imagen de campera", stock: 2, reviews: [8, 10, 10]}
  ]).then(() => {
    console.log("productos generados")
  })

  Order.bulkCreate([
    {userId: 1, ammount: 2000, address: "Pachanga 3032", orderStatus: "completed"}, //1 camisa
    {userId: 2, ammount: 4800, address: "Pachanga 3032", orderStatus: "completed"}, //1 campera
    {userId: 3, ammount: 6800, address: "Pachanga 3032", orderStatus: "completed"}, //camisa y campera
    {userId: 2, ammount: 5200, address: "Pachanga 3032", orderStatus: "completed"}, //camisa, pnatalon y remera
    {userId: 1, ammount: 2000, address: "Pachanga 3032", orderStatus: "completed"}, //2 remeras
  ]).then(() => {
    console.log("ordenes generadas")
  }).catch(err => console.log(err))

  // Category.bulkCreate([
  //   {userId: 1, ammount: 2000, address: "Pachanga 3032", orderStatus: "completed"}, //1 camisa
  //   {userId: 2, ammount: 4800, address: "Pachanga 3032", orderStatus: "completed"}, //1 campera
  //   {userId: 3, ammount: 6800, address: "Pachanga 3032", orderStatus: "completed"}, //camisa y campera
  //   {userId: 2, ammount: 5200, address: "Pachanga 3032", orderStatus: "completed"}, //camisa, pnatalon y remera
  //   {userId: 1, ammount: 2000, address: "Pachanga 3032", orderStatus: "completed"}, //2 remeras
  // ]).then(() => {
  //   console.log("ordenes generadas")
  // }).catch(err => console.log(err))
}

seed()













