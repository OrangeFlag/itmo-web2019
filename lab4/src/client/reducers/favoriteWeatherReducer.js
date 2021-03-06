import {ADD_FAVORITE_TOWN} from "../action-creators/addFavoriteTown";
import {DELETE_FAVORITE_TOWN} from "../action-creators/deleteFavoriteTown";
import {addIfNotExists} from "../utils/addIfNotExists";
import {removeIfExists} from "../utils/removeIfExists";
import {GET_FAVORITE_TOWNS} from "../action-creators/getFavoriteTowns";

const initialState = {
    favoriteTowns: [],
};

export function favoriteWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FAVORITE_TOWNS:
        case ADD_FAVORITE_TOWN:
            return {...state, favoriteTowns: addIfNotExists(state.favoriteTowns, action.payload.town)};
        case DELETE_FAVORITE_TOWN:
            return {...state, favoriteTowns: removeIfExists(state.favoriteTowns, action.payload.town)};
        default:
            return state
    }
}