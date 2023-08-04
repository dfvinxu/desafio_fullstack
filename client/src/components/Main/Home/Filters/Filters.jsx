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

  const handleClick = (tipo) => {
    if (!filters.includes(tipo)){
      getMarkers({center: userPosition, tipo}).then(res => updateMarkers(res))
      updateTipo(tipo)
      updateFilters(tipo)
    } else {
      let newTipo = tipo
      if(tipo=== "parques") newTipo = "parques_y_jardines"
      updateMarkers([...markers.filter(ele => ele["TIPO"] !== newTipo.toUpperCase())], "remove")
      updateTipo(null)
      updateFilters(filters.filter(ele => {
        return ele !== tipo
      }), "remove")
    }
  }

  return(
    <section className="filters">
      <article className={filters.includes("fuentes") ? "active": ""} onClick={() => {handleClick("fuentes")}}>
        <Fuente />
      </article>
      <article className={filters.includes("parques") ? "active": ""} onClick={() => {handleClick("parques")}}>
        <Arbol />
      </article>
      <article onClick={() => navigate("/weather")}>
        <Temperatura />
      </article>
      <article className={filters.includes("museos") ? "active": ""} onClick={() => {handleClick("museos")}}>
        <InterestPoints />
      </article>
      <article className={filters.includes("salud") ? "active": ""} onClick={() => {handleClick("salud")}}>
        <MedKit/>
      </article>
      <article onClick={moveToCenter}>
        <Location />
      </article>
    </section>
  );
};

export default Filters;
