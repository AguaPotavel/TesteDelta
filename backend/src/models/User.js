const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
// const Image = require('./Image')

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const init = async () => {
  await User.sync({ force: false });
};

init();

module.exports = User;
