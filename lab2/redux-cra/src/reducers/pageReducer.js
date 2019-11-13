import {UPDATE_WEATHER_BY_COORD_SUCCESS} from "../action-creators/updateWeatherByCoordSuccess";
import {UPDATE_WEATHER_BY_TOWN_SUCCESS} from "../action-creators/updateWeatherByTownSuccess";

const initialState = {
    weatherInfo: {}
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        // case UPDATE_WEATHER_BY_TOWN_REQUEST:
        //     if (action.payload && action.payload.town) {
        //         var newState = {...state};
        //         newState[action.payload.town] = null;
        //         return newState
        //     }
        //     return state;
        case UPDATE_WEATHER_BY_COORD_SUCCESS:
        case UPDATE_WEATHER_BY_TOWN_SUCCESS:
            var newWeatherInfo = {...state.weatherInfo};
            newWeatherInfo[action.payload.town] = action.payload;
            return {...state, weatherInfo: newWeatherInfo};
        default:
            return state
    }
}