export const UPDATE_WEATHER_ERROR = 'UPDATE_WEATHER_ERROR';

export function updateWeatherError(town) {
    return dispatch => {
        dispatch({
            type: UPDATE_WEATHER_ERROR,
            payload: {town: town}
        });
    }
}