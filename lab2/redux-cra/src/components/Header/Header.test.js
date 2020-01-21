import React from 'react';
import {mount} from 'enzyme';
import {Header} from './Header'

describe('Header test', () => {
    it('should render correctly', () => {
        const component = mount(<Header/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('button click should call function', () => {
        const clickFn = jest.fn();
        const component = mount(<Header updateGeolocation={clickFn}/>);

        component.find('button').simulate('click');

        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });
});