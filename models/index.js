const Category = require("./Category")
const Order = require("./Order")
const Product = require("./Product")
const User = require("./User")

Category.belongsToMany(Product)
Product.belongsToMany(Category)

Product.belongsToMany(Order)
Order.belongsToMany(Product)

User.hasMany(Order)
Order.belongsTo(User)