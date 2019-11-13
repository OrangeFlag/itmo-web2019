import {UPDATE_WEATHER_BY_COORD_SUCCESS} from "../action-creators/updateWeatherByCoordSuccess";
import {UPDATE_GEOLOCATION_ERROR} from "../action-creators/updateGeolocationError";
import {UPDATE_WEATHER_BY_COORD_REQUEST} from "../action-creators/updateWeatherByCoordRequest";

const initialState = {
    mainTown: "Saint-Petersburg",
    geolocationError: false,
};

export function mainWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WEATHER_BY_COORD_REQUEST:
            return {...state, geolocationError: false};
        case UPDATE_WEATHER_BY_COORD_SUCCESS:
            return {...state, mainTown: action.payload.town};
        case UPDATE_GEOLOCATION_ERROR:
            return {...state, mainTown: "Saint-Petersburg", geolocationError: true};
        default:
            return state

    }

}