import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineHeart, AiOutlineLink } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { format } from "date-fns"; // for changing the date
import { es } from "date-fns/locale";
import { IoIosArrowBack } from "react-icons/io";
//  Spanish locale
import BackButton from "../BackButton";
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
    <section className="events">
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
      <h1>Eventos</h1>
      <section className="event-frame">
        {filteredEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <article key={event.id} className="event-card">
              <img
                src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg"
                alt="event"
                className="event-image"
              />
              <section className="event-info">
                <article className="event-details">
                  <p className="event-date">{formatDate(event.FECHA)}</p>
                  <h2 className="event-title">{event.TITULO}</h2>
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
        )}
      </section>
    </section>
  );
};

export default EventList;
