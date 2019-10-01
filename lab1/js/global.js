const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?APPID=${unsecureApiKey}`;

function drawWeather(weather) {

    const weatherTemplate = doT.template(`
        {{? it == null}}
        City not found
        <br>
        {{?? it.name }}
        City: {{=it.name}}, {{=it.sys.country}}
        <br>
        {{??}}
        {{?}}
        
        {{? it && it.main && it.main.temp }}
        Temperature: {{=it.main.temp}}°
        <br>
        {{?}}
        
        {{? it && it.clouds && it.clouds.all }}
        Clouds: {{=it.clouds.all}}%
        <br>
        {{?}}
        
        {{? it && it.wind && it.wind.speed }}
        Wind speed: {{=it.wind.speed}}m/s
        <br>
        {{?}}
        
        {{? it && it.visibility }}
        Visibility: {{=it.visibility}}m
        <br>
        {{?}}
        `);
    document.getElementById("weather").innerHTML = weatherTemplate(weather);

}

function getWeather() {
    const city = document.getElementById("city").value;

    $.getJSON(weatherAPI + `&q=${city}&units=metric`, drawWeather)
        .fail(function (jqxhr) {
            if (jqxhr.status === 404) {
                drawWeather(null)
            }
        })
}

document.getElementById("city-form").onsubmit = function () {
    getWeather();
    return false;
};