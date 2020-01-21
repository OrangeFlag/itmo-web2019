import React from 'react';
import {mount} from 'enzyme';
import {Favorites} from './Favorites'

describe('Favorites test', () => {
    it('should render correctly', () => {
        const component = mount(<Favorites/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    // it('input change should change state', () => {
    //     const component = mount(<Favorites/>);
    //
    //     component.find("input").simulate('change', {target: {value: 'Moscow'}});
    //
    //     expect(component.state().inputTown).toEqual("Moscow");
    //
    //     component.unmount();
    // });

    it('button click should call function with correct arguments', () => {
        const clickFn = jest.fn();
        const component = mount(<Favorites addFavoriteTown={clickFn}/>);

        component.find("input").simulate('change', {target: {value: 'MosCow'}});

        component.find('form').simulate('submit', {
            preventDefault() {
            }
        });

        expect(clickFn).toHaveBeenCalledWith("moscow");
        component.unmount();
    });
});