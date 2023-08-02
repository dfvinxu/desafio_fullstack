const mongoose = require("mongoose");
const markersSchema = {
  TIPO: {
    type: String,
    required: true,
  },
  NOMBRE: {
    type: String,
    required: true,
  },
  DIRECCION: {
    type: String,
    required: true,
  },
  DESCRIPCION: {
    type: String,
    required: false,
  },
  LATITUD: {
    type: Number,
    required: true,
  },
  LONGITUD: {
    type: Number,
    required: true,
  },
};

const modelSchema = new mongoose.Schema(markersSchema);
const Markers = mongoose.model("Markers", modelSchema);

module.exports = Markers;
