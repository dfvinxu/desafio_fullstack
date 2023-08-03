import { useNavigate } from "react-router-dom";
import Fuente from "../../../../../public/figma_svg/fuentes-black.svg"
import Arbol from "../../../../../public/figma_svg/tree-black.svg"
import Temperatura from "../../../../../public/figma_svg/temperature-black.svg"
import InterestPoints from "../../../../../public/figma_svg/interest-points-black.svg"
import MedKit from "../../../../../public/figma_svg/med-black.svg"
import Location from "../../../../../public/figma_svg/location.svg"
import { getMarkers } from "../../../../../utils/script";

const Filters = ({updateMarkers, userPosition, updateTipo, moveToCenter}) => {
  const navigate = useNavigate();
  return(
    <section className="filters">
      <article className="active" onClick={() => {
        getMarkers({center: userPosition, tipo: "fuentes"}).then(res => updateMarkers(res))
        updateTipo("fuentes")
      }}>
        <Fuente />
      </article>
      <article onClick={() => {
        getMarkers({center: userPosition, tipo: "parques"}).then(res => updateMarkers(res))
        updateTipo("parques")
      }}>
        <Arbol />
      </article>
      <article>
        <Temperatura />
      </article>
      <article onClick={() => {
        getMarkers({center: userPosition, tipo: "museos"}).then(res => updateMarkers(res))
        updateTipo("museos")
      }}>
        <InterestPoints />
      </article>
      <article onClick={() => {
        getMarkers({center: userPosition, tipo: "salud"}).then(res => updateMarkers(res))
        updateTipo("salud")
      }}>
        <MedKit/>
      </article>
      <article onClick={moveToCenter}>
        <Location />
      </article>
    </section>
  );
};

export default Filters;
