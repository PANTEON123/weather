//  `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={05515a56ba6ecf5b1a3fe71c2608b2bc}`;

// `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`
let input1 = document.getElementById('inp');
let data = null;
let divTem = document.getElementById('tempc');
let cityLok = document.getElementById('Citymest');

input1.value = 'Moscow';
getWeather();

function getWeather() {
    let city = input1.value;

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=944ccb5d1a6b454890e113624222506&q=${city}&days=3`)
        .then(response => response.json())
        .then(resData => {
            data = resData;
            divTem.value = data.current.temp_c;
            tempc.innerHTML = `+${data.current.temp_c}°C`;
            forCity.innerHTML = data.location.name;
            forWind.innerHTML = `${data.current.wind_kph}km/h`;
            forRain.innerHTML = `${data.current.precip_mm}mm`;
            maxTemToday.innerHTML = `+${data.forecast.forecastday[0].day.maxtemp_c}°C`;
            minTemToday.innerHTML = `+${data.forecast.forecastday[0].day.mintemp_c}°C`;

            precipToday.innerHTML = `${data.forecast.forecastday[0].day.totalprecip_mm}mm`;
            sunsetToday.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
            sunriseToday.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
            imgToday.src = data.forecast.forecastday[0].day.condition.icon;

            maxTemTomor.innerHTML = `+${data.forecast.forecastday[1].day.maxtemp_c}°C`;
            minTemTomor.innerHTML = `+${data.forecast.forecastday[1].day.mintemp_c}°C`;
            precipTomor.innerHTML = `${data.forecast.forecastday[1].day.totalprecip_mm}mm`;
            sunsetTomor.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;
            sunriseTomor.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
            imgTomor.src = data.forecast.forecastday[1].day.condition.icon;

            maxTemNextD.innerHTML = `+${data.forecast.forecastday[2].day.maxtemp_c}°C`;
            minTemNextD.innerHTML = `+${data.forecast.forecastday[2].day.mintemp_c}°C`;
            precipNextD.innerHTML = `${data.forecast.forecastday[2].day.totalprecip_mm}mm`;
            sunsetNextD.innerHTML = `${data.forecast.forecastday[2].astro.sunset}`;
            sunriseNextD.innerHTML = `${data.forecast.forecastday[2].astro.sunrise}`;
            imgNextD.src = data.forecast.forecastday[2].day.condition.icon;
        });
};

but.addEventListener('click', getWeather);
/*
fetch(`api.openweathermap.org/data/2.5/forecast?q={city name}&appid={05515a56ba6ecf5b1a3fe71c2608b2bc}`)
*/
//maxtemp_c
//mintemp_c