import React, { useEffect, useState } from "react";

const Weather = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const hours = Array.from({ length: 12 }, (_, i) => (currentHour + i * 2) % 24); // Generar horas a partir de la hora actual
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      try {
        const promises = hours.map(async (hour) => {
          const response = await fetch(
            `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${currentYear}&mes=${currentMonth}&dia=${currentDay}&hora=${hour}`
          );
          const data = await response.json();
          return {
            hour,
            temperature: data.Prediccion_temperatura_Madrid,
          };
        });
        const results = await Promise.all(promises);
        setTemperatureData(results);
      } catch (error) {
        console.error("Error en la solicitud a la API:", error);
      }
    };

    fetchTemperatureData();
  }, []);

  return (
    <div>
      <h2>El tiempo en Madrid</h2>
      {temperatureData.length > 0 ? (
        <ul>
          {temperatureData.map((data) => (
            <li key={data.hour}>
              {data.hour}:00 - {data.temperature} °C
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando la predicción de temperatura...</p>
      )}
    </div>
  );
};

export default Weather;






