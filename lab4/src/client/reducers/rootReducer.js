import {combineReducers} from "redux";
import {pageReducer} from "./pageReducer";
import {favoriteWeatherReducer} from "./favoriteWeatherReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    favoriteWeather: favoriteWeatherReducer,
});