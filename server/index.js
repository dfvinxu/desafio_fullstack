const express = require("express");

require("./utils/mongo_db");

const morgan = require("./utils/morgan");
const error404 = require("./middlewares/error404");

const app = express();
const port = 3000;
const router = require("./routes/api-router");
require("./utils/mongo_db");
const morgan = require("./utils/morgan");
const error404 = require("./middlewares/error404");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(express.static("public"));

const dataRoutes = require("./routes/data_routes");
const authRoutes = require("./routes/auth_routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(express.static("public"));

//Rutas API
app.use("/api", dataRoutes);
app.use("/api", router);
app.use("/", authRoutes);

// Errores
app.use(error404);

// Errores
app.use(error404);

app.listen(port, () => {
  console.log(
    `Servidor funcionando en el puerto ${port} http://localhost:${port}`
  );
});
