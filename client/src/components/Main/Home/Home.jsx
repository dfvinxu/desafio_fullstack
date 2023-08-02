import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";
import Slider from "./Slider/Slider";

const libraries = ["places"];

const Home = () => {
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
  return (
    <>
      <article className="inputs">
        <SearchBar updateCoords={updateCoords} />
        <Filters
          updateMarkers={updateMarkers}
          center={coords}
          updateTipo={updateTipo}
          moveToCenter={moveToCenter}
        />
      </article>
      <Navbar />
      {tipo ? <Slider markers={markers} /> : null}
      {isLoaded ? (
        <Map
          markers={markers}
          updateCoords={updateCoords}
          updateMarkers={updateMarkers}
          coords={coords}
          tipo={tipo}
          userCenter={userCenter}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Home;
