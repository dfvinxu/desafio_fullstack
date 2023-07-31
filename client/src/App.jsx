import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./styles/styles.scss";
import { LocationContext } from "./context/locationContext";
import { useState } from "react";
import Cookies from 'js-cookie';

function App() {
  const token = Cookies.get("access-token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userCookie= {
    isLoggedIn, 
    setIsLoggedIn
  }

  return (
    <BrowserRouter>
      <LocationContext.Provider value={userCookie}>
        <Main />
      </LocationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
