const Fuentes = require("../models/fuentes");
const Museo = require("../models/museos");
const OficinasTurismo = require("../models/oficinas-turismo");
const zonasVerdes = require("../models/zonasVerdes");
const Piscinas = require("../models/piscinas");
const Markers = require("../models/markers");

// GET FUENTES
const getFuentes = async (req, res) => {
  let { lat, lng } = req.query;
  console.log("se hace una petición con estos parámetros" + lat + lng);
  const data = await Fuentes.find({
    latitud: { $gt: +lat - 0.02, $lt: +lat + 0.02 },
    longitud: { $gt: +lng - 0.02, $lt: +lng + 0.02 },
  });
  res.status(200).json(data);
};

// GET MUSEOS
const getMuseos = async (req, res) => {
  const data = await Museo.find();
  res.status(200).json(data);
};

//GET OFICINAS-TURISMO
const getOficinas = async (req, res) => {
  const data = await OficinasTurismo.find();
  res.status(200).json(data);
};

//GET MONUMENTOS
const getZonasVerdes = async (req, res) => {
  const data = await zonasVerdes.find();
  res.status(200).json(data);
};

//GET PISCINAS
const getPiscinas = async (req, res) => {
  const data = await Piscinas.find();
  res.status(200).json(data);
};

const getMarkers = async (req, res) => {
  let { type } = req.params;
  console.log(type);
  if (type !== "null") {
    let { lat, lng } = req.query;
    let regex = new RegExp(type, "gi");
    const data = await Markers.find({
      TIPO: regex,
      LATITUD: { $gt: +lat - 0.025, $lt: +lat + 0.025 },
      LONGITUD: { $gt: +lng - 0.025, $lt: +lng + 0.025 },
    });
    res.status(200).json(data);
  }
};

module.exports = {
  getFuentes,
  getMuseos,
  getOficinas,
  getZonasVerdes,
  getPiscinas,
  getMarkers,
};
