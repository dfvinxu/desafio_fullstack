import React from "react";
import jwt_decode from "jwt-decode";
import { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../../context/authContext';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa'

const User = () => {
  const {authCookie} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    userName: "",
    birth: "",
    nationality: ""

  });
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate()

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (authCookie) {
          const decodeToken = jwt_decode(authCookie);
          let { user_id } = decodeToken;
          console.log(user_id); 
          const response = await axios.get(`/api/users/${user_id}`) 
          if (response.data) {
            console.log(response.data.message);
            setUserInfo({
              name: response.data.message.name,
              email: response.data.message.email,
              userName: response.data.message.user,
              nationality : response.data.message.nationality,
              birth: response.data.message["birth_date"]
            });
          } else {
            console.log('Error');
          }
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };
  
    fetchUserInfo();
  }, []);
  
  return (
  <section className="profile-container">
    <section className="profile-header">
        <FaUserCircle className="profile-picture"/> 
        <article className="profile-info">
        {console.log("UserInfo:", userInfo)}
          <p className="profile-name">{loading ? "Cargando..." : `Hola, ${userInfo.name}`}</p>
          <p className="profile-email">{loading ? "Cargando..." :  userInfo.email}</p>
          <p className="profile-username">{loading ? "Cargando..." : `Nombre de usuario: ${userInfo.userName}`}</p>
          <p className="profile-birth">{loading ? "Cargando..." : `Fecha de nacimiento: ${userInfo.birth}`}</p>
          <p className="profile-nationality">{loading ? "Cargando..." : `Nacionalidad: ${userInfo.nationality}`}</p>
        </article>
    </section>  
  </section>
);
};

export default User;
