import React from 'react';
import {shallow} from 'enzyme';
import Loader from './Loader.style';

describe('Loader tests', () => {
    it('should render correctly +', () => {
        const container = shallow(<Loader/>);

        expect(container).toMatchSnapshot();
    });
});