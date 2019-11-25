const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?APPID=${unsecureApiKey}`;

async function getWeather(city) {
    return await $.getJSON(weatherAPI + `&q=${city}&units=metric`)
}

if (typeof module !== 'undefined') {
    module.exports = {getWeather};
}