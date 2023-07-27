
import { useNavigate } from "react-router-dom";
import EnterOptions from "../EnterOptions/EnterOptions";

const Welcome = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    console.log(e.target.value)
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
        <button onClick={() => navigate("/login")}>Iniciar sesión</button>
        <button onClick={() => navigate("/register")}>Registrarse</button>
      </section>
      <EnterOptions />
    </>
  )
};

export default Welcome;
