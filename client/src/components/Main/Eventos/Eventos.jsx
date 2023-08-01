import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { format } from "date-fns"; // for changing the date
import { es } from "date-fns/locale"; //  Spanish locale

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
                <AiOutlineHeart size={20} color="#4B8BFF" />
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default EventList;
