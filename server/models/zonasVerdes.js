const mongoose = require("mongoose");
require("../utils/mongo_db");

const zonasVerdesSchema = new mongoose.Schema({
  PK: {
    type: Number,
    required: true,
  },
  NOMBRE: {
    type: String,
    required: true,
  },
  TRANSPORTE: {
    type: String,
    required: true,
  },
  CLASE_VIA: {
    type: String,
    required: true,
  },
  NOMBRE_VIA: {
    type: String,
    required: true,
  },
  NUM: {
    type: Number,
    required: true,
  },
  BARRIO: {
    type: String,
    required: true,
  },
  DISTRITO: {
    type: String,
    required: true,
  },
  COORDENADA_X: {
    type: Number,
    required: true,
  },
  COORDENADA_Y: {
    type: Number,
    required: true,
  },
  LATITUD: {
    type: Number,
    required: true,
  },
  LONGITUD: {
    type: Number,
    required: true,
  },
});

const zonasVerdes = mongoose.model("Zonas verdes", zonasVerdesSchema);

module.exports = zonasVerdes;