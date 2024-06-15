import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; 
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const apiKey = 'dc960d58c1d2da86c7fed960e58b0ce4';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
      axios.get(url).then((response) => {
        setData((prevData) => [...prevData, response.data]);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();
      document.getElementById('time').innerText = time;
      document.getElementById('date').innerText = date;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="mode-toggle">
        <motion.button onClick={toggleMode} layout>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          
        </motion.button>
      </div>
      <div id="time" className="time"></div>
      <div id="date" className="date"></div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        {data.map((locationData, index) => (
          <div key={index} className="weather-box">
            <div className="top">
              <div className="location">
                <p>{locationData.name}</p>
              </div>
              <div className="temp">
                {locationData.main ? <h1>{locationData.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className="description">
                {locationData.weather ? <p>{locationData.weather[0].main}</p> : null}
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                {locationData.main ? (
                  <p className="bold">{locationData.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {locationData.main ? (
                  <p className="bold">{locationData.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {locationData.wind ? (
                  <p className="bold">{locationData.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
