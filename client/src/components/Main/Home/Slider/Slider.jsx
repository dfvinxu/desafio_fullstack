import { useEffect, useRef, useState } from "react";
import {AiOutlineHeart} from "react-icons/ai"
const Slider = ({markers}) => {
  const sliderRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {

    const slider = sliderRef.current
    const handleMove = e => {
      let height = e.view.innerHeight
      let newHeight = height - Math.floor(e.targetTouches[0].clientY)
      if(newHeight < 105 || newHeight > 825) return
      setHeight(newHeight)
    }
    slider.addEventListener("touchmove", handleMove)

    return () => slider.removeEventListener("touchmove", handleMove)
  }, [])

  return(
    <section className="closest-markers-section" style={{height: height ? height : ""}}>
      <section className="close-markers">
        <div 
          className="slider-handle" 
          ref={sliderRef}
        ></div>
        <h2 className="title">Titulo</h2>
        <section className="markers-around">
        {markers && markers.map((ele, i) => (
          <article className="marker" key={i}>
            <section className="marker-image-container" >
              <AiOutlineHeart className="icon-like"/>
              <img src="./image/fuente.jpeg" alt="fuente de agua" className="marker-image"/>
            </section>
            <p className="marker-title">{ele["DIRECCION"].toLowerCase()}</p>
            <section className="marker-directions">
              <article className="marker-distance">
                <img src="./figma_svg/marker.svg" alt="marker icon" />
                <span>distancia</span>
              </article>
              <img src="./figma_svg/path.svg" alt="pathto icon" />
            </section>
          </article>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Slider;
