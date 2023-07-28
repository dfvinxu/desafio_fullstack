import { useMemo } from "react";
import {useLoadScript} from "@react-google-maps/api"
import Map from "./Map"
import Navbar from "./Navbar" 
import Weather from "../Weather/Weather";


const Home = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  })

  if(!isLoaded) return <div >Loading...</div>
  
  return(
    <>
      <Weather />
      <Navbar />
      <Map />
      
    </>
  );
};

export default Home;
