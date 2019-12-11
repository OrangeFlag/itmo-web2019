const weatherAPI = require('./openWeatherMap').weatherAPI;
const axios = require('axios');

async function getWeatherByTown(town) {
    return (await axios.get(weatherAPI + `&q=${town}&units=metric`, {timeout: 20 * 1000})).data;
}

exports.getWeatherByTown = getWeatherByTown;