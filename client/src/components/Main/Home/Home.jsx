import {useLoadScript} from "@react-google-maps/api"
import Map from "./Map"
import Navbar from "./Navbar" 
import Weather from "../Weather/Weather";
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";


const Home = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  })
  
  return(
    <>
      <Weather/>
      <article className="inputs">
        <SearchBar />
        <Filters />
      </article>
      <Navbar />
      {isLoaded ? <Map /> : <p>Loading...</p>}
    </>
  );
};

export default Home;
