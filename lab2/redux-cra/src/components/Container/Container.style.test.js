import React from 'react';
import {shallow} from 'enzyme';
import Container from './Container.style';

describe('Container tests', () => {
    it('should render correctly +', () => {
        const container = shallow(<Container>+</Container>);

        expect(container).toMatchSnapshot();
    });
});