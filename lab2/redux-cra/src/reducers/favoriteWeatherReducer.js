import {ADD_FAVORITE_TOWN} from "../action-creators/addFavoriteTown";
import {DELETE_FAVORITE_TOWN} from "../action-creators/deleteFavoriteTown";
import {addIfNotExists} from "../utils/addIfNotExists";
import {removeIfExists} from "../utils/removeIfExists";

const initialState = {
    favoriteTowns: [],
};

export function favoriteWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_TOWN:
            return {...state, favoriteTowns: addIfNotExists(state.favoriteTowns, action.payload)};
        case DELETE_FAVORITE_TOWN:
            return {...state, favoriteTowns: removeIfExists(state.favoriteTowns, action.payload)};
        default:
            return state
    }
}