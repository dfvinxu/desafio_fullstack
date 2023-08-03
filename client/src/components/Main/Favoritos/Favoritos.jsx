import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import jwt_decode from "jwt-decode"
import { AuthContext } from '../../../context/authContext';

const Favoritos = () => {
  const {authCookie} = useContext(AuthContext)
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  useEffect(() => {
    const fetchFavoriteEvents = async () => {
      try {
        if(authCookie){
          const decodeToken = jwt_decode(authCookie)
          let { user_id } = decodeToken;
          const response = await fetch(`/api/favorites/eventos/${user_id}`);
          if (response.ok) {
            const data = await response.json();
            setFavoriteEvents(data.data);
          } else {
            console.log('Error al obtener los eventos favoritos');
          }
        }

      } catch (error) {
        console.error('Error al obtener los eventos favoritos:', error);
      }
    };

    fetchFavoriteEvents();
  }, [authCookie]);

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