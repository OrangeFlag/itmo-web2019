import {getWeatherByTown} from "../utils/getWeatherByTown";
import {updateWeatherByTownSuccess} from "./updateWeatherByTownSuccess";
import {updateWeatherError} from "./updateWeatherError";

export const UPDATE_WEATHER_BY_TOWN_REQUEST = 'UPDATE_WEATHER_BY_TOWN_REQUEST';

export function updateWeatherByTownRequest(town) {
    return dispatch => {

        dispatch({
            type: UPDATE_WEATHER_BY_TOWN_REQUEST,
        });

        getWeatherByTown(town).then(res => {
            dispatch(updateWeatherByTownSuccess(res))
        }).catch(error => dispatch(updateWeatherError()));
    }
}