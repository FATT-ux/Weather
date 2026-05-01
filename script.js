const apiKey = '53f0764333f109a93743a1e631b32fae';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const weatherIcon = document.querySelector('.welcome-img');

const searcInput = document.getElementById('search');
const searcButton = document.getElementById('btn'); 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // поиск городов мы разделили api
    const data = await response.json();
    console.log(data, "data");

    document.querySelector('.city').innerHTML = data.name;
    //достаем .main. это внутри api
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451;'; //округляем
    document.querySelector('.humidity-desc').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind-speed-desc').innerHTML = data.wind.speed + " км/ч";
    //меняем картинку в зависимости от того что в api написано
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = './images/clear.png';   
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = './images/clouds.png';
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = './images/rain.png';
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = './images/snow.png';
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = './images/mist.png';
    }
}
//передаем из input введеные данные в функцюю  как раз наш параментр (city)
searcButton.addEventListener('click', function(event){
    event.preventDefault();
    checkWeather(searcInput.value);

    searcInput.value = '';
})
