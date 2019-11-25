import {getWeatherByTown} from "../utils/getWeatherByTown";
import {updateWeatherByTownSuccess} from "./updateWeatherByTownSuccess";
import {updateWeatherError} from "./updateWeatherError";

export const UPDATE_WEATHER_BY_TOWN_REQUEST = 'UPDATE_WEATHER_BY_TOWN_REQUEST';

export function updateWeatherByTownRequest(town, town_id = town) {
    return dispatch => {

        dispatch({
            type: UPDATE_WEATHER_BY_TOWN_REQUEST,
            payload: {town: town_id}
        });

        getWeatherByTown(town).then(res => {
            dispatch(updateWeatherByTownSuccess(town_id, res))
        }).catch(error => dispatch(updateWeatherError(town_id)));
    }
}