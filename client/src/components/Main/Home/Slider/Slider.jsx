import { useContext, useEffect, useRef, useState } from "react";
import {AiOutlineHeart} from "react-icons/ai"
import Filters from "../Filters/Filters";
import { AuthContext } from "../../../../context/authContext";
const Slider = ({markers, calculateRoute, userPosition}) => {
  const {filters} = useContext(AuthContext)
  const sliderRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [filteredMarkers, setFilteredMarkers] = useState([])
  useEffect(() => {

    const slider = sliderRef.current
    const handleMove = e => {
      e.preventDefault()
      let height = e.view.innerHeight
      let newHeight = height - Math.floor(e.targetTouches[0].clientY)
      if(newHeight < 105 || newHeight > 825) return
      setHeight(newHeight)
    }
    slider.addEventListener("touchmove", handleMove)

    return () => slider.removeEventListener("touchmove", handleMove)
  }, [])

  useEffect(() => {
    const filter = filters.map(ele => {
      if(ele === "parques") ele = "parques_y_jardines"
      return {
        TIPO: ele.toUpperCase(),
        MARKERS : markers.filter(item => item["TIPO"] === ele.toUpperCase())
      }
    })
    setFilteredMarkers(filter)
  }, [markers])

  return(
    <section className="closest-markers-section" style={{height: height ? height : ""}}>
      <section className="close-markers">
        <div 
          className="slider-handle" 
          ref={sliderRef}
        ></div>
        {filteredMarkers && filteredMarkers.map((ele, i) => {
          return (
          <>
            <h2 className="title">{ele["TIPO"].replace(/_/gi, " ")}</h2>
            <section className="markers-around"  key={i}>
              {ele["MARKERS"].map((item, i) => (
                <>
                  <article className="marker" key={i}>
                    <section className="marker-image-container">
                      <AiOutlineHeart className="icon-like"/>
                      <img src={`./image/${item["TIPO"]}.jpeg`} alt={item["TIPO"]} className="marker-image"/>
                    </section>
                    <p className="marker-title">{item["DIRECCION"].toLowerCase()}</p>
                    <section className="marker-directions">
                      <article className="marker-distance">
                        <img src="./figma_svg/marker.svg" alt="marker icon" />
                        <span>distancia</span>
                      </article>
                      <img src="./figma_svg/path.svg" alt="pathto icon" onClick={() => calculateRoute({destination: {lat: item.LATITUD, lng: item.LONGITUD}, origin: userPosition})}/>
                    </section>
                </article>
                </>
              ))}
            </section>
          </>
          )
        })}
      </section>
    </section>
  );
};

export default Slider;
