const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");


const userSchema = sequelize.define("user", {
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = userSchema;
