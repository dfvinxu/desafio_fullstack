import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LocationContext } from "../../context/locationContext";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
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
        </Routes>
      </LocationContext.Provider>
    </main>
  );
};

export default Main;
