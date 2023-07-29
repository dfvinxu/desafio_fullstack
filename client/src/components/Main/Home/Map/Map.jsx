import {GoogleMap, Marker} from "@react-google-maps/api"
import axios from "axios";
import { useEffect, useState } from "react";

const Map = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0
  })
  const [fountains, setFountains] = useState([])
  const [museums, setMuseums] = useState([])
  const [parks, setParks] = useState([])
  const [tourism, setTourism] = useState([])


  const getWaterFountains = async () => {
    let res = await axios.get("/api/fuentes")
    return res.data
  } 
  const getMuseums = async () => {
    let res = await axios.get("/api/museos")
    return res.data
  } 
  const getParks = async () => {
    let res = await axios.get("/api/parks")
    return res.data
  } 
  const getTourism = async () => {
    let res = await axios.get("/api/oficinas-turismo")
    return res.data
  } 
  useEffect(() => {
    // getWaterFountains().then(data => setFountains(data))
    // getMuseums().then(data => setMuseums(data))
    // getParks().then(data => setParks(data))
    getTourism().then(data => setTourism(data))

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        let { coords } = pos
        let {latitude: lat, longitude: lng} = coords
        setCoords({lat, lng})
      })
    }
  }, [])


  return(
    <>
      <GoogleMap zoom={15} mapContainerClassName="map-container" options={{
        disableDefaultUI: true,
        mapId: "cce25c7cd1c6e94e",
        maxZoom: 18,
        minZoom: 13,
        center: coords,
      }}>
        {/* {
          fountains && fountains.map((ele, i) => <Marker key={i} icon={{url: "./svg/water.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.latitud, lng: ele.longitud}}/>)
        } */}

        {/* {     
          museums && museums.map((ele, i) => <Marker key={i} icon={{url: "./svg/museos.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        } */}
        {/* {     
          parks && parks.map((ele, i) => <Marker key={i} icon={{url: "./svg/park.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        } */}
        {     
          tourism && tourism.map((ele, i) => <Marker key={i} icon={{url: "./svg/turist.svg", scaledSize: {height: 40, width: 40}}} position={{lat: ele.LATITUD, lng: ele.LONGITUD}}/>)
        }
      </GoogleMap>
    </>
  )
};

export default Map;
