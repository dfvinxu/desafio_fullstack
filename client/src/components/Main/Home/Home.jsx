import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Map />
      <Navbar />
    </>
  );
};

export default Home;
