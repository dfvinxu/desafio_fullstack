const Fuentes = require('../models/fuentes');
const Museo = require('../models/museos');
const OficinasTurismo = require('../models/oficinas-turismo')


// GET FUENTES
const getFuentes = async (req, res) => {
    const data = await Fuentes
            .find()
    res.status(200).json(data);
}

// GET MUSEOS
const getMuseos = async (req, res) => {
    const data = await Museo
            .find()  
    res.status(200).json(data);
};

//GET OFICINAS-TURISMO
const getOficinas = async (req, res) => {
    const data = await OficinasTurismo
            .find()  
    res.status(200).json(data);
  };

module.exports = {
    getFuentes,
    getMuseos,
    getOficinas
}