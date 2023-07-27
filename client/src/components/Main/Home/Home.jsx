import React from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map/Map";

function Home() {
  return (
    <section className="home">
      <Map />
      <Navbar />
    </section>
  );
}

export default Home;
