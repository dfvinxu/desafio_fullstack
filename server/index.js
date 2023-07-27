const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/api-router");
const authRoutes = require("./routes/auth_routes");
require("./utils/mongo_db");
const morgan = require("./utils/morgan");
const error404 = require("./middlewares/error404");
const session = require("express-session");
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(express.static("public"));

app.use(session({ secret: "SECRET" }));
app.use(passport.initialize());
app.use(passport.session());

//Rutas API
app.use("/api", router);
app.use("/auth", authRoutes);

// Errores
app.use(error404);

app.listen(port, () => {
  console.log(
    `Servidor funcionando en el puerto ${port} http://localhost:${port}`
  );
});
