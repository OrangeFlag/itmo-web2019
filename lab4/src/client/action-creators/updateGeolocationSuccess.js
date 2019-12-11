import {updateWeatherByCoordRequest} from "./updateWeatherByCoordRequest";

export const UPDATE_GEOLOCATION_SUCCESS = 'UPDATE_GEOLOCATION_SUCCESS';

export function updateGeolocationSuccess(latitude, longitude) {
    return dispatch => {

        dispatch({
            type: UPDATE_GEOLOCATION_SUCCESS,
        });

        dispatch(updateWeatherByCoordRequest(latitude, longitude))

    }
}