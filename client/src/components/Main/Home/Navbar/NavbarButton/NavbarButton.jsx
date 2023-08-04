import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarButton = ({link, component, text}) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  return(
    <article className={active ? "item active" : "item" } onClick={() => {
      setActive(true)
        setTimeout(() => {
        navigate(link)
        }, (300));
      }}>
      {component}
      <span>{text}</span>
    </article>
  );
};

export default NavbarButton;
