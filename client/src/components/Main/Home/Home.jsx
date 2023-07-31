import {useLoadScript} from "@react-google-maps/api"
import Map from "./Map"
import Navbar from "./Navbar" 
import Weather from "../Weather/Weather";
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";


const Home = () => {
  const [locations, setLocations] = useState([])
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  })
  const updateLocations = (newLocations) => setLocations([...locations, newLocations])
  return(
    <>
      <Weather />
      <article className="inputs">
        <SearchBar />
        <Filters />
      </article>
      <Navbar />
      {isLoaded ? <Map/> : <p>Loading...</p>}
    </>
  );
};

export default Home;
