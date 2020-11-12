const {DataTypes, Model} = require("sequelize");
const database = require("../database/database.js");

class Product extends Model {}

Product.init({

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING
  },
  stock: {
    type: DataTypes.INTEGER
  },
  reviews: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  review:{
    type: DataTypes.VIRTUAL,
    get(){
      
    }
  }
},
  {
    sequelize: database,
    modelName: "product",
  }
);

module.exports = Product;