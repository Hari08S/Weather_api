import axios from "axios";

export const fetchWeatherByCity = async (city) => {
  try {

    // Get coordinates for the city
    const geo = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!geo.data.results || geo.data.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name } = geo.data.results[0];

    // Fetch weather
    const weather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const current = weather.data.current;

    return {
      city: name,
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
      condition: "Live Weather"
    };

  } catch (error) {

    console.error("Weather API error:", error.message);

    return {
      city,
      temperature: null,
      humidity: null,
      windSpeed: null,
      condition: "Unavailable"
    };
  }
};