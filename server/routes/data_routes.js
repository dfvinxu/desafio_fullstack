const express = require('express');
const dataRouter = express.Router();
const dataController = require('../controllers/data_controllers');

//Rutas fuentes

dataRouter.get('/fuentes', dataController.getFuentes);
dataRouter.get('/museos', dataController.getMuseos);
dataRouter.get('/oficinas-turismo', dataController.getOficinas);
dataRouter.get('/piscinas', dataController.getPiscinas);
dataRouter.get('/zonas-verdes', dataController.getZonasVerdes);


module.exports = dataRouter;