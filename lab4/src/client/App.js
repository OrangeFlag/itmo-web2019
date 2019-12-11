import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addFavoriteTown} from "./action-creators/addFavoriteTown";
import {updateGeolocationRequest} from "./action-creators/updateGeolocationRequest";
import {Header} from "./components/Header/Header";
import {WeatherWidget} from "./components/WeatherWidget/WeatherWidget";
import {FavoriteWeatherList} from "./components/FavoriteWeatherList/FavoriteWeatherList";
import {deleteFavoriteTown} from "./action-creators/deleteFavoriteTown";
import {Favorites} from "./components/Favorites/Favorites";
import {getFavoriteTowns} from "./action-creators/getFavoriteTowns";

const mapDispatchToProps = dispatch => ({
    addFavoriteTownAction: (town) => dispatch(addFavoriteTown(town)),
    deleteFavoriteTownAction: (town) => dispatch(deleteFavoriteTown(town)),
    updateGeolocationRequestAction: () => dispatch(updateGeolocationRequest()),
    getFavoriteTownsAction: () => dispatch(getFavoriteTowns())
});

const mapStateToProps = store => {
    return {
        weathers: store.page.weatherInfo,
        status: store.page.status,
        favoriteTowns: store.favoriteWeather.favoriteTowns
    }
};


class App extends Component {

    render() {
        const {addFavoriteTownAction, deleteFavoriteTownAction, updateGeolocationRequestAction} = this.props;

        const {weathers, favoriteTowns, status} = this.props;

        return (
            <div>
                <Header updateGeolocation={updateGeolocationRequestAction}/>
                <WeatherWidget
                    {...weathers["mainTown"]}
                    status={status["mainTown"]}
                    key={"mainTown"}
                    deleteFavoriteTownAction={deleteFavoriteTownAction}
                />
                <Favorites addFavoriteTown={addFavoriteTownAction}/>
                <FavoriteWeatherList
                    deleteFavoriteTownAction={deleteFavoriteTownAction}
                    weathers={weathers}
                    status={status}
                    favoriteTowns={favoriteTowns}/>
            </div>
        );
    }

    componentDidMount() {
        const {updateGeolocationRequestAction, getFavoriteTownsAction} = this.props;
        updateGeolocationRequestAction();
        getFavoriteTownsAction();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);