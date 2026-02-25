import { useState } from "react";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import { fetchWeatherByCity } from "../services/api";

const Dashboard = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city) return;

    setLoading(true);
    const data = await fetchWeatherByCity(city);
    setWeather(data);
    setLoading(false);
  };

  return (
    <div className="dashboard">

      <Header />

      <main className="main">

        <div className="search-box">

          <input
            className="search-input"
            placeholder="Enter city (e.g. Chennai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button className="search-btn" onClick={searchWeather}>
            Search
          </button>

        </div>

        {loading && <p className="status-msg">Loading weather...</p>}

        {weather && !loading && (
          <div className="weather-list">
            <WeatherCard data={weather} />
          </div>
        )}

      </main>

    </div>
  );
};

export default Dashboard;