const express = require('express');
const dataRouter = express.Router();
const dataController = require('../controllers/data_controllers');

//Rutas fuentes

dataRouter.get('/fuentes', dataController.getFuentes);
dataRouter.get('/museos', dataController.getMuseos);
dataRouter.get('/oficinas-turismo', dataController.getOficinas)


module.exports = dataRouter;