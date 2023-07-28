import React from "react";
import {TbFountain} from "react-icons/tb"
import {PiTree} from "react-icons/pi"
import {FaTemperatureFull, FaKitMedical} from "react-icons/fa6"
import {GiGreekTemple} from "react-icons/gi"


const Filters = () => {
  return(
    <section className="filters">
      <article>
        <TbFountain />
      </article>
      <article>
        <PiTree />
      </article>
      <article>
        <FaTemperatureFull />
      </article>
      <article>
        <GiGreekTemple />
      </article>
      <article>
        <FaKitMedical />
      </article>
    </section>
  );
};

export default Filters;
