const express = require("express");
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

app.use("/api", router);

// Errores
app.use(error404);

app.listen(port, () => {
  console.log(
    `Servidor funcionando en el puerto ${port} http://localhost:${port}`
  );
});
