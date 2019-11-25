import {weatherAPI} from "./openWeatherMap";

export async function getWeatherByCoord(latitude, longitude) {

    const response = await fetch(weatherAPI + `&lat=${latitude}&lon=${longitude}&units=metric`);

    if (response.status !== 200) {
        throw new Error('Status not 200');
    }

    return await response.json();
}
