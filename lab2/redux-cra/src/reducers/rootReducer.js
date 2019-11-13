import {combineReducers} from "redux";
import {pageReducer} from "./pageReducer";
import {favoriteWeatherReducer} from "./favoriteWeatherReducer";
import {mainWeatherReducer} from "./mainWeatherReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    favoriteWeather: favoriteWeatherReducer,
    mainWeather: mainWeatherReducer
});