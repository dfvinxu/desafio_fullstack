import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import EnterOptions from "../EnterOptions/EnterOptions";
import { useContext } from "react";
import { LocationContext } from "../../../context/locationContext";
import axios from "axios";

const Register = () => {
  const { updateLocations } = useContext(LocationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const registerUser = async (obj) => {
      let res = await axios.post("/auth/signup", obj);
      console.log(res);
    };
    registerUser(data);
  };
  return (
    <>
      <BackButton />
      <section className="form-register">
        <h2 className="title-register">¡Hola! Regístrate para empezar</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="user">
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Nombre de usuario"
            />
          </label>
          <label htmlFor="email">
            <input type="email" id="email" name="email" placeholder="Email" />
          </label>
          <select htmlFor="country">
            <option value="spain">ESPAÑA</option>
            <option value="spain">ESPAÑA</option>
            <option value="spain">ESPAÑA</option>
          </select>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
          </label>
          <label htmlFor="repeat-password">
            <input
              type="password"
              id="repeat-password"
              name="repeat-password"
              placeholder="Confirmar contraseña"
            />
          </label>
          <button>Registrarse</button>
        </form>
        <EnterOptions />
      </section>
      <span className="login-link">
        ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
      </span>
    </>
  );
};

export default Register;
