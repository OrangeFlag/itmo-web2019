const unsecureApiKey = "1c14e84db0be925cc69df123e5989ecc";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?APPID=${unsecureApiKey}`;

async function getWeather(city) {
    return fetch(weatherAPI + `&q=${city}&units=metric`).then(response => {
        if (response.status !== 200) {
            throw new Error("Not 200 response")
        } else {
            return response.json()
        }
    })
}

if (typeof module !== 'undefined') {
    module.exports = {getWeather};
}