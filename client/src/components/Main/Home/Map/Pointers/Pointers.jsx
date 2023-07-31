import {icons} from "../../../../../../public/icons"
import { Marker } from "@react-google-maps/api";
const Pointers = ({markers}) => {
  return(
    <>
      {markers && markers.map((ele, i) => {

        return(
          <Marker 
            key={i}
            icon={{url: icons[ele["TIPO"]], scaledSize: {height: 40, width: 40}}}
            position={{lat: +ele.LATITUD, lng: +ele.LONGITUD}}
          />
        )
      }  
      )}
    </>
  )
}
export default Pointers;
