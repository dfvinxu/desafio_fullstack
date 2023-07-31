import { useRef } from "react";
import {GoogleMap} from "@react-google-maps/api"
import Pointers from "./Pointers"
import { getCenter, getMarkers } from "../../../../../utils/script";

const Map = ({markers, updateMarkers, updateCoords, coords, tipo}) => {
  const mapRef = useRef(null)

  const handleTileLoad = () => {
    const center = getCenter(mapRef.current)
    getMarkers({center, tipo}).then(res => updateMarkers(res))
  }
  const handleDrag = () => {
    const {lat, lng} = getCenter(mapRef.current)
    console.log(lat,lng)
    updateCoords({lat, lng})

  }
  return(
    <>
      {coords.lat !== 0 ? 
      <GoogleMap 
        ref={mapRef}
        zoom={15} mapContainerClassName="map-container" options={{
        disableDefaultUI: true,
        mapId: "cce25c7cd1c6e94e",
        maxZoom: 17,
        minZoom: 15,
        center: coords,
      }} 
        onTilesLoaded={handleTileLoad}
        onDrag={handleDrag}
      >
        {markers && <Pointers markers={markers}/>}
      </GoogleMap>
    : <p>cargando...</p>}
    </>
  )
}

export default Map;
