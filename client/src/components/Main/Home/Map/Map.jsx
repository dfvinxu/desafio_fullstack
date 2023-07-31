import { useEffect, useState, useRef, memo } from "react";
import {GoogleMap, Marker} from "@react-google-maps/api"
import axios from "axios";
import Pointers from "./Pointers"

const Map = () => {
  console.log("Se renderiza")
  const mapRef = useRef(null)
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0
  })
  const [fountains, setFountains] = useState([])
  // const [museums, setMuseums] = useState([])
  // const [parks, setParks] = useState([])
  // const [tourism, setTourism] = useState([])


  const getWaterFountains = async (center) => {
    let {lat, lng} = center
    let res = await axios.get(`/api/fuentes?lat=${lat}&lng=${lng}`)
    return res.data
  } 
  // const getMuseums = async () => {
  //   let res = await axios.get("/api/museos")
  //   return res.data
  // } 
  // const getParks = async () => {
  //   let res = await axios.get("/api/parks")
  //   return res.data
  // } 
  // const getTourism = async () => {
  //   let res = await axios.get("/api/oficinas-turismo")
  //   return res.data
  // } 
  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        let { coords } = pos
        let {latitude: lat, longitude: lng} = coords
        setCoords({lat, lng})
      })
    }

  }, [])

  const handleLoad = () => {
    let lng = mapRef.current.state.map.center.lng()
    let lat = mapRef.current.state.map.center.lat()
    let obj = {lng, lat}
    getWaterFountains(obj).then(res => setFountains(res))
    setCoords({lat, lng})
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
        onLoad={() => getWaterFountains(coords).then(data => setFountains(data))}
        onTilesLoaded={handleLoad}
      >
        <Pointers points={fountains}/>
        {/* {     
          museums && museums.map((ele, i) => <Marker key={i} icon={{url: "./svg/museos.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        } */}
        {/* {     
          parks && parks.map((ele, i) => <Marker key={i} icon={{url: "./svg/park.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        } */}
        {/* {     
          tourism && tourism.map((ele, i) => <Marker key={i} icon={{url: "./svg/turist.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        } */}
      </GoogleMap>
    : <p>cargando...</p>}
    </>
  )
}

export default Map;
