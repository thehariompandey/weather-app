import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setweather] = useState();
  const [city, setcity] = useState();
  const handlecityChange = (event) => {
    setcity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`88c61e12e7d6c30a1cdaec03b70de09f`}`
      );
      setweather(response);
    } catch(error) {
      console.log("error fetching in weather data" , error);

    }
  };
  console.log(weather,"weather");

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="container">
      <input
        placeholder="enter the city name"
        type="text"
        value={city}
        onChange={handlecityChange}
      />
      <button onClick={handleClick}>check weather</button>
      {weather && (
        <>
        <div className="weather-info">
          <h3>{weather.data.name}</h3>
          <p>Temp is {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>

        </div>
        </>
      )}
    </div>
  );
}

export default Weather;
