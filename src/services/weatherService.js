const API_KEY = "e59dcff771f76a0e03ee9aa435105716";

export async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  return await response.json();
}