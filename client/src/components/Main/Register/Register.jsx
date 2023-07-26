import React from "react";
import BackButton from "../BackButton/BackButton";
import EnterOptions from "../EnterOptions/EnterOptions";

const Register = () => {
  return(
    <> 
      <BackButton />
      <section className="form-register">
        <h2 className="title-register">
          ¡Hola! Regístrate para empezar
        </h2>
        <form className="form">
          <label htmlFor="user">
            <input type="text" id="user" name="user" placeholder="Nombre de usuario"/>
          </label>
          <label htmlFor="email">
            <input type="email" id="email" name="email" placeholder="Email"/>
          </label>
          <select htmlFor="country">
            <option value="">ESPAÑA</option>
            <option value="">ESPAÑA</option>
            <option value="">ESPAÑA</option>
          </select>
          <label htmlFor="password">
            <input type="password" id="password" name="password" placeholder="Contraseña"/>
          </label>
          <label htmlFor="repeat-password">
            <input type="password" id="repeat-password" name="repeat-password" placeholder="Confirmar contraseña"/>
          </label>
          <button>Registrarse</button>
        </form>
        <EnterOptions />
      </section>
      <span className="login-link">¿Ya tienes una cuenta? <a href="">Iniciar sesión</a></span>
    </>
  );
};

export default Register;
