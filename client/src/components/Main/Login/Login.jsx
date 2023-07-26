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
        <span className="forgot-password">¿Has olvidado la contraseña?</span>
        <button>Iniciar sesión</button>
      </form>
    </section>
    <span className="register-link">¿No tienes una cuenta? <a href="">Regístrate</a></span>
    </>
  );  
};

export default Login;
