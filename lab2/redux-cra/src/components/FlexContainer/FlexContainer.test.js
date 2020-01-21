import React from 'react';
import {shallow} from 'enzyme';
import FlexContainer from './FlexContainer';

describe('Container tests', () => {
    it('should render correctly', () => {
        const container = shallow(<FlexContainer>+</FlexContainer>);

        expect(container).toMatchSnapshot();
    });
});