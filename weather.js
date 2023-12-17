const apiKey ="e66827f66fae51b4dd685bf65d8de1c7";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon =document.querySelector(".w-icon");

async function weatherCheck(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".humdity").innerHTML= data.main.humidity="%";
    document.querySelector(".wind").innerHTML= data.wind.speed +" km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear_1.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle-removebg-preview.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/sun_cloud.png";
    }
}

searchBtn.addEventListener("click",()=>{
    weatherCheck(searchBox.value);
})