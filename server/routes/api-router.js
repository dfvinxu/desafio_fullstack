const express = require("express");
const router = express.Router();
const User = require("../controllers/users");
const dataController = require("../controllers/data_controllers");
const favorites = require('../controllers/favorites')

//Rutas fuentes

router.get("/fuentes", dataController.getFuentes);
router.get("/museos", dataController.getMuseos);
router.get("/parks", dataController.getZonasVerdes);
router.get("/oficinas-turismo", dataController.getOficinas);

// Rutas users

router.get("/users/:id?", User.getUser);
router.post("/users", User.createUser);
router.delete("/users/:id?", User.deleteUser);

//Rutas Favoritos
router.get('/favorites:id?', favorites.getFavorites);
router.get('/favorites/eventos/:userId', favorites.getEventos);
router.post('/favorites', favorites.createFavorite);
router.post('/favorites/eventos', favorites.createEvento);
router.delete('/favorites/:id?', favorites.deleteFavorite);
router.delete('/favorites/eventos', favorites.deleteEvento);

module.exports = router;
