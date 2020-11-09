const { DataTypes, Model } = require("sequelize");
const database = require("../database/database.js");
const bcrypt = require("bcrypt");

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.firstName + " " + this.lastName;
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msj: "must be a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.ENUM("1", "2", "3"), //1:user, 2:admin, 3:SUDO!
    },
    salt: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize: database,
    modelName: "user",
  }
);

User.beforeCreate((user) => {
  console.log("ENTRA EN EL BEFORE CREATE");
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
