import React from 'react'
import PropTypes from 'prop-types'
import {WeatherWidget} from "../WeatherWidget/WeatherWidget";


export class FavoriteWeatherList extends React.Component {
    render() {

        const {deleteFavoriteTownAction, weathers, favoriteTowns} = this.props;

        const favorite = favoriteTowns.map(c => {
            return {...weathers[c], key: c, town: c}
        });

        return (<div>{favorite.map(item => <WeatherWidget
                {...item}
                uploaded={true}
                deleteFavoriteTown={deleteFavoriteTownAction}
            />
        )}</div>)
    }
}

FavoriteWeatherList.propTypes = {
    deleteFavoriteTownAction: PropTypes.func,
    weathers: PropTypes.object,
    favoriteTowns: PropTypes.array
};