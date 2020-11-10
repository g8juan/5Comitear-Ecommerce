const {DataTypes, Model} = require("sequelize");
const database = require("../database/database.js");

class Order extends Model {}

Order.init({
  userId: {
    type:DataTypes.INTEGER,
    model:"users",
    key:"id"
  },
  ammount: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
  recipient: {
    type: DataTypes.STRING,
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