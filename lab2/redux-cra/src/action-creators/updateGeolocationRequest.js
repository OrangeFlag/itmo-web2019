import {updateGeolocationSuccess} from "./updateGeolocationSuccess";
import {updateGeolocationError} from "./updateGeolocationError";

export const UPDATE_GEOLOCATION_REQUEST = 'UPDATE_GEOLOCATION_REQUEST';

export function updateGeolocationRequest() {
    return dispatch => {
        dispatch({
            type: UPDATE_GEOLOCATION_REQUEST
        });

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                dispatch(updateGeolocationSuccess(latitude, longitude))
            }, (err) => {
                dispatch(updateGeolocationError())
            });
        } else {
            dispatch(updateGeolocationError())
        }
    }
}