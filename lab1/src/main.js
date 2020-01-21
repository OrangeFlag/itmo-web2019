function drawWeather(getWeather, attachWeather, weatherTemplate, notFoundTemplate, city) {
    getWeather(city).then(response => {
        attachWeather(weatherTemplate(response));
    }).catch(e => {
        attachWeather(notFoundTemplate());
    });
}

function attachWeather(weatherHTML) {
    document.getElementById("weather").innerHTML = weatherHTML;
}

if (typeof document !== 'undefined') {
    document.getElementById("city-form").onsubmit = function (event) {
        drawWeather(getWeather, attachWeather, weatherTemplate, notFoundTemplate, event.target[0].value);
        event.preventDefault()
    };
}

if (typeof module !== 'undefined') {
    module.exports = {drawWeather, attachWeather};
}