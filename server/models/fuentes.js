const mongoose = require("mongoose");
require("../utils/mongo_db");

const fuentesSchema = new mongoose.Schema({
  CODIGO: {
    type: String,
    required: true,
  },
  ZONA: {
    type: String,
    required: true,
  },
  DISTRITO: {
    type: String,
    required: true,
  },
  DIRECCION: {
    type: String,
    required: true,
  },
  COMPLEMENTO_DIRECCION: String,
  COORD: {
    X: {
      type: Number,
      required: true,
    },
    Y: {
      type: Number,
      required: true,
    },
  },
  longitud: {
    type: Number,
    required: true,
  },
  latitud: {
    type: Number,
    required: true,
  },
});

const Fuentes = mongoose.model("Fuentes", fuentesSchema);

module.exports = Fuentes;
