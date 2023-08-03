const { DataTypes } = require("sequelize");
const db = require("../utils/db_conn");
const User = require("./users-sequelize");

const Favorite = db.define(
  "Favorite",
  {
    favoriteId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "userId",
      },
    },
    TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DIRECCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LATITUD: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    LONGITUD: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

(async () => await db.sync())();
module.exports = Favorite;