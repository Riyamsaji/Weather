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
    let html_data = `<div class="container-fluid mt-5">
    <div class="row ">
        <div class="card" style="height: 600px;">
            <div class="card-body bg-light">
                <div class="row mt-5">
                <div class="col-lg-3 col-md-4 col-sm-6" style="margin-top:20px">
                <label class=" text-capitalize text-left" style="font-size:20px">Description<b> ${weather_des}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label style="font-size:30px"><b>${temp}C°</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 "style="margin-top:20px">
                <label class=" text-capitalize text-right">City<b> ${city_name}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6 ml-4 mt-6"style="margin-top:20px"
                    <label class=" text-capitalize text-right">Country<b> ${country}</b></label>
                </div>
              
            
            
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Time-Zone:<b> ${timezone}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Temp-min:<b> ${temp_min}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Temp-max:<b> ${temp_max}</b></label>
                
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <img src="./icons/${iconid}.png" style="width:200">
                </div>
              
               
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Pressure:<b> ${Pressure}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Sealevel:<b> ${sealevel}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">Latitude:<b> ${latitude}</b></label>
                </div>
                <div class="col-lg-3 col-md-4 col-6"style="margin-top:20px">
                    <label class=" text-capitalize text-right">longitude:<b> ${longitude}</b></label>
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