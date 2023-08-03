import { useNavigate } from "react-router-dom";
import EnterOptions from "../EnterOptions/EnterOptions";
import { useContext } from "react";
import { LocationContext } from "../../../context/locationContext";
import LogoSVG from "../../../../public/figma_svg/logo.svg";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  const { updateLocations } = useContext(LocationContext);

  const handleRedirect = (link) => {
    updateLocations(location.pathname);
    setTimeout(() => {
      navigate(link);
    }, 300)
  };
  return (
    <>
      <LogoSVG className="logo"/>
      <section className="language-selector">
        <label htmlFor="español">
          <img src="./svg/spain.svg" alt="español" className="flag" />
          <input
            type="radio"
            name="language"
            id="español"
            hidden
            value="español"
            onClick={handleClick}
          />
        </label>
        <label htmlFor="english">
          <img src="./svg/english.svg" alt="english" className="flag" />
          <input
            type="radio"
            name="language"
            id="english"
            value="english"
            hidden
            onClick={handleClick}
          />
        </label>
      </section>
      <section className="user-actions">
        <button
          onClick={() => handleRedirect("/login")}
          className="login-button"
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => handleRedirect("/register")}
          className="register-button"
        >
          Registrarse
        </button>
      </section>
      <EnterOptions />
    </>
  );
};

export default Welcome;
