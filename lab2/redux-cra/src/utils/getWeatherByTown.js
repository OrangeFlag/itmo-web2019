import {weatherAPI} from "./openWeatherMap";

export async function getWeatherByTown(town) {
    const response = await fetch(weatherAPI + `&q=${town}&units=metric`);

    if (response.status !== 200){
        throw new Error('Status not 200');
    }

    return await response.json();
}
