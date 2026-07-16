import React, { useEffect, useState, useRef } from "react";
import "./Weather.css";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloudy_icon from "../assets/cloudy.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      );

      const data = await response.json();
      console.log(data);

      if (data.cod != 200) {
        alert(data.message);
        setLoading(false);
        return;
      }

      setWeatherData({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: allIcons[data.weather[0].icon] || clear_icon,
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    search(" ");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city..."
        />

        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>

 {loading ? (
  <h2>Loading...</h2>
) : weatherData ? (
  <>
    <img
      src={weatherData.icon}
      alt=""
      className="weather-icon"
    />

    <p className="temperature">{weatherData.temperature}°C</p>

    <p className="location">{weatherData.location}</p>

    <div className="weather-data">
      <div className="col">
        <img src={humidity_icon} alt="" />
        <div>
          <p>{weatherData.humidity}%</p>
          <span>Humidity</span>
        </div>
      </div>

      <div className="col">
        <img src={wind_icon} alt="" />
        <div>
          <p>{weatherData.windSpeed} km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  </>
) : (
  <h3>No Data Found</h3>
)}
    </div>
  );
};

export default Weather;