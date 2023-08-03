import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import jwt_decode from "jwt-decode"
import { AuthContext } from '../../../context/authContext';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai'
import { BsSearch } from "react-icons/bs";
import BackButton from "../BackButton";


const Favoritos = () => {
  const {authCookie} = useContext(AuthContext)
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="favorites">
      <article className="search-bar-container">
        <BackButton link={"/home"} />
        <article className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
          <BsSearch className="icon" />
        </article>
      </article>
      <h2>Tus eventos favoritos</h2>
      <section className="favorites-frame">
        {favoriteEvents.length > 0 ? (
          favoriteEvents.map((event) => (
            <article key={uuidv4()} className="event-card">
              <img 
                src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg"
                alt="event"
                className="event-image"
              />
              <section className="event-info">
                <article className="event-details">
                <p className="event-date">{event.FECHA}</p>
                <h3 className="event-title">{event.TITULO}</h3>
                <p className="event-address">{event.DIRECCION}</p>
                </article>
              
                <section className="event-icons">
                    <AiOutlineHeart className="event-icon" />
                    <a
                      href={`${event["CONTENT-URL"]}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink />
                    </a>
                </section>
              </section>
            </article> 
          ))
        ) : (
          <p>No tienes eventos favoritos.</p>
        )}
      </section>
    </section>
  );
} 

export default Favoritos;