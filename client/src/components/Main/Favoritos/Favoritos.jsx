import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Favoritos = () => {
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  
  useEffect(() => {
    const fetchFavoriteEvents = async () => {
      try {
        const userId = Cookies.get("userId");
        const response = await fetch(`/api/favorites/eventos/${userId}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setFavoriteEvents(data);
        } else {
          console.log('Error al obtener los eventos favoritos');
        }
      } catch (error) {
        console.error('Error al obtener los eventos favoritos:', error);
      }
    };
    
    fetchFavoriteEvents();
  }, []);
  
  return (
    <div>
      <h2>Tus eventos favoritos</h2>
      <ul>
        { favoriteEvents.map((event, index) => (
          <li key={index}>
            <h3>{event.TITULO}</h3>
            <p>Dirección: {event.DIRECCION}</p>
            <p>Fecha: {event.FECHA}</p>
            <p>Hora: {event.HORA}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
