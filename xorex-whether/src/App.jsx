import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import WeatherDropdown from "./components/WeatherDropdown";
import WeatherForecast from "./components/WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "a52e7e1f9cd15c4f30656d99fe345124";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const App = () => {
  
  const storedCity = localStorage.getItem("selectedCity") || "Ho Chi Minh";
  const storedTheme = localStorage.getItem("theme") || "light";

  const [city, setCity] = useState(storedCity);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [days, setDays] = useState(8); 
  const [theme, setTheme] = useState(storedTheme);

  const cities = ["Ho Chi Minh", "Singapore", "Kuala Lumpur", "Tokyo", "Athens"];

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecastData = async (city, days) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          cnt: Math.min(days * 8, 40), 
          appid: API_KEY,
          units: "metric",
        },
      });
      setForecast(response.data.list);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedCity", city);
    localStorage.setItem("theme", theme); 
    fetchWeatherData(city);
    fetchForecastData(city, days);
  }, [city, days, theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className={theme}
      style={{
        backgroundColor: theme === "dark" ? "#121212" : "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      <div className="container">
       
        <div className="d-flex justify-content-between align-items-center mb-3">
          <WeatherDropdown
          
            options={cities}
            selected={city}
            onChange={(value) => setCity(value)}
          />
          <h1
            className="my-4 text-center flex-grow-1"
            style={{
              color: "blue",
              fontSize: "2.5rem",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            Weather App
          </h1>
          <button
            className={`btn ${
              theme === "dark" ? "btn-outline-light" : "btn-outline-primary"
            }`}
            onClick={toggleTheme}
            aria-label={`Toggle to ${theme === "light" ? "dark" : "light"} mode`}
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        <div className="mb-3">
          <label
            style={{
              color: "blue",
              fontSize: "1.5rem",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            Number of days for forecast:
          </label>
          <input
            type="number"
            min="1"
            max="5" 
            value={days}
            onChange={(e) => {
              const input = Number(e.target.value);
              if (input > 5) {
                alert("Maximum forecast days supported is 5.");
              } else {
                setDays(input);
              }
            }}
            className="form-control"
          />
        </div>

       
        {weather && <WeatherCard weather={weather} />}
        {forecast.length > 0 && <WeatherForecast forecast={forecast} />}
      </div>
    </div>
  );
};

export default App;
