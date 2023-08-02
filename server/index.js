const express = require("express");
const app = express();
const router = require("./routes/api-router");
const port = 3000;
const authRoutes = require("./routes/auth_routes");
const error404 = require("./middlewares/error404");
const morgan = require("./utils/morgan");
const session = require("express-session");
const passport = require("passport");
let cors = require("cors");
const helmet = require("helmet");
require("./utils/mongo_db");

const allowedOrigins = [
  "http://localhost:5173",
  "https://eyh53wm8p8.eu-west-1.awsapprunner.com/",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));
app.use(express.static("public"));
app.use(session({ secret: "SECRET" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());

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
