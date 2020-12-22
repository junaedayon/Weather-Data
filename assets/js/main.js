let API_KEY = "1c39325bf75e1bf015040a464998459c";

getWeatherData =  (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";

  const full_url = `${url}?q=${city}&appid=${API_KEY}&units=imperial`;

  const weatherPromise = fetch(full_url);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
    const city = document.getElementById("search-city").value;

    getWeatherData(city)
    .then((response) => {
        console.log(response);
        showWeatherData(response)
    }).catch ((error) => {
        console.log(error);
    })
}

showWeatherData  = (currentWeather) => {
    document.getElementById("city-name").innerText = currentWeather.name;
    document.getElementById("weather-type").innerText = currentWeather.weather[0].main;
    document.getElementById("temp").innerText = currentWeather.main.temp;

    document.getElementById("min-temp").innerText = currentWeather.main.temp_min;

    document.getElementById("max-temp").innerText = currentWeather.main.temp_max;


}