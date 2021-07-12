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
    `<div class="container-fluid mt-5 section2">
   
    <div class="row mb-3 mt-3">
    <h5 class=" text-center text-uppercase" style="font-size:70px"><u>${city_name}</u></h5>
  <div class="col-lg-6 col-md-6 col-6">
    <div class="sections1" >
 
      <div class="sec1">
      <img src="./icons/${iconid}.png">
        
      <p style="font-size:50px;"><b>${weather_des}</b></p>
  
      
       
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-md-6 col-6">
    <div class="sections2">
      <div class="sec2">
       
        <p class=" text-center" style="font-size:50px;"><b>${temp}°C</b></p>
        <p class="text-center">Temperature-minimum:${temp_min}</p>
        <p class="text-center">Temperature-maximum${temp_max}</p>
        <p class="text-center">${country}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-6 col-md-6" style="margin-top:20px">
  <div class="sections3">
  <div class="sec3">
      <p >Pressure:${Pressure}</p>
      <p >Latitude:${latitude}</p>
      <p >Longitude:${longitude}</p>
    </div>
    </div>
    </div>
  <div class="col-sm-6 col-lg-6 col-md-6"style="margin-top:20px">
  <div class="sections4">
    <div class="sec4 text-center">
     
      <p class=" text-center" style="font-size:30px;"><b>HUMIDTY:${humidity}</b></p>
      <p >SEA-LEVEL:<u><b>${sealevel}<b><u></p>
  
 
    </div>
  </div>
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