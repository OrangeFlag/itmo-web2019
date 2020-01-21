import React from 'react';
import {mount} from 'enzyme';
import {FavoriteWeatherList} from './FavoriteWeatherList'
import {statusEnum} from "../../utils/statusEnum";

const favoriteWeatherListParams = {
    weathers:
        {
            mainTown: {
                town: "Vitebsk",
                icon: "04d",
                temperature: 10,
                wind: 20,
                cloudiness: 30,
                mercuryPressure: 40,
                humidity: 50,
            },
            "Saint-Petersburg": {
                town: "Saint-Petersburg",
                icon: "04d",
                temperature: 10,
                wind: 20,
                cloudiness: 30,
                mercuryPressure: 40,
                humidity: 50,
            },
        }
    ,
    status: {mainTown: statusEnum.loading, "Moscow": statusEnum.error, "Saint-Petersburg": statusEnum.ok},
    favoriteTowns: ['Moscow', 'Saint-Petersburg'],
};


describe('FavoriteWeatherList test', () => {
    it('should render correctly', () => {
        const component = mount(<FavoriteWeatherList
            {...favoriteWeatherListParams}
        />);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('button click should call function', () => {
        const clickFn = jest.fn();
        const component = mount(<FavoriteWeatherList deleteFavoriteTownAction={clickFn}
                                                     {...favoriteWeatherListParams}/>);

        component.find('button').forEach(town_button => {
            town_button.simulate('click')
        });

        expect(clickFn).toHaveBeenCalledTimes(2);
        component.unmount();
    });
});