import "../styles/styles.scss";
import Navbar from "./components/Header/Navbar/Navbar";
import Map from "./components/Main/Map/Map";

function App() {
  return (
    <div className="App">
      <Map />
      <Navbar />
    </div>
  );
}

export default App;
