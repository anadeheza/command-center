import { useState, useEffect } from "react";

function Weather() {
    const[weatherData, setWeatherData] = useState(null)
    const API_KEY = "39e5d453e46c0ba96d06e7b4dd258f25"
    const CITY = "Rosario"

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=en`
                );
                const data = await response.json();
                setWeatherData(data);
            } catch(error) {
                console.error("Error", error);
            }
        };
            fetchWeather();
    }, []);

    if(!weatherData) return <div className="card"> Cargando clima... </div>

    return (
        <div className="weather-card">
            <h3>{weatherData.name}</h3>
            <h2>{Math.round(weatherData.main.temp)}°C</h2>
            <p>{weatherData.weather[0].description}</p>
        </div>
    )
}

export default Weather;