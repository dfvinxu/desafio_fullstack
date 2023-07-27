const mongoose = require("mongoose");
require("../utils/mongo_db");

const monumentosSchema = new mongoose.Schema({
  PK: {
    type: Number,
    required: true,
  },
  NOMBRE: {
    type: String,
    required: true,
  },
  SUBTIPO: {
    type: String,
    required: true,
  },
  DESCRIPCION: {
    type: String,
    required: true,
  },
  FECHA: {
    type: String,
    required: true,
  },
  AUTORES: String,
  DIRECCION: {
    CLASE_VIA: {
      type: String,
      required: true,
    },
    NOMBRE_VIA: {
      type: String,
      required: true,
    },
    NUM: {
      type: String,
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
    COORDENADAS: {
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
    },
  },
});

const Monumentos = mongoose.model("Monumentos", monumentosSchema);

module.exports = Monumentos;