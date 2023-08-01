import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Navbar from "./Navbar";
<<<<<<< HEAD
=======
import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar/SearchBar";
>>>>>>> develop

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
  });

  return (
    <>
<<<<<<< HEAD
      <Map />
=======
      <article className="inputs">
        <SearchBar />
        <Filters />
      </article>
>>>>>>> develop
      <Navbar />
      {isLoaded ? <Map /> : <p>Loading...</p>}
    </>
  );
};

export default Home;
