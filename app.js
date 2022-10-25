document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city){
    var key = "acf35c2c24deeb6a70c7dbffd5368436"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp){
            return resp.json()
        }) //convert data to json
        .then(function (data) {
            console.log(data);
        })
        .catch(function (){
            //cath any errors
        });
}

function cityWeather(e){
    weatherDataFetch("tallinn")
}