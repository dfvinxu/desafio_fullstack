const Favorites = require('../models/favoritos-sequalize')
const Evento = require("../models/eventosFav-sequalize");

const createFavorite = async (req, res) => {
    try {
      let { userId, TIPO, NOMBRE, DIRECCION, DESCRIPCION, LATITUD, LONGITUD } = req.body;
  
      const newFavorite = await Favorites.create({
        userId,
        TIPO,
        NOMBRE,
        DIRECCION,
        DESCRIPCION,
        LATITUD,
        LONGITUD,
      });
  
      res.status(200).json({
        status: 200,
        message: `El favorito ${newFavorite.NOMBRE} ha sido creado`,
      });
    } catch (error) {
      console.log(error.message);
      res.status(403).json({
        status: 403,
        message: "No se pudo crear el favorito",
      });
    }
};

const getFavorites = async (req, res) => {
    try {
      const { userId } = req.params;
      const favorites = await Favorites.findAll({
        where: {
          userId: userId,
        },
      });
  
      res.status(200).json({
        status: 200,
        data: favorites,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        message: "Error al obtener los favoritos",
      });
    }
};

const deleteFavorite = async (req, res) => {
    try {
      const { favoriteId } = req.params;
      const favorite = await Favorites.findByPk(favoriteId);
  
      if (!favorite) {
        return res.status(404).json({
          status: 404,
          message: "Favorito no encontrado",
        });
      }
      await favorite.destroy();
  
      res.status(200).json({
        status: 200,
        message: `El favorito ha sido eliminado`,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        message: "Error al eliminar el favorito",
      });
    }
};

const createEvento = async (req, res) => {
  try {
    let { userId, TITULO, DIRECCION, FECHA, HORA } = req.body;

    const newEvento = await Evento.create({
      userId,
      TITULO,
      DIRECCION,
      FECHA,
      HORA,
    });

    res.status(200).json({
      status: 200,
      message: `El evento ${newEvento.TITULO} ha sido creado`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(403).json({
      status: 403,
      message: "No se pudo crear el evento",
    });
  }
};

const getEventos = async (req, res) => {
  try {
    const { userId } = req.params;
    const eventos = await Evento.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(200).json({
      status: 200,
      data: eventos,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: "Error al obtener los eventos",
    });
  }
};

const deleteEvento = async (req, res) => {
  try {
    const { eventId } = req.params;
    const evento = await Evento.findByPk(eventId);

    if (!evento) {
      return res.status(404).json({
        status: 404,
        message: "Evento no encontrado",
      });
    }
    await evento.destroy();

    res.status(200).json({
      status: 200,
      message: `El evento ha sido eliminado`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: "Error al eliminar el evento",
    });
  }
};

  module.exports = {
    createFavorite,
    getFavorites,
    deleteFavorite,
    createEvento,
    getEventos,
    deleteEvento
  }
  