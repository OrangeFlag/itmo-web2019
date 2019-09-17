const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://samples.openweathermap.org/data/2.5/weather?appid=${unsecureApiKey}`;

function getWeather(city, country) {
    return $.getJSON(weatherAPI + `&q=${city},${country}`, function (weather) {
        const city_country = doT.template("City: {{=it.name}} <br> Country: {{=it.sys.country}}");
        document.getElementById("city_country").innerHTML = city_country(weather);

        const time = doT.template("Time: {{=it.dt}}");
        document.getElementById("time").innerHTML = time(weather);

        const temp = doT.template("Temperature: {{=it.main.temp}}");
        document.getElementById("temp").innerHTML = temp(weather);

        const clouds_percent = doT.template("Clouds: {{=it.clouds.all}} %");
        document.getElementById("clouds_percent").innerHTML = clouds_percent(weather);

        const wind_speed = doT.template("Wind speed: {{=it.wind.speed}} m/s");
        document.getElementById("wind_speed").innerHTML = wind_speed(weather);

        const visibility = doT.template("Visibility: {{=it.visibility}}");
        document.getElementById("visibility").innerHTML = visibility(weather);
    })
}

function drawWeather() {
    let weather = getWeather(
        document.getElementById("city").value,
        document.getElementById("country").value
    );
}
