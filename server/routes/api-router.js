const express = require("express");
const router = express.Router();
const User = require("../controllers/users");
const dataController = require("../controllers/data_controllers");

//Rutas fuentes

// router.get("/fuentes", dataController.getFuentes);
// router.get("/museos", dataController.getMuseos);
// router.get("/parks", dataController.getZonasVerdes);
// router.get("/oficinas-turismo", dataController.getOficinas);
router.get("/:type", dataController.getMarkers);
// Rutas users

router.get("/users/:id?", User.getUser);
router.post("/users", User.createUser);
router.delete("/users/:id?", User.deleteUser);

module.exports = router;
