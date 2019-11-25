function drawWeather(getWeather, attachWeather, weatherTemplate, notFoundTemplate, city) {
    getWeather(city).then(response => {
        attachWeather(weatherTemplate(response));
    }).catch(_ => {
        attachWeather(notFoundTemplate());
    });
}

function getCity() {
    return document.getElementById("city").value;
}

function attachWeather(weatherHTML) {
    document.getElementById("weather").innerHTML = weatherHTML;
}

if (typeof document !== 'undefined') {
    document.getElementById("city-form").onsubmit = function () {
        drawWeather(getWeather, attachWeather, weatherTemplate, notFoundTemplate, getCity());
        return false;
    };
}

if (typeof module !== 'undefined') {
    module.exports = {drawWeather, getCity, attachWeather};
}