import React, {useState} from 'react'
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    }

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(userData)
      });

      console.log('Respuesta del servidor:', response);

      if (response.ok){
        setIsLoggedIn(true);
      } else {
        alert('Email o contraseña no coincide')
      }
    } catch(error){
      console.error('Error')
    }
  }

  return (
    <>
      <BackButton />
      <section className="form">
        <h2 className="title-login">Bienvenido de nuevo!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input type="text"
             id="email" 
             placeholder="Introduce tu email" 
             value={email}  
             onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span className="forgot-password">
            <a href="">¿Has olvidado la contraseña?</a>
          </span>
          <button>Iniciar sesión</button>
        </form>
      </section>
      <span className="register-link">
        ¿No tienes una cuenta? <Link to={"/register"}>Regístrate</Link>
      </span>
    </>
  );
};

export default Login;
