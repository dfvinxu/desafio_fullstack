import React, { useEffect, useState } from "react";
import {BsFillSunFill} from 'react-icons/bs'

const Weather = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [nextFiveDays, setNextFiveDays] = useState([]);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const hours = Array.from({ length: 12 }, (_, i) => (currentHour + i * 2) % 24); // Generar horas a partir de la hora actual
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      try {
        // 5 DIAS
        const nextFiveDaysPromises = Array.from({ length: 5 }, (_, i) => {
          const nextDate = new Date(currentDate);
          nextDate.setDate(currentDate.getDate() + i + 1);

          const year = nextDate.getFullYear();
          const month = nextDate.getMonth() + 1;
          const day = nextDate.getDate();

          return fetch(
            `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${year}&mes=${month}&dia=${day}&hora=12`
          ).then((response) => response.json());
        });

        const nextFiveDaysData = await Promise.all(nextFiveDaysPromises);
        setNextFiveDays(nextFiveDaysData);

        // HOY
        const currentResponse = await fetch(
          `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${currentYear}&mes=${currentMonth}&dia=${currentDay}&hora=${currentHour}`
        );
        const currentData = await currentResponse.json();
        setCurrentTemperature(currentData.Prediccion_temperatura_Madrid);

        // PROXIMAS 12 HORAS
        const promises = hours.map(async (hour) => {
          const response = await fetch(
            `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${currentYear}&mes=${currentMonth}&dia=${currentDay}&hora=${hour}`
          );
          const data = await response.json();
          return {
            hour,
            temperature: data.Prediccion_temperatura_Madrid,
            weather_description: data.weather_description,
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

  const currentDate = new Date();
  const dayOfWeek = new Intl.DateTimeFormat("es", { weekday: "long" }).format(currentDate);

  return (
    <section className="temp-container">
      <h2>El tiempo en Madrid</h2>
      <section className="day-temp">
        <p>
          {currentDate.getDate()} de {currentDate.toLocaleString("es", { month: "long" })} {dayOfWeek}
        </p>
        {currentTemperature !== null ? (
          <p>Temperatura actual: {currentTemperature} °C  Soleado <BsFillSunFill /> </p>
        ) : (
          <p>Cargando la temperatura actual...</p>
        )}
      </section>
      <section className="hour-temp">
        <h3>Temperaturas por horas:</h3>
        {temperatureData.length > 0 ? (
          <ul>
            {temperatureData.map((data) => (
              <li key={data.hour}>
                {data.hour}:00 - {data.temperature} °C Soleado <BsFillSunFill />
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando la predicción de temperatura por horas...</p>
        )}
      </section>
      <section className="next-temp">
        <h3>Temperaturas para los próximos 5 días:</h3>
        {nextFiveDays.length > 0 ? (
          <ul>
            {nextFiveDays.map((data, index) => (
              <li key={index}>
                {new Date(currentDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString("es", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                - {data.Prediccion_temperatura_Madrid} °C Soleado <BsFillSunFill />
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando la predicción de temperatura para los próximos días...</p>
        )}
      </section>
    </section>
  );
};

export default Weather;








