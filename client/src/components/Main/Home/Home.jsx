import { useState, useEffect } from "react";
import {useLoadScript} from "@react-google-maps/api"
import Map from "./Map"
import Navbar from "./Navbar" 
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";



const Home = () => {
  const [markers, setMarkers] = useState([])
  const [coords, setCoords] = useState({
    lat: 0, lng: 0
  })
  const [tipo, setTipo] = useState(null)
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  })

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        let { coords } = pos
        let {latitude: lat, longitude: lng} = coords
        updateCoords({lat, lng})
      })
    }
  }, [])

  const updateMarkers = (newMarkers) => setMarkers([...newMarkers])
  const updateCoords = (newCoords) => setCoords(newCoords)
  const updateTipo = (newTipo) => setTipo(newTipo)
  return(
    <>
      <article className="inputs">
        <SearchBar />
        <Filters updateMarkers={updateMarkers} center={coords} updateTipo={updateTipo}/>
      </article>
      <Navbar />
      {isLoaded ? <Map markers={markers} updateCoords={updateCoords} updateMarkers={updateMarkers} coords={coords} tipo={tipo}/> : <p>Cargando...</p>}
    </>
  );
};

export default Home;
