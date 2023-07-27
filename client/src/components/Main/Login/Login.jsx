import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

const Login = () => {
  return(
    <>
    <BackButton />
    <section className="form">
      <h2 className="title-login">Bienvenido de nuevo!</h2>
      <form action="">
        <label htmlFor="email">
          <input type="text" id="email" placeholder="Introduce tu email"/>
        </label>
        <label htmlFor="password">
          <input type="password" id="password" placeholder="Introduce tu contraseña"/>
        </label>
        <span className="forgot-password"><a href="">¿Has olvidado la contraseña?</a></span>
        <button>Iniciar sesión</button>
      </form>
    </section>
    <span className="register-link">¿No tienes una cuenta? <Link to={"/register"}>Regístrate</Link></span>
    </>
  );  
};

export default Login;
