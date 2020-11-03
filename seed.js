require("./database/database")
const {User} = require("./models/index")

User.create({firstName: "Juan", lastName: "Loza", email: "juana@gmail.com", password: "1231", address: "Pachanga 3032", phone: "2332432", userType: "3"}).then(() => {
  console.log("Super user generado")
}).catch(err => console.log(err))