document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city){
    var key = "acf35c2c24deeb6a70c7dbffd5368436"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp){
            return resp.json()
        }) //convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data)
        })
        .catch(function (){
            //cath any errors
        });
}

function cityWeather(e){
    weatherDataFetch("tallinn")
}

function drawWeather(data){
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celcius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}