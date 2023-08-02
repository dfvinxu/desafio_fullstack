import axios from "axios";

export const getCenter = (obj) => {
  let lng = obj.state.map.center.lng();
  let lat = obj.state.map.center.lat();
  return { lat, lng };
};

export const getMarkers = async ({ center, tipo }) => {
  if (tipo === null) return;
  let { lat, lng } = center;
  let res = await axios.get(`/api/${tipo}?lat=${lat}&lng=${lng}`);
  return res.data;
};
