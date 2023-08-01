import axios from "axios"
import {TbFountain} from "react-icons/tb"
import {PiTree} from "react-icons/pi"
import {FaTemperatureFull, FaKitMedical} from "react-icons/fa6"
import {GiGreekTemple} from "react-icons/gi"
import { Link } from "react-router-dom";


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
        <Link to={'/weather'}><FaTemperatureFull /></Link>
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
