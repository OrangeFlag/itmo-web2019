import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from "../Container/Container.style";
import Loader from "../Loader/Loader.style";

const Wait = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export class WeatherWidget extends React.Component {
    render() {
        const {
            weatherImg, town, temperature,
            wind, cloudiness, mercuryPressure,
            humidity, uploaded
        } = this.props;
        if (uploaded == null || uploaded === false) {
            return (
                <Container>
                    <Wait>Подождите, данные загружаются</Wait>
                    <br/>
                    <Loader/>
                </Container>)

        } else {
            return (
                <Container>
                    {town}
                    <br/>
                    <img src={weatherImg} alt=""/>
                    <br/>
                    Temperature: {temperature} °C
                    <br/>
                    Wind: {wind} m/s
                    <br/>
                    Cloudiness: {cloudiness} %
                    <br/>
                    Millimeter of mercury: {mercuryPressure} mm
                    <br/>
                    Humidity: {humidity} %
                    <br/>
                </Container>)
        }
    }
}

WeatherWidget.propTypes = {
    weatherImg: PropTypes.string,
    town: PropTypes.string,
    temperature: PropTypes.number,
    wind: PropTypes.number,
    cloudiness: PropTypes.number,
    mercuryPressure: PropTypes.number,
    humidity: PropTypes.number,
    uploaded: PropTypes.bool,
};