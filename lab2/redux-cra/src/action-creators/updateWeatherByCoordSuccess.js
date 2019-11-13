import {parseWeatherApiResponse} from "../utils/parseWeatherApiResponse";

export const UPDATE_WEATHER_BY_COORD_SUCCESS = 'UPDATE_WEATHER_BY_COORD_SUCCESS';

export function updateWeatherByCoordSuccess(weatherApiResponse) {
    return {
        type: UPDATE_WEATHER_BY_COORD_SUCCESS,
        payload: parseWeatherApiResponse(weatherApiResponse)
    }
}