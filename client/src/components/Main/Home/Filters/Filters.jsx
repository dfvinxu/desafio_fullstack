import axios from "axios"
import {TbFountain} from "react-icons/tb"
import {PiTree} from "react-icons/pi"
import {FaTemperatureFull, FaKitMedical} from "react-icons/fa6"
import {GiGreekTemple} from "react-icons/gi"
import { useNavigate} from "react-router-dom";


const Filters = () => {
  const navigate = useNavigate();

  return(
    <section className="filters">
      <article>
        <TbFountain />
      </article>
      <article>
        <PiTree />
      </article>
      <article>
        <FaTemperatureFull onClick={() => navigate('/weather')} />
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
