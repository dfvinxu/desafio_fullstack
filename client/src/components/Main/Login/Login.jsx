import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import { AuthContext } from "../../../context/authContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateCookie } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        updateCookie(Cookies.get("access-token"));

        // Redirect to IntermediatePage
        navigate("/intermediate");

        // After 3 seconds, redirect to /home
        setTimeout(() => {
          navigate("/home");
        }, 300);
      } else {
        setError("Email o contraseña no coincide");
      }
    } catch (error) {
      console.error({error});
    }
  };

  // password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <BackButton link={"/"}/>
      <section className="form">
        <h2 className="title-login">Bienvenido de nuevo!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              placeholder="Introduce tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisibility}
                className="eye-icon"
              />
            ) : (
              <AiOutlineEye
                onClick={togglePasswordVisibility}
                className="eye-icon"
              />
            )}
          </label>
          {error && <p className="error-message">{error}</p>}
          <span className="forgot-password">
            <a href="">¿Has olvidado la contraseña?</a>
          </span>
          <button className="login-button2 custom-button">
            Iniciar sesión
          </button>
        </form>
      </section>
      <span className="register-link">
        ¿No tienes una cuenta? <Link to={"/register"}>Regístrate</Link>
      </span>
    </>
  );
};

export default Login;