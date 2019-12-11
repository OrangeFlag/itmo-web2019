const weatherAPI = require('./openWeatherMap').weatherAPI;
const axios = require('axios');

async function getWeatherByCoord(latitude, longitude) {
    return (await axios.get(weatherAPI + `&lat=${latitude}&lon=${longitude}&units=metric`, {timeout: 20 * 1000})).data;
}

exports.getWeatherByCoord = getWeatherByCoord;