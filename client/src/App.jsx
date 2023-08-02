import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./styles/styles.scss";
import { AuthContext } from "./context/authContext";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setAuthCookie = (token, isLoggedIn) => {
    Cookies.set("access-token", token, { expires: 7 }); 
    setIsLoggedIn(isLoggedIn);
  };

  
  useEffect(() => {
    const token = Cookies.get("access-token");
    const userId = Cookies.get("userId");
    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

 
  const userCookie = {
    isLoggedIn,
    setAuthCookie
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
