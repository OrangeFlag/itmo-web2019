import React from 'react';
import {mount} from 'enzyme';
import Input from './Input';

describe('Input test', () => {
    it('should render correctly', () => {
        const component = mount(<Input id="new_town" type="text" name="favorite" placeholder="Добавить новый город"
                                       maxLength="100"/>);

        expect(component).toMatchSnapshot();
        component.unmount();
    });

    it('input change should call function', () => {
        const changeFn = jest.fn();
        const component = mount(<Input handleChange={changeFn}/>);

        component.simulate('change', {target: {value: 'Hello'}});

        expect(changeFn).toHaveBeenCalled();
        component.unmount();
    });
});