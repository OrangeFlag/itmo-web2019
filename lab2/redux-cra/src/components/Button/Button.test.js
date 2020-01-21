import React from 'react';
import {mount} from 'enzyme';
import {Button} from './Button';

describe('Button tests', () => {
    it('should render correctly +', () => {
        const component = mount(<Button>+</Button>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('should render correctly with type', () => {
        const component = mount(<Button type={"reset"}>+</Button>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('button click should call function', () => {
        const clickFn = jest.fn();

        const component = mount(<Button action={clickFn}>-</Button>);

        component.simulate('click');

        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });
});