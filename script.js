function displayDetails(city) {
    let city_name = city.name;
    let humidity = city.main.humidity;
    let iconid = city.weather[0].icon;
    let country = city.sys.country;
    let timezone = city.timezone;
    let temp = city.main.temp;
    let temp_min = city.main.temp_min;
    let temp_max = city.main.temp_max;
    let weather_des = city.weather[0].description;
    let Pressure = city.main.pressure;
    let sealevel = city.main.sea_level;
    let latitude = city.coord.lat;
    let longitude = city.coord.lon;
    console.log(iconid);
    let html_data = 
    `<div class="container">
  <h1 class="text-center"><b>${city_name}<b></h1>
  <div class="row align-items-start">
    <div class="col-lg-6 col-6">
      <img src="./icons/${iconid}.png">
    </div>
    <div class="col-lg-6 col-6">
      <span style="font-size:40px">${temp}°C</span><br>
      <span>${weather_des}</span>
    </div>
    <div class="col-lg-6 col-6">
      <span style="font-size:40px;"><b>${country}</b></span>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-lg-6 col-6">
      <span><b>Latitude:${latitude}</b></span><br>
      <span><b>Longitude:${longitude}</b></span>
    </div>
    <div class="col-lg-6 col-6">
     <span>Temperature-Max:${temp_max}</span><br>
     <span>Temperature-Min:${temp_min}</span>
    </div>
    <div class="col-lg-6 col-6">
    <span>humidity:${humidity}</span><br>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col-lg-6 col-6">
    <span>sealevel:${sealevel}</span><br>
    </div>
    <div class="col-lg-6 col-6">
    <span>Time-zone:${timezone}</span><br>
    </div>
    <div class="col-lg-6 col-6">
      <span>pressure:${Pressure}</span>
    </div>
  </div>
</div>`

    result.innerHTML = html_data;
}
function resetButton() {
    city.value = " ";
    result.innerHTML = ""
}
function fetchWeather() {

    let city_name = city.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=93c046e9370077994082d7249567b1db&units=metric`

    fetch(url).then(res => res.json()).then(data => displayDetails(data))

}