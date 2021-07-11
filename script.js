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
    let html_data = `<div class="container-fluid mt-5">
   
    <div class="row ">
       <div class="card" style="height: 600px;color:#0f2862">
        <h1 class= "text-center text-uppercase" style="font-size:70px"> ${city_name}</h1>
       
            <div class="card-body">
                <div class="row mt-5">
                <div class="col-lg-4 col-md-4 col-6">
                <label style="font-size:50px"><b>${temp}C°</b></label><br>
                <label class=" text-capitalize text-left" style="font-size:20px"><b> ${weather_des}</b></label>
                
                </div>
                <div class="col-lg-8 col-md-4 col-6">
                <label class=" text-capitalize text-right"style="font-size:60px;">Country<b> ${country}</b></label>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-8 col-md-6 col-6 ">
                <img src="./icons/${iconid}.png">
                </div>
                <div class="col-lg-4 col-md-6 col-6 ">
                <label class=" text-capitalize text-right" style="font-size:20px">Time-Zone:<b> ${timezone}</b></label>
               </div>
               </div>
               <div class="row">
               <div class="col-lg-8 col-md-6 col-6">
               <label class=" text-capitalize text-right">Temp-min:<b> ${temp_min}</b></label><br>
               <label class=" text-capitalize text-right">Temp-max:<b> ${temp_max}</b></label>
               </div>
                <div class="col-lg-4 col-md-6 col-6">
                <label class=" text-capitalize text-right">Pressure:<b> ${Pressure}</b></label><br>
                <label class=" text-capitalize text-right">Sealevel:<b> ${sealevel}</b></label><br>
                <label class=" text-capitalize text-right">Latitude:<b> ${latitude}</b></label><br>
                <label class=" text-capitalize text-right">longitude:<b> ${longitude}</b></label><br>
                </div>
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