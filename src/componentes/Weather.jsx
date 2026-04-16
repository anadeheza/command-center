import { useState, useEffect } from "react";

function Weather() {
    const[weatherData, setWeatherData] = useState(null)
    const API_KEY = "39e5d453e46c0ba96d06e7b4dd258f25"

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
                );
                const data = await response.json();
                if (data.cod === 200) {
                    setWeatherData(data);
                    onTimezoneChange(data.timezone); 
                } else {
                    alert("Ciudad no encontrada");
                }
            } catch (error) { console.error(error); }
        };
        fetchWeather();
    }, [city]);

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