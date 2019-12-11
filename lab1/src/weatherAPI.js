const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?APPID=${unsecureApiKey}`;

async function getWeather(city) {
    return fetch(weatherAPI + `&q=${city}&units=metric`).then(response => {
        return response.json()
    })
}

if (typeof module !== 'undefined') {
    module.exports = {getWeather};
}