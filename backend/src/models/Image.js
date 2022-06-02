const { DataTypes } = require("sequelize");
const User = require("./User");
const sequelize = require("../database/index");

const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filepath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Image.belongsTo(User, {
  foreignKey: "userId",
  constraints: true,
});

const init = async () => {
  await Image.sync({ force: false });
};

init();

module.exports = Image;
