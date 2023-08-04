import { useState, useEffect, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";
import Slider from "./Slider/Slider";
import { AuthContext } from "../../../context/authContext";

const libraries = ["places"];

const Home = () => {
  const {userPosition ,updateUserPosition, updateDestination} = useContext(AuthContext)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [markers, setMarkers] = useState([]);
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });
  const [tipo, setTipo] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
    libraries,
  });

  // Obtenemos la localización del usuario
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let { coords } = pos;
        let { latitude: lat, longitude: lng } = coords;
        updateCoords({ lat, lng });
        updateUserPosition({lat, lng})
      });
    }
  }, []);

  const calculateRoute = async ({origin, destination}) => {
    // eslint-disable-next-line no-undef
    let directionsService = new google.maps.DirectionsService()
    let results = await directionsService.route({
      origin,
      destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING
    })
    setDirectionsResponse(results)
  }

  const clearRoute = () => {
    setDirectionsResponse(null)
  }

  const updateMarkers = (newMarkers) => setMarkers([...markers, ...newMarkers]);
  const updateCoords = (newCoords) => setCoords(newCoords);
  const updateTipo = (newTipo) => setTipo(newTipo);
  const moveToCenter = () => {
    updateDestination({lat: 0, lng: 0})
    updateUserPosition(userPosition)
  }
  return (
    <>
      <article className="inputs">
        <SearchBar updateCoords={updateCoords} isLoaded={isLoaded}/>
        <Filters
          updateMarkers={updateMarkers}
          userPosition={userPosition}
          updateTipo={updateTipo}
          moveToCenter={moveToCenter}
          markers={markers}
        />
      </article>
      <Navbar />
      {tipo ? <Slider markers={markers} calculateRoute={calculateRoute} userPosition={userPosition}/> : null}
      {userPosition && isLoaded ? (
        <Map
          markers={markers}
          updateCoords={updateCoords}
          updateMarkers={updateMarkers}
          tipo={tipo}
          userPositiion={userPosition}
          directionsResponse={directionsResponse}
        />
      ) : <p>Cargando...</p>}
    </>
  );
};

export default Home;
