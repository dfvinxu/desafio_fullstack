const mongoose = require('mongoose');

const museoSchema = new mongoose.Schema({
  NOMBRE: {
    type: String,
    required: true,
  },
  DESCRIPCION_ENTIDAD: {
    type: String,
    required: true,
  },
  HORARIO: String,
  EQUIPAMIENTO: String,
  TRANSPORTE: String,
  ACCESIBILIDAD: [String], // Array de strings
  CONTENT_URL: String,
  NOMBRE_VIA: String,
  CLASE_VIAL: String,
  TIPO_NUM: String,
  NUM: Number,
  LOCALIDAD: String,
  PROVINCIA: String,
  CODIGO_POSTAL: Number,
  BARRIO: String,
  DISTRITO: String,
  COORDENADA_X: Number,
  COORDENADA_Y: Number,
  LATITUD: Number,
  LONGITUD: Number,
  TELEFONO: String,
  EMAIL: String,
});

const Museo = mongoose.model('Museo', museoSchema);

module.exports = Museo;