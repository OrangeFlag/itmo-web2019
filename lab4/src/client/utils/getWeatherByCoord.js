export async function getWeatherByCoord(latitude, longitude) {
    const response = await fetch(`/weather/coord?lat=${latitude}&long=${longitude}`);

    if (response.status !== 200) {
        throw new Error('Status not 200');
    }

    return await response.json();
}
