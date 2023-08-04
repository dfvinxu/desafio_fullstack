import React, { useContext, useEffect, useRef, useState } from "react";
import {GoogleMap, DirectionsRenderer} from "@react-google-maps/api"
import Pointers from "./Pointers"
import { getCenter, getMarkers } from "../../../../../utils/script";
import { AuthContext } from "../../../../context/authContext";

const Map = React.memo(({markers, updateMarkers, updateCoords, tipo, directionsResponse}) => {
  const {userPosition, destination} = useContext(AuthContext)
  console.log({markers, updateMarkers, updateCoords, tipo, directionsResponse, userPosition})
  const mapRef = useRef(null)
  const handleTileLoad = () => {
    const center = getCenter(mapRef.current)
    getMarkers({center, tipo}).then(res => updateMarkers(res))
    updateCoords(center)
  }

  return(
    <>
      {userPosition.lat !== 0 ?
        <GoogleMap
          ref={mapRef}
          zoom={15} mapContainerClassName="map-container" options={{
          disableDefaultUI: true,
          mapId: "cce25c7cd1c6e94e",
          maxZoom: 17,
          minZoom: 15,
        }} 
          center={destination.lat !== 0 ? destination : userPosition}
          onTilesLoaded={ tipo ? handleTileLoad : null}
        >
          {markers ? <Pointers markers={markers}/> : null}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
        </GoogleMap>
      : 
      <p>Cargando</p>}

    </>
  )
})
Map.displayName = "Map"
export default Map;
