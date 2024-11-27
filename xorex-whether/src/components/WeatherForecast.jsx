import React from "react";
import { Card } from "react-bootstrap";

const WeatherForecast = ({ forecast }) => (
  <div className="forecast-list">
    <h3   style={{
        color: "blue",
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.5",
      }}>Forecast</h3>
    <ul className="list-unstyled">
      {forecast.map((item, index) => (
        <li key={index}>
          <Card className="mb-2">
            <Card.Body>
              <p>Date: {new Date(item.dt_txt).toLocaleDateString()}</p>
              <p>Temp: {item.main.temp}°C</p>
              <p>Weather: {item.weather[0].description}</p>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  </div>
);

export default WeatherForecast;
