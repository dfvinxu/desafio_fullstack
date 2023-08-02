import {GoHome} from "react-icons/go"
import {LuPartyPopper} from "react-icons/lu"
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="navbar">
      <article className="item">
        <GoHome />
        <span>Inicio</span>
      </article>
      <article className="item" onClick={() => navigate('/eventos')}>
        <LuPartyPopper />
        <span>Eventos</span>
      </article>
      <article className="item">
        <AiOutlineHeart  />
        <span>Favoritos</span>
      </article>
      <article className="item" onClick={() => navigate('/profile') }>
        <AiOutlineUser />
        <span>Perfil</span>
      </article>

    </section>
  );
};

export default Navbar;
