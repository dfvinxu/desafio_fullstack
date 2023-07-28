import { Link, useNavigate } from "react-router-dom";

const EnterOptions = () => {
  return(
    <section className="socials">
      <article className="register-text">
        <span>Registrate a través de</span>
        <div className="separator"></div>
      </article>
      <article className="register-options">
        <button className="register-option">
          <Link to="/auth/google">
          <img src="./svg/google-icon.svg" alt="Logo de Google" />
          </Link>
        </button>
      </article>
    </section>
  );
};

export default EnterOptions;
