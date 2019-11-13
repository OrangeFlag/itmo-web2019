export const UPDATE_WEATHER_ERROR = 'UPDATE_WEATHER_ERROR';

export function updateWeatherError() {
    return dispatch => {
        dispatch({
            type: UPDATE_WEATHER_ERROR,
        });
    }
}