import { useNavigate } from "react-router-dom";
import Fuente from "../../../../../public/figma_svg/fuentes-black.svg"
import Arbol from "../../../../../public/figma_svg/tree-black.svg"
import Temperatura from "../../../../../public/figma_svg/temperature-black.svg"
import InterestPoints from "../../../../../public/figma_svg/interest-points-black.svg"
import MedKit from "../../../../../public/figma_svg/med-black.svg"
import Location from "../../../../../public/figma_svg/location.svg"
import { getMarkers } from "../../../../../utils/script";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext";

const Filters = ({updateMarkers, userPosition, updateTipo, moveToCenter, markers}) => {
  const navigate = useNavigate();
  const {filters, updateFilters} = useContext(AuthContext)
  return(
    <section className="filters">
      <article className={filters.includes("fuentes") ? "active": ""} onClick={() => {
        getMarkers({center: userPosition, tipo: "fuentes"}).then(res => updateMarkers(res))
        updateTipo("fuentes")
        updateFilters("fuentes")

      }}>
        <Fuente />
      </article>
      <article className={filters.includes("parques") ? "active": ""} onClick={() => {
        getMarkers({center: userPosition, tipo: "parques"}).then(res => updateMarkers(res))
        updateTipo("parques")
        updateFilters("parques")
      }}>
        <Arbol />
      </article>
      <article onClick={() => navigate("/weather")}>
        <Temperatura />
      </article>
      <article className={filters.includes("museos") ? "active": ""} onClick={() => {
        getMarkers({center: userPosition, tipo: "museos"}).then(res => updateMarkers(res))
        updateTipo("museos")
        updateFilters("museos")
      }}>
        <InterestPoints />
      </article>
      <article className={filters.includes("salud") ? "active": ""} onClick={() => {
        getMarkers({center: userPosition, tipo: "salud"}).then(res => updateMarkers(res))
        updateTipo("salud")
        updateFilters("salud")
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
