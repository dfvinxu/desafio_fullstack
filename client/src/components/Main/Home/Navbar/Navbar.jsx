import { useNavigate } from "react-router-dom";
import Home from "../../../../../public/figma_svg/home.svg"
import Events from "../../../../../public/figma_svg/events.svg"
import Like from "../../../../../public/figma_svg/like.svg"
import Profile from "../../../../../public/figma_svg/profile.svg"

import {LuPartyPopper} from "react-icons/lu"
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <section className="navbar" >
      <article className="item">
        <Home />
        <span>Inicio</span>
      </article>
      <article className="item" onClick={() => navigate("/eventos")}>
        <Events />
        <span>Eventos</span>
      </article>
      <article className="item">
        <Like />
        <span>Favoritos</span>
      </article>
      <article className="item">
        <Profile />
        <span>Perfil</span>
      </article>
    </section>
  );
};

export default Navbar;
