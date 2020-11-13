require("./database/database");
//TODO: meter al seed categorias
const {
  User,
  Product,
  Order,
  OrderProduct,
  Category,
  CategoryProduct,
} = require("./models/index");
async function seed() {
  async function createUsersProductsOrdersAndCategories() {
    /*SUDO!*/ await User.create({
    firstName: "Admin",
    lastName: "3",
    email: "admin3@admin.com",
    password: "admin",
    address: "Pachanga 3032",
    phone: "2332432",
    userType: "3",
  })
      .then(() =>
        console.log("Por favor espere, estbleciendo conexión cuántica")
      )
      .catch((err) => console.log(err));
    /*Admin*/ await User.create({
        firstName: "Cristian",
        lastName: "Mendoza",
        email: "cristian@gmail.com",
        password: "1",
        address: "Aston 1311",
        phone: "43432432",
        userType: "2",
      })
      .then(() => console.log("Generando super usuario con telemetría cósmica"))
      .catch((err) => console.log(err));
    /*User*/ await User.create({
        firstName: "Jose",
        lastName: "Perez",
        email: "jose@gmail.com",
        password: "1",
        address: "Machacay 8042",
        phone: "7522432",
        userType: "1",
      })
      .then(() =>
        console.log("Fusión molecular completada, por favor espere...")
      )
      .catch((err) => console.log(err));
    console.log("users generated!");

    Category.bulkCreate([
      { name: "Calzado" },
      { name: "Informal" },
      { name: "Formal" },
      { name: "Verano" },
      { name: "Invierno" },
    ])
      .then(() => console.log("Categories generated!"))
      .catch((err) => console.log(err));

    Product.bulkCreate([
      {
        name: "camisa",
        price: 2000,
        description: "una bella camisa",
        thumbnail: "https://i.imgur.com/BY9MiuQ.png",
        image: "una bella image",
        stock: 4,
        reviews: [7, 6, 9, 10, 9, 10],
      },
      {
        name: "pantalon",
        price: 2200,
        description: "un pantalon gris",
        thumbnail: "https://i.imgur.com/XTQuyir.png",
        image: "una bella imagen de pantalon",
        stock: 14,
        reviews: [8, 8],
      },
      {
        name: "remera",
        price: 1000,
        description: "una remera dark",
        thumbnail: "https://i.imgur.com/af9yLS4.png",
        image: "una bella image",
        stock: 6,
        reviews: [7, 5, 6],
      },
      {
        name: "campera",
        price: 4800,
        description: "una campera muy abrigada",
        thumbnail: "https://i.imgur.com/JEDAPAg.png",
        image: "una bella imagen de campera",
        stock: 2,
        reviews: [8, 10, 10],
      },
      {
        name: "zapatillas deportivas",
        price: 3000,
        description: "zapatillas nike",
        thumbnail:
          "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0b96861e/products/NI_AO0352-005/NI_AO0352-005-1.JPG",
        image: "NIKE ;)",
        stock: 2,
        reviews: [8, 10, 10, 7, 8],
      },
      {
        name: "botas de cuero",
        price: 8000,
        description: "botas de cuero",
        thumbnail:
          "https://bizarro.vteximg.com.br/arquivos/ids/619020-1000-1000/BOTAS-CA%C3%91A-MEDIA-MUJER-B166-CUERO-DOMINGUEZ_23321.jpg",
        image: "botas de cuero flama",
        stock: 2,
        reviews: [8, 10, 8, 10, 6],
      },
    ]).then(() => console.log("products generated!"));

    await Order.bulkCreate([
      {
        userId: 1,
        ammount: 2000,
        address: "Zaragoza 3032",
        orderStatus: "completed",
      }, //1 camisa
      {
        userId: 2,
        ammount: 4800,
        address: "Uruguay 130",
        orderStatus: "completed",
      }, //1 campera
      {
        userId: 3,
        ammount: 6800,
        address: "Libertador 1037",
        orderStatus: "completed",
      }, //camisa y campera
      {
        userId: 2,
        ammount: 5200,
        address: "Uruguay 130",
        orderStatus: "pending",
      }, //camisa, pantalon y remera
      {
        userId: 1,
        ammount: 5000,
        address: "Zaragoza 3032",
        orderStatus: "completed",
      }, //5 remeras
      {
        userId: 3,
        ammount: 2000,
        address: "Libertador 1037",
        orderStatus: "pending",
      }, //2 remeras
      {
        userId: 1,
        ammount: 3000,
        address: "San Lorenzo 150",
        orderStatus: "pending",
      }, //3 remeras
    ])
      .then(() => console.log("orders generated!"))
      .catch((err) => console.log(err));
  }
  await createUsersProductsOrdersAndCategories();

  OrderProduct.bulkCreate([
    /*Orden 1*/ { orderId: 1, productId: 1, quantity: 1 },
    /*Orden 2*/ { orderId: 2, productId: 4, quantity: 1 },
    /*Orden 3*/ { orderId: 3, productId: 1, quantity: 1 },
    { orderId: 3, productId: 4, quantity: 1 },
    /*Orden 4*/ { orderId: 4, productId: 1, quantity: 1 },
    { orderId: 4, productId: 2, quantity: 1 },
    { orderId: 4, productId: 3, quantity: 1 },
    /*Orden 5*/ { orderId: 5, productId: 3, quantity: 5 },
    /*Orden 6*/ { orderId: 6, productId: 3, quantity: 2 },
    /*Orden 7*/ { orderId: 7, productId: 3, quantity: 3 },
  ])
    .then(() => console.log("products in cart generated!"))
    .catch((err) => console.log(err));

  CategoryProduct.bulkCreate([
    /*Categoria Calzado*/ { categoryId: 1, productId: 5 },
    { categoryId: 1, productId: 6 },
    /*Categoria Informal*/ { categoryId: 2, productId: 3 },
    { categoryId: 2, productId: 5 },
    /*Categoria Formal*/ { categoryId: 3, productId: 1 },
    { categoryId: 3, productId: 2 },
    { categoryId: 3, productId: 4 },
    { categoryId: 3, productId: 6 },
    /*Categoria Verano*/ { categoryId: 4, productId: 2 },
    { categoryId: 4, productId: 3 },
    { categoryId: 4, productId: 5 },
    /*Categoria Invierno*/ { categoryId: 5, productId: 2 },
    { categoryId: 5, productId: 4 },
    { categoryId: 5, productId: 6 },
  ])
    .then(() => console.log("products in cart generated!"))
    .catch((err) => console.log(err));
}
seed();
