import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

const Favoritos = () => {
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  
  useEffect(() => {
    const fetchFavoriteEvents = async () => {
      try {
        const userId = Cookies.get("user-id");
        const response = await fetch(`/api/favorites/eventos/${userId}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setFavoriteEvents(data.data);
          console.log(favoriteEvents);
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
    <section>
      <h2>Tus eventos favoritos</h2>
      <ul>
        {favoriteEvents.length > 0 ? (
          favoriteEvents.map((event) => (
            <li key={uuidv4()}>
              <h3>{event.TITULO}</h3>
              <p>Dirección: {event.DIRECCION}</p>
              <p>Fecha: {event.FECHA}</p>
              <p>Hora: {event.HORA}</p>
            </li>
          ))
        ) : (
          <p>No tienes eventos favoritos.</p>
        )}
      </ul>
    </section>
  );
} 

export default Favoritos;
