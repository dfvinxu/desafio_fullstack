import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LocationContext } from "../../context/locationContext";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Eventos from "./Eventos/Eventos";
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
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </LocationContext.Provider>
    </main>
  );
};

export default Main;
