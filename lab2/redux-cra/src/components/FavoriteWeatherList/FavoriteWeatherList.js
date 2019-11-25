import React from 'react'
import PropTypes from 'prop-types'
import {WeatherWidget} from "../WeatherWidget/WeatherWidget";
import uniq from "../../utils/uniq";
import {RoundButton} from "../RoundButton/RoundButton";
import FlexContainer from "../FlexContainer/FlexContainer";


export class FavoriteWeatherList extends React.Component {
    render() {

        const {deleteFavoriteTownAction, weathers, favoriteTowns, status} = this.props;

        const favorite = uniq(favoriteTowns, x => weathers[x] && weathers[x].town).map(c => {
            return {...weathers[c], key: c, town: (weathers[c] && weathers[c].town) || c, status: status[c]}
        });

        return (<div>{favorite.map(item => <FlexContainer key={item.key}>
                <WeatherWidget
                    {...item}
                    deleteFavoriteTownAction={deleteFavoriteTownAction}
                />
                <RoundButton action={() => deleteFavoriteTownAction(item.key)}>x</RoundButton>
            </FlexContainer>
        )}</div>)
    }
}

FavoriteWeatherList.propTypes = {
    deleteFavoriteTownAction: PropTypes.func,
    weathers: PropTypes.object,
    favoriteTowns: PropTypes.array,
    status: PropTypes.object
};