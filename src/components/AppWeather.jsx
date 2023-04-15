import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const AppWeather = () => {
    const [weather, setWeather] = useState({})
    const [isCelsius, setIsCelsius] = useState(false)
    const celsius = (weather.main?.temp - 273.15).toFixed(1)
    const fahrenheit = (celsius * 9 / 5 + 32).toFixed(1)
    

    useEffect(() => {
        const success = pos => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fad05f1349de8097b8da6269cf6fe01`)
                .then(res => setWeather(res.data))
        }

        const options = () => {
            enableHighAccuracy: true;

        }

        navigator.geolocation.getCurrentPosition(success, options);

    }, [])

    console.log(weather)

    return (

        <div className='card'>
           
                  
                        <h1 className='title'>weather App</h1>

                        <div className='container-main'>
                            <h3>City: {weather.name}, {weather.sys?.country}</h3>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="weather icon" />

                            <h2>{isCelsius ? celsius : fahrenheit}
                                {isCelsius ? "°C" : "°F"}
                            </h2>
                        </div>


                        <div className='container-description'>
                            <p>"{weather.weather?.[0].description}"</p>
                            <p><i className="fa-solid fa-droplet"></i> <span>humidity:</span> {weather.main?.humidity}%</p>
                            <p><i className="fa-solid fa-wind"></i> <span>wind speed</span> {weather.wind?.speed}m/s</p>
                            <p><i className="fa-solid fa-cloud"></i> <span>clouds:</span> {weather.clouds?.all}%</p>
                        </div>


                        <div className='container-button'>
                            <button onClick={() => setIsCelsius(!isCelsius)} >Degress °F/°C</button>
                        </div>
                    
            

        </div>
    );
};

export default AppWeather;