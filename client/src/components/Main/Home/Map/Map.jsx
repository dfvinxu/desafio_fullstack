import { useEffect, useRef, useState } from "react";
import {GoogleMap, DirectionsRenderer} from "@react-google-maps/api"
import Pointers from "./Pointers"
import { getCenter, getMarkers } from "../../../../../utils/script";

const Map = ({markers, updateMarkers, updateCoords, coords, tipo, userCenter, directionsResponse}) => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const handleTileLoad = () => {
    const center = getCenter(mapRef.current)
    getMarkers({center, tipo}).then(res => updateMarkers(res))
    updateCoords(center)
  }
  // useEffect(() => {
  //   updateCoords()
  // }, [])

  console.log(coords)
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
          onLoad={(map) => setMap(map)}
        >
          {markers && <Pointers markers={markers}/>}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
        </GoogleMap>
      : 
      <p>Cargando</p>}

    </>
  )
}

export default Map;
