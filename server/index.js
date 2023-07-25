const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/api-router");

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(
    `Servidor funcionando en el puerto ${port} http://localhost:${port}`
  );
});
