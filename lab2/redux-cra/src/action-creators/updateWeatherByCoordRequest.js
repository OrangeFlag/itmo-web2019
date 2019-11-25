import {getWeatherByCoord} from "../utils/getWeatherByCoord";
import {updateWeatherByCoordSuccess} from "./updateWeatherByCoordSuccess";
import {updateWeatherError} from "./updateWeatherError";

export const UPDATE_WEATHER_BY_COORD_REQUEST = "UPDATE_WEATHER_BY_COORD_REQUEST";

export function updateWeatherByCoordRequest(latitude, longitude) {
    return dispatch => {

        dispatch({
            type: UPDATE_WEATHER_BY_COORD_REQUEST,
            payload: {town: "mainTown"}
        });


        getWeatherByCoord(latitude, longitude).then(res => {
            dispatch(updateWeatherByCoordSuccess(res))
        }).catch(error => dispatch(updateWeatherError("mainTown")));
    }
}