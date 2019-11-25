// import {updateWeatherByTownRequest} from "./updateWeatherByTownRequest";
// import {defaultTown} from "../utils/defaultTown";

export const UPDATE_GEOLOCATION_ERROR = 'UPDATE_GEOLOCATION_ERROR';

export function updateGeolocationError() {
    return dispatch => {

        dispatch({
            type: UPDATE_GEOLOCATION_ERROR,
        });

        // dispatch(updateWeatherByTownRequest(defaultTown, "mainTown"))
    }
}