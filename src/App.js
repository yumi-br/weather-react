import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Florianopolis",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div>
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt="{weatherData.description}"
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="mt-3">
        <small>
          <a
            target="_blank"
            href="https://github.com/yumi-br/weather-react"
            rel="noreferrer"
          >
            Open sourced
          </a>{" "}
          by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yumi-aline-inoue-450650267/"
            rel="noreferrer"
          >
            Yumi{" "}
          </a>
          and API from{" "}
          <a
            target="_blank"
            href="https://openweathermap.org/"
            rel="noreferrer"
          >
            Open Weather Map
          </a>
          .
        </small>
      </footer>
    </div>
  );
}
