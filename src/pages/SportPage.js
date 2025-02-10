import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function SportPage() {
  const defaultCity = "Москва"; // Город по умолчанию
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(defaultCity); // Инициализируем город по умолчанию
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Функция для получения данных о погоде
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
        setError("Город не найден");
        setWeatherData(null);
      });
  };

  // Используем useEffect, чтобы получить данные о погоде при монтировании компонента
  useEffect(() => {
    getWeather();
  }, []); // Пустой массив зависимостей означает, что эффект будет вызван только при монтировании компонента

  const getSportRecommendation = () => {
    const temperature = Math.round(weatherData.main.temp - 273.15); // Переводим в Цельсий
    if (
      temperature < 10 ||
      weatherData.weather[0].description === "heavy intensity rain"
    ) {
      return (
        <div className="sport__result site__form-result">
          <h3 className="site__heading">
            Сегодня дождь или холодно, попробуйте йогу дома!
          </h3>
          <Link to="/sport/yoga">
            <button className="main__btn main__btn-yoga">Йога дома</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="sport__result site__form-result">
        <h3 className="site__heading">
          Погода отличная, как насчет утренней зарядки на улице?
        </h3>
        <Link to="/sport/outwork">
          <button className="main__btn main__btn-outwork">
            Занятия на свежем воздухе
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
          <h2 className="site__heading">Спортивные рекомендации</h2>
          <div className="weather-container">
            <h2 className="site__subtitle site__text-center">
              Выберите Ваш город
            </h2>
            <div className="site__form">
              <input
                className="site__input"
                type="text"
                placeholder="Введите город"
                value={city}
                onChange={handleCityChange}
              />
              <button className="site__btn" onClick={getWeather}>
                Поиск
              </button>
            </div>
            {error && <div className="error">{error}</div>}
            {weatherData && (
              <div className="weather-info">
                <h2 className="site__subtitle site__subtitle-city">
                  {weatherData.name}
                </h2>
                <p className="site__text">
                  Температура: {Math.round(weatherData.main.temp - 273.15)}°C
                </p>
                <p className="site__text">
                  Влажность: {weatherData.main.humidity} %
                </p>
                <p className="site__text">
                  Давление: {weatherData.main.pressure} hPa
                </p>
                <p className="site__text">
                  Скорость ветра: {weatherData.wind.speed} м/с
                </p>
                <p className="site__text">
                  Описание: {weatherData.weather[0].description}
                </p>
              </div>
            )}
          </div>

          {weatherData ? (
            <div>
              <p className="site__text">{getSportRecommendation()}</p>
            </div>
          ) : (
            <p className="site__text">Загрузка данных о погоде...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SportPage;
