// Open Weather API Variables
var apiKey = "419740e7fcbbe0d39301a90c2e28ea8c";
var city = "";
var baseURL = "https://api.openweathermap.org/data/2.5";
var iconUrl = "https://openweathermap.org/img/w/";
var weatherURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;

// HTML Elements
var searchInput = $(".weather-search");
var searchForm = $(".search-form");
var searchBtn = $(".search-button");
var todayEl = $("#today");
var forecastEl = $("#forecast");
var historyEl = $(".history");
var historyData = $(".search-history");

// Moment JS
var currentDay = moment().format("dddd Do MMMM YYYY");
$("#todaysDate").text(currentDay);

//  get city list from local storage and adds to html
function getCityList() {
  var cityHistory = JSON.parse(localStorage.getItem("city")) || [];
  return cityHistory;
}

// Function to grab forecast data once search button is clicked
function getForecast(event) {
  event.preventDefault();

  if (city) {
    function cityForecast(cityName) {
      $.get(weatherURL + `q=${cityName}`);
    }
  }
}

function init() {
  searchBtn.click(getForecast);
}

init();
