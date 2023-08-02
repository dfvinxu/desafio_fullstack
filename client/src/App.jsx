import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./styles/styles.scss";
import { AuthContext } from "./context/authContext";
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
      <AuthContext.Provider value={userCookie}>
        <Main />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
