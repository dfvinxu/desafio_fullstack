import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import EnterOptions from "../EnterOptions/EnterOptions";
import { useContext, useState } from "react";
import { LocationContext } from "../../../context/locationContext";

const Register = () => {
  const { updateLocations } = useContext(LocationContext);
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    surname: "",
    birth_date: "",
    nationality: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const { password, repeatPassword } = formData;

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Usuario registrado')
      } else{
        alert('Error al crear usuario')
      }
    } catch(error){
      console.log('error')
    }
  }

  return (
    <>
      <BackButton />
      <section className="form-register">
        <h2 className="title-register">¡Hola! Regístrate para empezar</h2>
        <form className="form"  onSubmit={handleSubmit} >
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
          <label htmlFor="name">
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange} /> 
          </label>
          <label htmlFor="surname">
            <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Apellidos"
            value={formData.surname}
            onChange={handleChange}/> 
          </label>
          <label htmlFor="birth_date">
            <input
            type="text"
            id="birth_date"
            name="birth_date"
            placeholder="Fecha de nacimiento"
            value={formData.birth_date} 
            onChange={handleChange}/> 
          </label>
          <select htmlFor="nationality"  id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
          <option value="NULL">Seleccione una nacionalidad</option>
            <option value='ES'>ES</option>
            <option value="FR">FR</option>
            <option value="GR">GR</option>
          </select>
          <label htmlFor="email">
            <input type="email" id="email" name="email" placeholder="Email" 
            value={formData.email}
            onChange={handleChange}/>
          </label>          
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="repeatPassword">
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
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
