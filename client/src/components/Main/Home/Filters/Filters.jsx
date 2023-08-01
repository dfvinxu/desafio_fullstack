import { useNavigate } from "react-router-dom";
import {TbFountain} from "react-icons/tb"
import {PiTree} from "react-icons/pi"
import {FaTemperatureFull, FaKitMedical} from "react-icons/fa6"
import {GiGreekTemple} from "react-icons/gi"
import { getMarkers } from "../../../../../utils/script";

const Filters = ({updateMarkers, center, updateTipo}) => {
  const navigate = useNavigate();
  return(
    <section className="filters">
      <article onClick={() => {
        getMarkers({center, tipo: "fuentes"}).then(res => updateMarkers(res))
        updateTipo("fuentes")
      }}>
        <TbFountain />
      </article>
      <article onClick={() => {
        getMarkers({center, tipo: "parques"}).then(res => updateMarkers(res))
        updateTipo("parques")
      }}>
        <PiTree />
      </article>
      <article>
        <FaTemperatureFull onClick={() => navigate('/weather')} />
      </article>
      <article onClick={() => {
        getMarkers({center, tipo: "museos"}).then(res => updateMarkers(res))
        updateTipo("museos")
      }}>
        <GiGreekTemple />
      </article>
      <article onClick={() => {
        getMarkers({center, tipo: "salud"}).then(res => updateMarkers(res))
        updateTipo("salud")
      }}>
        <FaKitMedical />
      </article>
    </section>
  );
};

export default Filters;
