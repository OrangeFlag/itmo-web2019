import {weatherAPI} from "./openWeatherMap";

export async function getWeatherByTown(town) {
    const response = await fetch(weatherAPI + `&q=${town}&units=metric`);

    const json = await response.json();

    return json;
}
