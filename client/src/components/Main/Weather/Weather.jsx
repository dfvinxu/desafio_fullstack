import { useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [nextFiveDays, setNextFiveDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [temperatureAt3AM, setTemperatureAt3AM] = useState([]);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const hours = Array.from({ length: 6 }, (_, i) => (currentHour + i * 4) % 24);
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      try {
        const cachedData = JSON.parse(localStorage.getItem("weatherData"));

        if (cachedData && currentDate.getTime() - cachedData.timestamp < 3600000) {
          setTemperatureData(cachedData.temperatureData);
          setCurrentTemperature(cachedData.currentTemperature);
          setNextFiveDays(cachedData.nextFiveDays);
        } else {
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
            const response = await axios.get(
              `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${currentYear}&mes=${currentMonth}&dia=${currentDay}&hora=${hour}`
            );
            const data = response.data;
            return {
              hour,
              temperature: data.Prediccion_temperatura_Madrid,
            };
          });
          const results = await Promise.all(promises);
          setTemperatureData(results);

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
        console.log(error)
        // console.error("Error en la solicitud a la API:", error);
        setIsLoading(false);
      }
    };

    fetchTemperatureData();
  }, []);

  useEffect(() => {
    const fetchTemperatureAt3AM = async () => {
      try {
        const temperatures = await Promise.all(
          nextFiveDays.map(async (data, index) => {
            const tempAt3AM = await calculateTemperatureAt3AM(data.Prediccion_temperatura_Madrid, index);
            return tempAt3AM;
          })
        );
        setTemperatureAt3AM(temperatures);
      } catch (error) {
        console.error("Error fetching temperature at 3 am:", error);
      }
    };

    fetchTemperatureAt3AM();
  }, [nextFiveDays]);

  const currentDate = new Date();
  const dayOfWeek = new Intl.DateTimeFormat("es", { weekday: "long" }).format(currentDate);

  const calculateTemperatureAt3AM = async (temperatureAtNoon, index) => {
    const nextDate = new Date(currentDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000);
    nextDate.setHours(3);

    const year = nextDate.getFullYear();
    const month = nextDate.getMonth() + 1;
    const day = nextDate.getDate();
    const hour = nextDate.getHours();
    try {
      const response = await fetch(
        `https://svalencia1986.pythonanywhere.com/v1/predict?ano=${year}&mes=${month}&dia=${day}&hora=${hour}`
      );
      const data = await response.json();
      return `${Math.floor(data.Prediccion_temperatura_Madrid)} °C`;
    } catch (error) {
      console.error("Error en la solicitud a la API:", error);
      return "N/A";
    }
  };

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
            <p> {Math.floor(currentTemperature)} °  </p>
            <article className="curr-des">
            <p>
              <img className="sun-icon" src="../../src/assets/sun.png" alt="Sun icon" />
            </p>
            <p>Soleado</p>
            </article>
          </article>
        ) : (
          <p>Cargando la temperatura actual...</p>
        
        )}
      </section>
      <section className="hour-temp">
        {temperatureData.length > 0 ? (
          <ul className="hour-list">
            {temperatureData.map((data) => (
              <li key={data.hour} className="hour-item">
                {data.hour}:00 <img className="sun-icon" src="../../src/assets/sun.png" alt="Sun icon" />  {Math.floor(data.temperature)} ° 
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando la predicción de temperatura por horas...</p>
        )}
      </section>
      <section className="next-temp">
        <h3>Temperaturas los próximos 5 días</h3>
        {nextFiveDays.length > 0 ? (
          <table className="weather-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>
                  <img className="sun-icon" src="../../src/assets/sun.png" alt="Sun icon" />
                </th>
                <th>
                  <img className="luna-icon" src="../../src/assets/luna.png"></img>
                </th>
              </tr>
            </thead>
            <tbody>
              {nextFiveDays.map((data, index) => (
                <tr key={index}>
                  <td>
                    {new Date(currentDate.getTime() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString("es", {
                      day: "numeric",
                      weekday: "long",
                    })}
                  </td>
                  <td>
                    <img className="sun-icon" src="../../src/assets/sun.png" alt="Sun icon" />
                  </td>
                  <td className="days-temp">{Math.floor(data.Prediccion_temperatura_Madrid)} °C</td>
                  <td className="days-temp">{temperatureAt3AM[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando la predicción de temperatura para los próximos días...</p>
        )}
      </section>
    </section>
  );
};

export default Weather;









