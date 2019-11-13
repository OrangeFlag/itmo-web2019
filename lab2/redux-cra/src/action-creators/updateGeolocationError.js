export const UPDATE_GEOLOCATION_ERROR = 'UPDATE_GEOLOCATION_ERROR';

export function updateGeolocationError() {
    return dispatch => {

        dispatch({
            type: UPDATE_GEOLOCATION_ERROR,
        });


    }
}