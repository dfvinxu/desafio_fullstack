import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./styles/styles.scss";
import { AuthContext } from "./context/authContext";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authCookie, setAuthCookie] = useState("")
  const [userPosition, setUserPosition] = useState({lat: 0, lng: 0})

  useEffect(() => {
    let token = Cookies.get("access-token")
    if (token) {
      setAuthCookie(token)
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false)
    }
  }, [authCookie]);

  const updateCookie = (cookie) => {
    setAuthCookie(cookie)
  }

  const updateUserPosition = ({lat, lng}) => setUserPosition({lat, lng})

  const userCookie = {
    isLoggedIn,
    updateCookie,
    authCookie,
    updateUserPosition,
    userPosition,
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={userCookie}>
        <Main isLoggedIn={isLoggedIn}/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
