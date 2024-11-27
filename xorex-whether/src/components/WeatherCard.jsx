import React from "react";
import { Card } from "react-bootstrap";
import "./styles/WeatherCard.css";

const WeatherCard = ({ weather }) => (
  <Card className="mb-4 weather-card">
    <Card.Body>
      <Card.Title>{weather.name}</Card.Title>
      <Card.Text>Temperature: {weather.main.temp}°C</Card.Text>
      <Card.Text>Humidity: {weather.main.humidity}%</Card.Text>
      <Card.Text>Wind Speed: {weather.wind.speed} m/s</Card.Text>
    </Card.Body>
  </Card>
);

export default WeatherCard;
