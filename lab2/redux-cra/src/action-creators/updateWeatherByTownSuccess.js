import {parseWeatherApiResponse} from "../utils/parseWeatherApiResponse";

export const UPDATE_WEATHER_BY_TOWN_SUCCESS = 'UPDATE_WEATHER_BY_TOWN_SUCCESS';

export function updateWeatherByTownSuccess(weatherApiResponse) {
    return {
        type: UPDATE_WEATHER_BY_TOWN_SUCCESS,
        payload: parseWeatherApiResponse(weatherApiResponse)
    }
}