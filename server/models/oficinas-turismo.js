const mongoose = require('mongoose');

const oficinaTurismoSchema = new mongoose.Schema({
    NOMBRE: {
      type: String,
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
    TELEFONO: String,
    EMAIL: String,
    Metro: String,
    Bus: String,
    Renfe: String,
    Bicimad: String,
    Parking: String,
    Aparcamiento: String,
  });
  
  const oficinaTurismo = mongoose.model('Oficina-Turismo', oficinaTurismoSchema);
  
  module.exports = oficinaTurismo;