const database = require("../database/database")
const Category = require("./Category")
const Order = require("./Order")
const Product = require("./Product")
const User = require("./User")

const {DataTypes, Model} = require("sequelize");

//TABLAS PIVOT
class OrderProduct extends Model { }
OrderProduct.init({
  quantity: DataTypes.INTEGER
}, {sequelize: database, modelName: "order_product", freezeTableName: true});

class CategoryProduct extends Model { }
CategoryProduct.init({},
  {sequelize: database, modelName: "category_product", freezeTableName: true});

class ProductUser extends Model { }
ProductUser.init({
  review: DataTypes.INTEGER
}, {sequelize: database, modelName: "product_user", freezeTableName: true});
/////////////////////////

Category.belongsToMany(Product, {through: CategoryProduct})
Product.belongsToMany(Category, {through: CategoryProduct})

Product.belongsToMany(Order, {through: OrderProduct})
Order.belongsToMany(Product, {through: OrderProduct})

Product.hasMany(OrderProduct)
Order.hasMany(OrderProduct)

User.hasMany(Order)
Order.belongsTo(User)

//ProductUser Pivot Table associations
User.hasMany(ProductUser)
ProductUser.belongsTo(User)
Product.hasMany(ProductUser)
ProductUser.belongsTo(Product)

module.exports = {Category, Product, Order, User, OrderProduct, CategoryProduct, ProductUser}

  // orderId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Order,
  //     key: 'id'
  //   }
  // },
  // productId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Product,
  //     key: 'id'
  //   }
  // },