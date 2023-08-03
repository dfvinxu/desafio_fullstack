import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";
import Slider from "./Slider/Slider";

const libraries = ["places"];

const Home = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState("")
  const [duration, setDuration] = useState("")

  const [markers, setMarkers] = useState([]);
  const [userCenter, setUserCenter] = useState({
    lat: 0,
    lng: 0
  })
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });
  const [tipo, setTipo] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
    libraries,
  });

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let { coords } = pos;
        let { latitude: lat, longitude: lng } = coords;
        updateCoords({ lat, lng });
        setUserCenter({lat, lng});
      });
    }
  }, []);

  const updateMarkers = (newMarkers) => setMarkers([...newMarkers]);
  const updateCoords = (newCoords) => setCoords(newCoords);
  const updateTipo = (newTipo) => setTipo(newTipo);
  const moveToCenter = () => updateCoords(userCenter)

  console.log(directionsResponse)

  return (
    <>
      <article className="inputs">
        <SearchBar updateCoords={updateCoords} isLoaded={isLoaded}/>
        <Filters
          updateMarkers={updateMarkers}
          center={coords}
          updateTipo={updateTipo}
          moveToCenter={moveToCenter}
        />
      </article>
      <Navbar />
      {tipo ? <Slider markers={markers} calculateRoute={calculateRoute} userCenter={userCenter}/> : null}
      {isLoaded ? (
        <Map
          markers={markers}
          updateCoords={updateCoords}
          updateMarkers={updateMarkers}
          coords={coords}
          tipo={tipo}
          userCenter={userCenter}
          directionsResponse={directionsResponse}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Home;
