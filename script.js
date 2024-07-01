
const apiKey="fc2c5623da31b01ae9f0ac7d7edf2c2d";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchButton=document.querySelector(".search button")

async function checkWeather(city){
    const response= await fetch(apiURL + city + `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round( data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keypress', function(event){
    if(event.key==='Enter'){
        checkWeather(searchBox.value);
    }
});




