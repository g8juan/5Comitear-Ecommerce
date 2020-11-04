
const {Sequelize} = require ('sequelize')
const database = new Sequelize("postgres://localhost:5432/ecommerce", {logging: false /*(...msg)=>console.log(msg)*/})

module.exports = database


