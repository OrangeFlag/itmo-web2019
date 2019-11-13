export function parseWeatherApiResponse(it) {
    return {
        town: it && it.name,
        temperature: it && it.main && it.main.temp,
        wind: it && it.wind && it.wind.speed,
        cloudiness: it && it.clouds && it.clouds.all,
        mercuryPressure: it && it.main && it.main.pressure,
        humidity: it && it.main && it.main.humidity,
    }
}