import React from "react";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";

const Profile = () => {
  return (
    <article className="profile-container">
      <AiOutlineCloseCircle className="close-icon" />
      <section className="profile-header">
        <img
          className="profile-picture"
          src="https://images3.memedroid.com/images/UPLOADED158/63ae8a9794f6e.jpeg"
          alt="Profile"
        />
        <h1>
          Moyai <br />
          Moyai@gmail.com
        </h1>
      </section>
      <section className="profile-sections">
        <div className="section">
          <h2>
            <CgProfile /> Mi perfil <GrFormNext className="next-icon" />
          </h2>
        </div>
        <div className="section">
          <h2>
            <GrFavorite /> Tu Actividad <GrFormNext className="next-icon" />
          </h2>
        </div>
        <div className="section">
          <h2>
            <TfiWorld /> Español <GrFormNext className="next-icon" />
          </h2>
        </div>
      </section>
      <div>
        <button className="logout-btn">Cerrar sesión</button>
      </div>
      {/* Footer */}
      <footer className="profile-footer">
        <div className="left-content">
          <img
            className="community-flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Community_of_Madrid.svg/800px-Flag_of_the_Community_of_Madrid.svg.png"
            alt="Community of Madrid Flag"
          />
          <p>Colaboración especial con la Comunidad de Madrid</p>
        </div>
        <div className="center-content">
          <p>Política y privacidad</p>
        </div>
      </footer>
    </article>
  );
};

export default Profile;
