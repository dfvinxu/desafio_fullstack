import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar/SearchBar";
import Icons from "./Icons/Icons";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <SearchBar />
      <Icons />
      <Map />
      <Navbar />
    </>
  );
};

export default Home;
