const User = require("./models/User")  

User.bulkCreate([
  {firstName: "Carlos", lastName: "Rodriguez", email: "carlos@gmail.com", password: 1234, address: "La Pichucha 3031"},
  {firstName: "Juan", lastName: "Loza", email: "juan@gmail.com", password: 1234, address: "Pachanga 3032"},
  {
    "firstName": "A0",
    "lastName": "B0",
    "email": "0@g.com",
    "password": 0,
    "address": "Calle0",
    "phone": "0000",
    "userType": "1"
  },
  {
    "firstName": "A1",
    "lastName": "B1",
    "email": "1@g.com",
    "password": 2,
    "address": "Calle1",
    "phone": "1111",
    "userType": "1"
  },
  {
    "firstName": "A2",
    "lastName": "B2",
    "email": "2@g.com",
    "password": 4,
    "address": "Calle2",
    "phone": "2222",
    "userType": "1"
  },
  {
    "firstName": "A3",
    "lastName": "B3",
    "email": "3@g.com",
    "password": 6,
    "address": "Calle3",
    "phone": "3333",
    "userType": "1"
  },
  {
    "firstName": "A4",
    "lastName": "B4",
    "email": "4@g.com",
    "password": 8,
    "address": "Calle4",
    "phone": "4444",
    "userType": "1"
  },
  {
    "firstName": "A5",
    "lastName": "B5",
    "email": "5@g.com",
    "password": 10,
    "address": "Calle5",
    "phone": "5555",
    "userType": "1"
  },
  {
    "firstName": "A6",
    "lastName": "B6",
    "email": "6@g.com",
    "password": 12,
    "address": "Calle6",
    "phone": "6666",
    "userType": "1"
  },
  {
    "firstName": "A7",
    "lastName": "B7",
    "email": "7@g.com",
    "password": 14,
    "address": "Calle7",
    "phone": "7777",
    "userType": "1"
  },
  {
    "firstName": "A8",
    "lastName": "B8",
    "email": "8@g.com",
    "password": 16,
    "address": "Calle8",
    "phone": "8888",
    "userType": "1"
  },
  {
    "firstName": "A9",
    "lastName": "B9",
    "email": "9@g.com",
    "password": 18,
    "address": "Calle9",
    "phone": "9999",
    "userType": "1"
  },
  {
    "firstName": "A10",
    "lastName": "B10",
    "email": "10@g.com",
    "password": 20,
    "address": "Calle10",
    "phone": "10101010",
    "userType": "1"
  },
  {
    "firstName": "A11",
    "lastName": "B11",
    "email": "11@g.com",
    "password": 22,
    "address": "Calle11",
    "phone": "11111111",
    "userType": "1"
  },
  {
    "firstName": "A12",
    "lastName": "B12",
    "email": "12@g.com",
    "password": 24,
    "address": "Calle12",
    "phone": "12121212",
    "userType": "1"
  },
  {
    "firstName": "A13",
    "lastName": "B13",
    "email": "13@g.com",
    "password": 26,
    "address": "Calle13",
    "phone": "13131313",
    "userType": "1"
  },
  {
    "firstName": "A14",
    "lastName": "B14",
    "email": "14@g.com",
    "password": 28,
    "address": "Calle14",
    "phone": "14141414",
    "userType": "1"
  },
  {
    "firstName": "A15",
    "lastName": "B15",
    "email": "15@g.com",
    "password": 30,
    "address": "Calle15",
    "phone": "15151515",
    "userType": "1"
  }
]).then(() => {console.log("Tabla Bulk generada")})