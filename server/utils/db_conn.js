const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a SQL establecida");
  } catch (error) {
    console.log("ERROR: No se ha podido conectar a la BD");
    console.log(error);
  }
})();

module.exports = sequelize;
