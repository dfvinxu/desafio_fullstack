const Fuentes = require('../models/fuentes');
const Museo = require('../models/museos');
const OficinasTurismo = require('../models/oficinas-turismo')


// GET FUENTES
const getFuentes = async (req, res) => {
    const data = await Fuentes
            .find()
            .select('CODIGO ZONA DISTRITO DIRECCION COMPLEMENTO_DIRECCION COORD.X COORD.Y longitud  latitud')
    res.status(200).json(data);
}

// GET MUSEOS
const getMuseos = async (req, res) => {
    const data = await Museo
            .find()
            .select( 'NOMBRE DESCRIPCION_ENTIDAD HORARIO EQUIPAMIENTO TRANSPORTE ACCESIBILIDAD CONTENT_URL NOMBRE_VIA CLASE_VIAL TIPO_NUM NUM LOCALIDAD PROVINCIA CODIGO_POSTAL BARRIO DISTRITO COORDENADA_X COORDENADA_Y LATITUD LONGITUD TELEFONO EMAIL' );
  
    res.status(200).json(data);
};

//GET OFICINAS-TURISMO
const getOficinas = async (req, res) => {
    const data = await OficinasTurismo
            .find()
            .select( 'NOMBRE DESCRIPCION_ENTIDAD HORARIO EQUIPAMIENTO TRANSPORTE ACCESIBILIDAD CONTENT_URL NOMBRE_VIA CLASE_VIAL TIPO_NUM NUM LOCALIDAD PROVINCIA CODIGO_POSTAL BARRIO DISTRITO COORDENADA_X COORDENADA_Y LATITUD LONGITUD TELEFONO EMAIL' );
  
    res.status(200).json(data);
  };

module.exports = {
    getFuentes,
    getMuseos,
    getOficinas
}