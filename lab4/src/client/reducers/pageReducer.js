import {UPDATE_WEATHER_BY_COORD_SUCCESS} from "../action-creators/updateWeatherByCoordSuccess";
import {UPDATE_WEATHER_BY_TOWN_SUCCESS} from "../action-creators/updateWeatherByTownSuccess";
import {UPDATE_WEATHER_ERROR} from "../action-creators/updateWeatherError";
import {UPDATE_WEATHER_BY_TOWN_REQUEST} from "../action-creators/updateWeatherByTownRequest";
import {UPDATE_WEATHER_BY_COORD_REQUEST} from "../action-creators/updateWeatherByCoordRequest";
import {statusEnum} from "../utils/statusEnum";

const initialState = {
    weatherInfo: {},
    status: {mainTown: statusEnum.loading}
};

export function pageReducer(state = initialState, action) {
    let status = {...state.status};
    switch (action.type) {

        case UPDATE_WEATHER_BY_COORD_REQUEST:
        case UPDATE_WEATHER_BY_TOWN_REQUEST:
            status[action.payload.town] = statusEnum.loading;
            return {...state, status: status};

        case UPDATE_WEATHER_BY_COORD_SUCCESS:
        case UPDATE_WEATHER_BY_TOWN_SUCCESS:
            let weatherInfo = {...state.weatherInfo};
            weatherInfo[action.payload.town] = action.payload.weather;
            status[action.payload.town] = statusEnum.ok;
            return {...state, weatherInfo: weatherInfo, status: status};

        case UPDATE_WEATHER_ERROR:
            status[action.payload.town] = statusEnum.error;
            return {...state, status: status};
        default:
            return {...state}
    }
}