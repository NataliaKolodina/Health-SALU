import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function SportPage() {
  const defaultCity = "Moscow"; // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(defaultCity);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Function to fetch weather data
  const getWeather = () => {
    if (!city) return;

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551689e62080bf6398e7e8c05e48ddcc`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setWeatherData(response.data);
          setError(null);
        }
      })
      .catch((error) => {
        setError("City not found");
        setWeatherData(null);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getSportRecommendation = () => {
    const temperature = Math.round(weatherData.main.temp - 273.15); // Convert to Celsius
    if (
      temperature < 10 ||
      weatherData.weather[0].description === "heavy intensity rain"
    ) {
      return (
        <div className="sport__result site__form-result">
          <h3 className="site__heading">
            It's rainy or cold today, try yoga at home!
          </h3>
          <Link to="/sport/yoga">
            <button className="main__btn main__btn-yoga">Home Yoga</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="sport__result site__form-result">
        <h3 className="site__heading">
          The weather is great, how about a morning workout outside?
        </h3>
        <Link to="/sport/outwork">
          <button className="main__btn main__btn-outwork">
            Outdoor Workout
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="site__size">
        <div className="container site__space">
          <h2 className="site__heading">Sport Recommendations</h2>
          <div className="weather-container">
            <h2 className="site__subtitle site__text-center">
              Choose Your City
            </h2>
            <div className="site__form">
              <input
                className="site__input"
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleCityChange}
              />
              <button className="site__btn" onClick={getWeather}>
                Search
              </button>
            </div>
            {error && <div className="error">{error}</div>}
            {weatherData && (
              <div className="weather-info">
                <h2 className="site__subtitle site__subtitle-city">
                  {weatherData.name}
                </h2>
                <p className="site__text">
                  Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
                </p>
                <p className="site__text">
                  Humidity: {weatherData.main.humidity} %
                </p>
                <p className="site__text">
                  Pressure: {weatherData.main.pressure} hPa
                </p>
                <p className="site__text">
                  Wind speed: {weatherData.wind.speed} m/s
                </p>
                <p className="site__text">
                  Description: {weatherData.weather[0].description}
                </p>
              </div>
            )}
          </div>

          {weatherData ? (
            <div>
              <p className="site__text">{getSportRecommendation()}</p>
            </div>
          ) : (
            <p className="site__text">Loading weather data...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SportPage;
