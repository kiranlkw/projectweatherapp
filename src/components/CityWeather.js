import React, { useState } from 'react';
import axios from 'axios';
export default function CityWeather() {

      
  const [city,setCity]=useState("");
  const [weatherData,setWeatherData]=useState(null);
  const [error,setError]=useState('')


  const API_KEY='b00572b9a7196a36fd9e1f334c0bea43';


  const handleCity=(e)=>{
    setCity(e.target.value);
  }

  const getWeather =()=>{

        if(!city)
        {
          setError('Please enter city');
          return;

        }

        setError('');

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response=>setWeatherData(response.data))
        .catch(error=>setError('city not found invalid api key'))

  }

  return (
    <div>

      <h1>Weather App</h1>
        <div>
          <input type="text" 
                placeholder='Enter city'
                value={city}
                onChange={handleCity}
          />
          <button onClick={getWeather}>Click</button>
        </div>
      {
        weatherData && (
          <div>
          <h1>{weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )
      }

    </div>
  )
}
