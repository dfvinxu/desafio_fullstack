import React from "react";
import {GoHome} from "react-icons/go"
import {LuPartyPopper} from "react-icons/lu"
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"

const Navbar = () => {
  return (
    <section className="navbar">
      <article className="item">
        <GoHome />
        <span>Inicio</span>
      </article>
      <article className="item">
        <LuPartyPopper />
        <span>Eventos</span>
      </article>
      <article className="item">
        <AiOutlineHeart />
        <span>Favoritos</span>
      </article>
      <article className="item">
        <AiOutlineUser />
        <span>Perfil</span>
      </article>

    </section>
  );
};

export default Navbar;
