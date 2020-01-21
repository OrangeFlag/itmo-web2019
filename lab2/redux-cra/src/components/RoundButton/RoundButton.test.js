import React from 'react';
import {mount} from 'enzyme';
import {RoundButton} from './RoundButton';

describe('Button tests', () => {
    it('should render correctly +', () => {
        const component = mount(<RoundButton>+</RoundButton>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('should render correctly with type', () => {
        const component = mount(<RoundButton type={"reset"}>+</RoundButton>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('button click should call function', () => {
        const clickFn = jest.fn();

        const component = mount(<RoundButton action={clickFn}>-</RoundButton>);

        component.simulate('click');

        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });
});