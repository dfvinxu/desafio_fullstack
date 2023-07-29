import React, { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";

const Weather = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [nextFiveDays, setNextFiveDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const hours = Array.from({ length: 6 }, (_, i) => (currentHour + i * 4) % 24); // Generar horas a partir de la hora actual, dividiendo en 6 intervalos de 4 horas cada uno
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      try {
        // Verificar si los datos están en caché
        const cachedData = JSON.parse(localStorage.getItem("weatherData"));

        if (cachedData && currentDate.getTime() - cachedData.timestamp < 3600000) {
          // Si los datos están en caché y no han pasado más de 1 hora, usar los datos en caché
          setTemperatureData(cachedData.temperatureData);
          setCurrentTemperature(cachedData.currentTemperature);
          setNextFiveDays(cachedData.nextFiveDays);
        } else {
          // Si los datos no están en caché o han pasado más de 1 hora, realizar las solicitudes a la API
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

          const currentResponse = await fetch(
            `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${currentYear}&mes=${currentMonth}&dia=${currentDay}&hora=${currentHour}`
          );
          const currentData = await currentResponse.json();
          setCurrentTemperature(currentData.Prediccion_temperatura_Madrid);

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

          // Guardar los datos en caché
          const dataToCache = {
            timestamp: currentDate.getTime(),
            temperatureData: results,
            currentTemperature: currentData.Prediccion_temperatura_Madrid,
            nextFiveDays: nextFiveDaysData,
          };
          localStorage.setItem("weatherData", JSON.stringify(dataToCache));
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error en la solicitud a la API:", error);
        setIsLoading(false);
      }
    };

    fetchTemperatureData();
  }, []);

  const currentDate = new Date();
  const dayOfWeek = new Intl.DateTimeFormat("es", { weekday: "long" }).format(currentDate);

  return (
    <section className="temp-container">
      <h2 className="temp-title">El tiempo en Madrid</h2>
      <section className="day-temp">
        <article className="date-container">
          <p>{dayOfWeek}</p>
          <p>{currentDate.getDate()} </p>
        </article>
        <article className="hour-container">
          <p>{currentDate.getHours()}:{currentDate.getMinutes()}</p>
        </article>
        {currentTemperature !== null ? (
          <article className="curr-temp">
            <p> {currentTemperature} °C  </p>
            <article className="curr-des">
            <p><BsFillSunFill /></p>
            <p>Soleado</p>
            </article>
            </article>
        ) : (
          <p>Cargando la temperatura actual...</p>
        
        )}
      </section>
      <section className="hour-temp">
        <h3>Próximas horas</h3>
        {temperatureData.length > 0 ? (
          <ul className="hour-list">
            {temperatureData.map((data) => (
              <li key={data.hour} className="hour-item">
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








