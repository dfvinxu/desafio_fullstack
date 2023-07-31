
import { Marker } from "@react-google-maps/api";
const Pointers = ({points}) => {
  return(
    <>
      {points && points.map((ele, i) => <Marker 
        key={i}
        icon={{url: "./svg/water.svg", scaledSize: {height: 40, width: 40}}}
        position={{lat: +ele.latitud, lng: +ele.longitud}}/>)
      }
    </>
  )
}
export default Pointers;
