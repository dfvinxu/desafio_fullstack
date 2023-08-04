import Home from "../../../../../public/figma_svg/home.svg"
import Events from "../../../../../public/figma_svg/events.svg"
import Like from "../../../../../public/figma_svg/like.svg"
import Profile from "../../../../../public/figma_svg/profile.svg"
import NavbarButton from "./NavbarButton/NavbarButton";

const Navbar = () => {
  return (
    <section className="navbar" >
      <article className="item active">
        <Home />
        <span>Inicio</span>
      </article>
      <NavbarButton link={"/eventos"} component={<Events />} text={"Eventos"}/>
      <NavbarButton link={"/favoritos"} component={<Like />} text={"Favoritos"}/>
      <NavbarButton link={"/profile"} component={<Profile />} text={"Profile"}/>

    </section>
  );
};

export default Navbar;
