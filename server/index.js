const express = require("express");
const app = express();
const router = require("./routes/api-router");
const port = 3000;
require("./utils/mongo_db");
const dataRoutes = require("./routes/data_routes");
const authRoutes = require("./routes/auth_routes");

const morgan = require("./utils/morgan");
const error404 = require("./middlewares/error404");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(express.static("public"));

//Rutas API
app.use("/api", router);

// Rutas User
app.use("/", authRoutes);

// Errores
app.use(error404);

app.listen(port, () => {
  console.log(
    `Servidor funcionando en el puerto ${port} http://localhost:${port}`
  );
});
