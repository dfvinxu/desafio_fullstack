const { DataTypes } = require("sequelize");
const db = require("../utils/db_conn");
const User = require("./users-sequelize");

const Evento = db.define(
  "Evento",
  {
    eventId: {
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
    TITULO: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    DIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    FECHA: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    HORA: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

(async () => await db.sync())();

module.exports = Evento;