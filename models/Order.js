const { DataTypes, Model } = require("sequelize");
const database = require("../database/database.js");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      model: "users",
      key: "id",
    },
    userEmail: {
      type: DataTypes.STRING,
      model: "users",
      key: "email",
    },
    ammount: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    orderStatus: {
      type: DataTypes.ENUM("pending", "completed"),
    },
    recipient: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: database,
    modelName: "order",
  }
);

module.exports = Order;
