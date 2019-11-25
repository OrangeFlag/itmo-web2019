import {updateWeatherByTownRequest} from "./updateWeatherByTownRequest";

export const ADD_FAVORITE_TOWN = 'ADD_FAVORITE_TOWN';

export function addFavoriteTown(town) {
    return dispatch => {
        dispatch({
            type: ADD_FAVORITE_TOWN,
            payload: {town: town}
        });

        dispatch(updateWeatherByTownRequest(town))
    }
}