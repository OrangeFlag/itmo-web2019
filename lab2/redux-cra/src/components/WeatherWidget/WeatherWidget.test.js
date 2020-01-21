import React from 'react';
import {mount} from 'enzyme';
import {WeatherWidget} from './WeatherWidget'
import {statusEnum} from "../../utils/statusEnum";


jest.useFakeTimers();

describe('WeatherWidget test', () => {
    it('should render correctly when uploaded', () => {
        const component = mount(<WeatherWidget icon={"04d"} town={"Moscow"} temperature={20} wind={10} cloudiness={10}
                                               mercuryPressure={5} humidity={8} status={statusEnum.ok}/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('should render correctly when loading', () => {
        const component = mount(<WeatherWidget icon={"04d"} town={"Moscow"} temperature={20} wind={10} cloudiness={10}
                                               mercuryPressure={5} humidity={8} status={statusEnum.loading}/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('should render correctly when error', () => {
        const component = mount(<WeatherWidget icon={"04d"} town={"mainTown"} temperature={20} wind={10} cloudiness={10}
                                               mercuryPressure={5} humidity={8} status={statusEnum.error}/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });


    it('function should call after 5000 ms', () => {
        const clickFn = jest.fn();
        const component = mount(<WeatherWidget icon={"04d"} town={"Moscow"} temperature={20} wind={10} cloudiness={10}
                                               mercuryPressure={5} humidity={8} status={statusEnum.error}
                                               deleteFavoriteTownAction={clickFn}/>);

        jest.runAllTimers();


        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });

    it('function should not call on mainTown', () => {
        const clickFn = jest.fn();
        const component = mount(<WeatherWidget icon={"04d"} town={"mainTown"} temperature={20} wind={10}
                                               cloudiness={10}
                                               mercuryPressure={5} humidity={8} status={statusEnum.error}
                                               deleteFavoriteTownAction={clickFn}/>);

        jest.runAllTimers();


        expect(clickFn).not.toHaveBeenCalled();
        component.unmount();
    });
});