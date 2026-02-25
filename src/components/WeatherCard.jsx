/**
 * WeatherCard — Displays weather info for a single city.
 * Uses optional chaining and fallback values to handle missing data gracefully.
 */
const WeatherCard = ({ data }) => {
    // Safely extract values with fallbacks for missing data
    const city = data?.city || "Unknown City";
    const condition = data?.condition || "N/A";
    const temperature = data?.temperature != null ? `${data.temperature}°C` : "--";
    const humidity = data?.humidity != null ? `${data.humidity}%` : "--";
    const windSpeed = data?.windSpeed != null ? `${data.windSpeed} km/h` : "--";

    return (
        <div className="weather-card">
            <h2 className="card-city">{city}</h2>
            <span className="card-condition">{condition}</span>

            <div className="card-temp">{temperature}</div>

            <div className="card-details">
                <div className="detail">
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{humidity}</span>
                </div>
                <div className="detail">
                    <span className="detail-label">Wind</span>
                    <span className="detail-value">{windSpeed}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
