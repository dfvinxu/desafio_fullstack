
import { useNavigate } from "react-router-dom";
import EnterOptions from "../EnterOptions/EnterOptions";
import { useContext } from "react";
import { LocationContext } from "../../../context/locationContext";

const Welcome = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    console.log(e.target.value)
  }
  const {updateLocations} = useContext(LocationContext)

  const handleRedirect = (link) => {
    updateLocations(location.pathname)
    navigate(link)
  }
  return(
    <>
      <img src="./logo-placeholder.png" alt="logo"/>
      <section className="language-selector">
        <label htmlFor="español">
          <img src="./svg/spain.svg" alt="español" className="flag"/>
        <input type="radio" name="language" id="español" hidden value="español" onClick={handleClick}/>
        </label>
        <label htmlFor="english" >
          <img src="./svg/english.svg" alt="english" className="flag"/>
          <input type="radio" name="language" id="english" value="english" hidden onClick={handleClick}/>
        </label>
      </section>
      <section className="user-actions">
        <button onClick={() => handleRedirect("/login")}>Iniciar sesión</button>
        <button onClick={() => handleRedirect("/register")}>Registrarse</button>
      </section>
      <EnterOptions />
    </>
  )
};

export default Welcome;
