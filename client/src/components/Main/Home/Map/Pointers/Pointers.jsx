import {icons} from "../../../../../../public/utils/icons"
import { Marker } from "@react-google-maps/api";
const Pointers = ({markers}) => {
  console.log(markers)
  return(
    <>
      {markers.length ? markers.map((ele, i) => {
        return(
          <Marker 
            key={i}
            icon={{url: icons[ele["TIPO"]], scaledSize: {height: 40, width: 40}}}
            position={{lat: +ele.LATITUD, lng: +ele.LONGITUD}}
          />
        )
      }  
      ) : null}
    </>
  )
}
export default Pointers;
