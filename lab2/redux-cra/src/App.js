import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addFavoriteTown} from "./action-creators/addFavoriteTown";
import {updateGeolocationRequest} from "./action-creators/updateGeolocationRequest";
import {Header} from "./components/Header/Header";
import {WeatherWidget} from "./components/WeatherWidget/WeatherWidget";
import {FavoriteWeatherList} from "./components/FavoriteWeatherList/FavoriteWeatherList";
import {deleteFavoriteTown} from "./action-creators/deleteFavoriteTown";
import {Favorites} from "./components/Favorites/Favorites";

const mapDispatchToProps = dispatch => ({
    addFavoriteTownAction: (town) => dispatch(addFavoriteTown(town)),
    deleteFavoriteTownAction: (town) => dispatch(deleteFavoriteTown(town)),
    updateGeolocationRequestAction: (lastTown) => dispatch(updateGeolocationRequest(lastTown))
});

const mapStateToProps = store => {
    return {
        mainTown: store.mainWeather.mainTown,
        weathers: store.page.weatherInfo,
        favoriteTowns: store.favoriteWeather.favoriteTowns
    }
};


class App extends Component {

    render() {
        const {addFavoriteTownAction, deleteFavoriteTownAction, updateGeolocationRequestAction} = this.props;

        const {mainTown, weathers, favoriteTowns} = this.props;

        const mainWeather = weathers[mainTown];


        return (
            <div>
                <Header updateGeolocation={updateGeolocationRequestAction}/>
                <WeatherWidget
                    town={mainWeather && mainWeather.town}
                    weatherImg={""}
                    temperature={mainWeather && mainWeather.temperature}
                    wind={mainWeather && mainWeather.wind}
                    cloudiness={mainWeather && mainWeather.cloudiness}
                    mercuryPressure={mainWeather && mainWeather.mercuryPressure}
                    humidity={mainWeather && mainWeather.humidity}
                    uploaded={true}
                />
                <Favorites addFavoriteTown={addFavoriteTownAction}/>
                <FavoriteWeatherList deleteFavoriteTownAction={deleteFavoriteTownAction} weathers={weathers}
                                     favoriteTowns={favoriteTowns}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);