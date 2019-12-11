import {parseWeatherApiResponse} from "../utils/parseWeatherApiResponse";

export const UPDATE_WEATHER_BY_TOWN_SUCCESS = 'UPDATE_WEATHER_BY_TOWN_SUCCESS';

export function updateWeatherByTownSuccess(town_id, weatherApiResponse) {
    return {
        type: UPDATE_WEATHER_BY_TOWN_SUCCESS,
        payload: {town: town_id, weather: parseWeatherApiResponse(weatherApiResponse)}
    }
}