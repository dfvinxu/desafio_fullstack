import React from "react";
import jwt_decode from "jwt-decode";
import { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../../context/authContext';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa'
import {AiTwotoneEdit} from 'react-icons/ai'
import BackButton from "../BackButton";

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
      <article className="search-bar-container">
        <BackButton link={"/home"} />
      </article>
    <section className="profile-header">
      <FaUserCircle className="profile-picture"/> 
      <article className="profile-info">
        <h3 className="title">Mi Perfil</h3>
        <table className="user-table">
          <tr>
            <th>Nombre</th>
            <td>{userInfo.name}</td>
            <td></td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userInfo.email}</td>
            <td><AiTwotoneEdit /></td>
          </tr>
          <tr>
            <th>Nombre de usuario</th>
            <td>{userInfo.userName}</td>
            <td><AiTwotoneEdit /></td>
          </tr>
          <tr>
            <th>Fecha de nacimiento</th>
            <td>{userInfo.birth}</td>
            <td></td>
          </tr>
          <tr>
            <th>Nacionalidad</th>
            <td>{userInfo.nationality}</td>
            <td></td>
          </tr>
        </table>
      </article>
      <button className="change-password-btn">
        Cambiar contraseña
      </button>
    </section>  
  </section>
  
);
};

export default User;
