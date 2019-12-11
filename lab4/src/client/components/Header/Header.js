import React from 'react'
import styled from 'styled-components'
import {Button} from "../Button/Button";
import Container from "../Container/Container.style";

const Name = styled.h1`
    float: left;
`;

export class Header extends React.Component {
    render() {
        return (
            <Container>
                <Name>Погода здесь</Name>
                <Button action={this.props.updateGeolocation}>Обновить геолокацию</Button>
            </Container>
        )
    }
}

Header.propTypes = {};