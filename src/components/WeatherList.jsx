import WeatherCard from "./WeatherCard";

/**
 * WeatherList — Loops through the weather data array and renders a
 * WeatherCard for each city. Uses a composite key for stable React rendering.
 */
const WeatherList = ({ weatherData }) => {
    // Guard: if weatherData is empty or not an array, show a helpful message
    if (!Array.isArray(weatherData) || weatherData.length === 0) {
        return <p className="status-msg">No weather data available.</p>;
    }

    return (
        <div className="weather-list">
            {weatherData.map((item, index) => (
                // Composite key using city + temperature for uniqueness and stability
                <WeatherCard
                    key={`${item?.city || "unknown"}-${item?.temperature ?? index}`}
                    data={item}
                />
            ))}
        </div>
    );
};

export default WeatherList;
