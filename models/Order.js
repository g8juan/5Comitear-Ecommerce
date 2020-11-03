const {DataTypes, Model} = require("sequelize");
const database = require("../database/database.js");

class Order extends Model {}

Order.init({

  ammount: {
    type: DataTypes.INTEGER,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderStatus: {
    type: DataTypes.ENUM("pending","completed"),
  },
},
  {
    sequelize: database,
    modelName: "order",
  }
);

module.exports = Order;