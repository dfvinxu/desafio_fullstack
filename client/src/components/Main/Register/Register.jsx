import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import EnterOptions from "../EnterOptions/EnterOptions";
import { LocationContext } from "../../../context/locationContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formSection, setFormSection] = useState(1);

  const [formData, setFormData] = useState({
    user: "",
    name: "",
    surname: "",
    birth_date: "",
    nationality: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const validations = {
      user: "El nombre de usuario es obligatorio.",
      name: "El nombre es obligatorio.",
      surname: "Los apellidos son obligatorios.",
      birth_date: "La fecha de nacimiento es obligatoria.",
      nationality: "Seleccione una nacionalidad.",
      email: "El email es obligatorio.",
      password:
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un dígito.",
      repeatPassword: "Las contraseñas no coinciden.",
    };

    const errors = {};

    for (const field in validations) {
      if (!formData[field]) {
        errors[field] = validations[field];
      } else if (field === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
          errors.email = validations.email;
        }
      } else if (field === "password") {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(formData.password)) {
          errors.password = validations.password;
        }
      } else if (
        field === "repeatPassword" &&
        formData.password !== formData.repeatPassword
      ) {
        errors.repeatPassword = validations.repeatPassword;
      }
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await fetch("/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Usuario registrado");

          // Redirect to IntermediatePage after successful registration
          navigate("/intermediate");

          // After 3 seconds, redirect to /login
          setTimeout(() => {
            navigate("/login");
          }, 300);
        } else {
          alert("Error al crear usuario");
        }
      } catch (error) {
        console.log("error");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleContinue = async () => {
    setFormSection(2); // directly setting to the second section
  };

  return (
    <>
      <BackButton link={"/"}/>
      <section className="form-register">
        <h2 className="title-register">
          {formSection === 1
            ? "¡Hola! Regístrate para empezar"
            : "Datos adicionales"}
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          {formSection === 1 && (
            <>
              <label htmlFor="user">
                <input
                  type="text"
                  id="user"
                  name="user"
                  placeholder="Nombre de usuario"
                  value={formData.user}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </label>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </label>
              <label htmlFor="surname">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Apellidos"
                  value={formData.surname}
                  onChange={handleChange}
                />
                {errors.surname && (
                  <span className="error-message">{errors.surname}</span>
                )}
              </label>
              <button className="continuar-button" onClick={handleContinue}>
                Continuar
              </button>
            </>
          )}
          {formSection === 2 && (
            <>
              <label htmlFor="birth_date">
                <input
                  type="date"
                  min="1950-01-01"
                  max="2018-12-31"
                  id="birth_date"
                  name="birth_date"
                  placeholder="Fecha de nacimiento"
                  value={formData.birth_date}
                  onChange={handleChange}
                />
                {errors.birth_date && (
                  <span className="error-message">{errors.birth_date}</span>
                )}
              </label>
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              >
                <option value="NULL">Nacionalidad</option>
                <option value="Russia"> Russia</option>
                <option value="Germany">Germany</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Poland">Poland</option>
                <option value="Romania">Romania</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Belgium">Belgium</option>
                <option value="Greece">Greece</option>
                <option value="Portugal">Portugal</option>
                <option value="Serbia">Serbia</option>
                <option value="Finland">Finland</option>
                <option value="Norway">Norway</option>
                <option value="Iceland">Iceland</option>
                <option value="Kosovo">Kosovo</option>
              </select>
              {errors.nationality && (
                <span className="error-message">{errors.nationality}</span>
              )}
              <label htmlFor="password" className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
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
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </label>

              <label
                htmlFor="repeatPassword"
                className="password-input-container"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Confirmar contraseña"
                  value={formData.repeatPassword}
                  onChange={handleChange}
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
                {errors.repeatPassword && (
                  <span className="error-message">{errors.repeatPassword}</span>
                )}
              </label>
              <button className="registrarse-button" onClick={handleSubmit}>
                Registrarse
              </button>
            </>
          )}
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
