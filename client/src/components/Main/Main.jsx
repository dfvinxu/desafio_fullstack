import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LocationContext } from "../../context/locationContext";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
import Profile from "./Profile/Profile";
import Eventos from "./Eventos/Eventos";
import IntermediatePage from "./IntermediatePage/IntermediatePage";
import Favoritos from './Favoritos/Favoritos'
const Main = () => {
  const [locations, setLocations] = useState([]);
  const updateLocations = (newLocation) =>
    setLocations([...locations, newLocation]);
  const data = {
    locations,
    updateLocations,
  };
  console.log(locations);

 

  return (
    <main>
      <LocationContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intermediate" element={<IntermediatePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </LocationContext.Provider>
    </main>
  );
};

export default Main;
