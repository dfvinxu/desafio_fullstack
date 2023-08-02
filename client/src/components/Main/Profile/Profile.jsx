import Close from "../../../../public/figma_svg/xmark.svg"
import ProfileIcon from "../../../../public/figma_svg/profile-gray.svg"
import ProfileSettings from "../../../../public/figma_svg/profile-settings.svg"
import Faq from "../../../../public/figma_svg/faq.svg"
import Messages from "../../../../public/figma_svg/mensajes.svg"
import Language from "../../../../public/figma_svg/language.svg"
import Forward from "../../../../public/figma_svg/go-forward.svg"

const Profile = () => {
  return (
    <section className="profile-container">
      <Close />
      <section className="profile-header">
        <img
          className="profile-picture"
          src="https://images3.memedroid.com/images/UPLOADED158/63ae8a9794f6e.jpeg"
          alt="profile picture"
        />
        <article className="profile-info">
          <p className="profile-name">Andrea</p>
          <p className="profile-email">andrea@gmail.com</p>
        </article>
      </section>
      <section className="profile-options">
        <article className="option">
          <span className="option-section">
            <ProfileIcon /> Mi perfil 
          </span>
          <Forward className="next-icon" />
        </article>
        <article className="option">
          <span className="option-section">
            <ProfileSettings /> Ajustes 
          </span>
          <Forward className="next-icon" />
        </article>
        <article className="option">
        <span className="option-section">
            <Faq /> FAQs 
          </span> <Forward className="next-icon" />
        </article>
        <article className="option">
        <span className="option-section">
            <Messages /> Mensajes 
          </span> <Forward className="next-icon" />
        </article>
      </section>
      <section className="profile-language">
        <span className="option-section">
          <Language /> Español 
        </span> <Forward className="next-icon" />
      </section>
      <button className="logout-btn">Cerrar sesión</button>
      {/* Footer */}
      <footer className="profile-footer">
        <p>Política y privacidad</p>
        <article className="collab">
            <img
            className="community-flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Community_of_Madrid.svg/800px-Flag_of_the_Community_of_Madrid.svg.png"
            alt="Community of Madrid Flag"
          />
            <p>Colaboración especial con la Comunidad de Madrid</p>
          </article>
      </footer>
    </section>
  );
};

export default Profile;
