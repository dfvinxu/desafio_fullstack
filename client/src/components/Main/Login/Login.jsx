import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import { AuthContext } from '../../../context/authContext';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {updateCookie} = useContext(AuthContext)
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        body: JSON.stringify(userData)
      });

      if (response.ok) {// Cambiar 'your-access-token' por el token recibido del servidor si lo tienes
        updateCookie(Cookies.get("access-token"))
        navigate('/home');
      } else {
        setError('Email o contraseña no coincide');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

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
              onChange={(e) => setEmail(e.target.value)} />
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
          {error && <p className="error-message">{error}</p>}
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
