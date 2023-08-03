import { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../../context/authContext';
import axios from "axios"
import Close from "../../../../public/figma_svg/xmark.svg"
import ProfileIcon from "../../../../public/figma_svg/profile-gray.svg"
import ProfileSettings from "../../../../public/figma_svg/profile-settings.svg"
import Faq from "../../../../public/figma_svg/faq.svg"
import Messages from "../../../../public/figma_svg/mensajes.svg"
import Language from "../../../../public/figma_svg/language.svg"
import Forward from "../../../../public/figma_svg/go-forward.svg"
import { useNavigate } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa'
import jwt_decode from "jwt-decode"

const Profile = () => {
  const {authCookie} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const handleLogout = async () => {
    await axios.get("/auth/logout")
    setTimeout(() => {
      navigate("/")
    }, 400)
  }

  const handleGoHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (authCookie) {
          const decodeToken = jwt_decode(authCookie);
          let { user_id } = decodeToken;
          console.log(user_id); 
          const response = await axios.get(`/api/users/${user_id}`) 
          if (response.data) {
            console.log(response.data.message);
            setUserInfo({
              name: response.data.message.name,
              email: response.data.message.email
            });
          } else {
            console.log('Error');
          }
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };
  
    fetchUserInfo();
  }, []);
  

  return (
    <section className="profile-container">
      <span className="close-icon" onClick={handleGoHome}>
        <Close />
      </span>
      <section className="profile-header">
        <FaUserCircle className="profile-picture"/> 
        <article className="profile-info">
        {console.log("UserInfo:", userInfo)}
          <p className="profile-name">Hola, {loading ? "Cargando..." : userInfo.name}</p>
          <p className="profile-email">{loading ? "Cargando..." : userInfo.email}</p>
        </article>
      </section>
      <section className="user-options">
      <section className="profile-options">
        <article className="option">
          <span className="option-section">
            <ProfileIcon /> <p className="text">Mi perfil</p> 
          </span>
          <Forward className="next-icon" />
        </article>
        <article className="option">
          <span className="option-section">
            <ProfileSettings /><p className="text">Ajustes</p> 
          </span>
          <Forward className="next-icon" />
        </article>
        <article className="option">
        <span className="option-section">
            <Faq /> <p className="text">FAQs</p> 
          </span> <Forward className="next-icon" />
        </article>
        <article className="option">
        <span className="option-section">
            <Messages /> <p className="text">Mensajes</p> 
          </span> <Forward className="next-icon" />
        </article>
      </section>
      <section className="profile-language">
        <span className="option-section">
          <Language /> <p className="text">Español</p> 
        </span> <Forward className="next-icon" />
      </section>
      </section>
      {/* Footer */}
      <footer className="profile-footer">

        <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        <article className="footer-info"> 
          <p>Política y privacidad</p>
          <article className="collab">
              <img
              className="community-flag"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Community_of_Madrid.svg/800px-Flag_of_the_Community_of_Madrid.svg.png"
              alt="Community of Madrid Flag"
            />
              <p>Colaboración especial con la Comunidad de Madrid</p>
            </article>
          </article>
      </footer>
    </section>
  );
};

export default Profile;
