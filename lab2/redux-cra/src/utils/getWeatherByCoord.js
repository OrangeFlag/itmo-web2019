import {weatherAPI} from "./openWeatherMap";

export async function getWeatherByCoord(latitude, longitude) {

    const response = await fetch(weatherAPI + `&lat=${latitude}&lon=${longitude}&units=metric`);

    const json = await response.json();

    return json;
}
