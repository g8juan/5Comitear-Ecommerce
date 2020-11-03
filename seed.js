const {User} = require("./models/index")

User.bulkCreate([
  {firstName: "Carlos", lastName: "Rodriguez", email: "carlos@gmail.com", password: 1234, address: "La Pichucha 3031", phone: "2332132", userType: "2"},
  {firstName: "Juan", lastName: "Loza", email: "juan@gmail.com", password: 1234, address: "Pachanga 3032", phone: "2332432", userType: "3"},
]).then(() => {console.log("Tabla Bulk generada")})