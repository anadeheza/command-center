import './App.css'
import { useState } from 'react';
import Clock from './componentes/Clock';
import Weather from './componentes/Weather';
import Notes from './componentes/Notes';

function App() {
  const [city, setCity] = useState("Rosario"); // Ciudad por defecto
  const [inputCity, setInputCity] = useState("");
  const [timezone, setTimezone] = useState(null); // Para el reloj inteligente

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
      setInputCity("");
    }
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Command Center!</h1>
        <form onSubmit={handleSearch} className="search-box">
          <input 
            type="text" 
            placeholder="Change city..." 
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      
      <main className="grid">
        <Clock timezoneOffset={timezone} /> 
        <Weather city={city} onTimezoneChange={setTimezone} />
        <Notes />
      </main>
    </div>
  );
}
export default App