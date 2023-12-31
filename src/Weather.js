import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="myForm">
          <input
            type="text"
            id="city-input"
            placeholder="Type your city"
            autofocus="on"
          />
          <input type="submit" value="Enter" id="enter-button" />
          <input type="submit" value="🗺️Current Location" id="current-button" />
        </div>

        <div className="listSmall">
          <div className="row">
            <div className="col-6">
              <h1>California</h1>
              <br />
              <h3 id="dateHour">10:00</h3>
              <br />
              <p>
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  id="icon"
                  width="20px"
                  alt="weather"
                />
                <span id="current-temp"></span>
                <span id="celsius">°C</span>
              </p>
            </div>
            <div className="col-6">
              <div className="description">
                <p>
                  <span id="weather-description"></span>
                  <br />
                  <strong>Humidity: </strong>
                  <span id="humidity"></span>%
                  <br />
                  <strong>Wind: </strong>
                  <span id="wind"></span>km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="weatherForecast" id="forecast"></div>
      </form>
      <p className="footer">
        <a
          href="https://github.com/Maryam-coding/WeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Maryam Noor Hussain
      </p>
    </div>
  );
}
