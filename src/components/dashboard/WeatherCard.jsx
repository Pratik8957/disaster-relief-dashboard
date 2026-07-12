import { useEffect, useState } from "react";
import { getWeather } from "../../services/weatherService";
import { useCity } from "../../context/CityContext";

function WeatherCard() {
  const { selectedCity } = useCity();

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);

      try {
        const data = await getWeather(selectedCity);
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [selectedCity]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold text-white">
          🌦 Weather
        </h2>

        <p className="mt-8 text-slate-400">
          Loading...
        </p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold text-white">
          Weather
        </h2>

        <p className="mt-8 text-red-400">
          Failed to load weather.
        </p>
      </div>
    );
  }

  return (
    <div
      id="weather-section"
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="text-xl font-bold text-white">
        🌦 {weather.name}
      </h2>

      <h1 className="mt-8 text-5xl font-bold text-white">
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className="mt-2 capitalize text-cyan-400">
        {weather.weather[0].description}
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div>
          <p className="text-sm text-slate-400">
            Humidity
          </p>

          <h3 className="mt-2 font-semibold text-white">
            {weather.main.humidity}%
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Wind
          </p>

          <h3 className="mt-2 font-semibold text-white">
            {weather.wind.speed} m/s
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Feels Like
          </p>

          <h3 className="mt-2 font-semibold text-white">
            {Math.round(weather.main.feels_like)}°C
          </h3>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;