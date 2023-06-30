let api_key = ""; // Enter your own api key
let cityName = document.getElementById("city-input");
let searchBtn = document.getElementById("btn-search");
let city = document.getElementById("city-name");
let weatherIcon = document.getElementById("weather-icon");
let weatherCondition = document.getElementById("weather-data");
let temperatureData = document.getElementById("temp");
let humidityData = document.getElementById("humidity");
let windData = document.getElementById("wind");


//Fetch weather data
let getWeatherData = (location) => {
 
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      setWeatherData(data);
    })
    .catch(() => {
      city.innerHTML = "City Not Found";
    });
};

// Set weather data
let setWeatherData = (data) => {
  city.innerHTML = data.name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherCondition.innerHTML = data.weather[0].main;
  temperatureData.innerHTML = data.main.temp;
  humidityData.innerHTML = `${data.main.humidity}%`;
  windData.innerHTML = `${data.wind.speed}km/h`;
};

// add click event to search button to fetch data
search.addEventListener("click", (e) => {
  e.preventDefault();
  const location = input.value;
  getWeatherData(location);
});
