const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?APPID=${unsecureApiKey}`;

function drawWeather(weather) {

    const city_country = doT.template(`
        {{? it == null}}
        City not found
        {{?? it.name }}
        City: {{=it.name}}, {{=it.sys.country}}
        {{??}}
        {{?}}
        `);
    document.getElementById("city_country").innerHTML = city_country(weather);

    // const time = doT.template("Time: {{=new Date(it.dt*1000).toISOString().slice(-13, -5)}}");
    // document.getElementById("time").innerHTML = time(weather);

    const temp = doT.template(`
        {{? it && it.main && it.main.temp }}
        Temperature: {{=it.main.temp}}°
        {{?}}
        `);
    document.getElementById("temp").innerHTML = temp(weather);

    const clouds_percent = doT.template(`
        {{? it && it.clouds && it.clouds.all }}
        Clouds: {{=it.clouds.all}}%
        {{?}}
        `);
    document.getElementById("clouds_percent").innerHTML = clouds_percent(weather);

    const wind_speed = doT.template(`
        {{? it && it.wind && it.wind.speed }}
        Wind speed: {{=it.wind.speed}}m/s
        {{?}}
        `);
    document.getElementById("wind_speed").innerHTML = wind_speed(weather);

    const visibility = doT.template(`
        {{? it && it.visibility }}
        Visibility: 
        {{=it.visibility}}m
        {{?}}
        `);
    document.getElementById("visibility").innerHTML = visibility(weather);

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