import {updateWeatherByTownRequest} from "./updateWeatherByTownRequest";

export const GET_FAVORITE_TOWNS = "GET_FAVORITE_TOWNS";

async function getFavouriteAsync() {
    let response = await fetch(`/favourites`);
    return await response.json();
}


export function getFavoriteTowns() {
    return (dispatch) => {
        getFavouriteAsync().then(res => {
            res.forEach(el => {
                dispatch({
                    type: GET_FAVORITE_TOWNS,
                    payload: {town: el}
                });
                dispatch(updateWeatherByTownRequest(el))
            })
        });
    }
}