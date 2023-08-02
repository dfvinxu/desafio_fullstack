import React, { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import jwt_decode from "jwt-decode"
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { format } from "date-fns"; // for changing the date
import { es } from "date-fns/locale"; //  Spanish locale
import { AuthContext } from "../../../context/authContext";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { authCookie } = useContext(AuthContext)
  const [favoriteEvents, setFavoriteEvents] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mdixwt6epk.eu-west-1.awsapprunner.com/v1/eventos"
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "eeee d 'de' MMMM", { locale: es });
    return formattedDate;
  };

  const filteredEvents = events.filter((event) => {
    return event.TITULO.toLowerCase().includes(searchTerm.toLowerCase());
  });


  //FAVORITOS

  
  const handleFavorites = async(event) => {
    try {
      if(authCookie){
        const decodedToken = jwt_decode(authCookie)
        let {user_id: userId} = decodedToken
        const formattedDate = event.FECHA.substring(0, 10);
        const eventFavInfo = {
          userId,
          TITULO: event.TITULO,
          DIRECCION: event.DIRECCION,
          FECHA: formattedDate,
          HORA: event.HORA
        }
        const response = await fetch("/api/favorites/eventos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventFavInfo),
        });
  
        if (response.ok) {
          setFavoriteEvents(true);
          console.log('Guardado correctamente!');
        } else {
          console.log('No se ha guardado');
        }
        const data = await response.json();
        console.log(data.message);
      }

    } catch (error) {
      console.error("Error al agregar el evento a favoritos:", error);
    }
  }

  return (
    <article>
      <header>
        <div className="search-bar-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
          <BsSearch size={20} color="#808080" />
        </div>
      </header>
      <div className="event-frame">
        <h1>Eventos</h1>
        {filteredEvents.length === 0 ? (
          <div>No events found.</div>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img
                src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg"
                alt="Event"
                className="event-img"
              />
              <article className="event-details">
                <p>{formatDate(event.FECHA)}</p>
                <h2>{event.TITULO}</h2>
                <p>{event.DIRECCION}</p>
                <p>Hora: {event.HORA}</p>
              </article>
              <div className="event-icons">
                <AiOutlineHeart size={20} color="#4B8BFF" onClick={() => handleFavorites(event)}/>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default EventList;
