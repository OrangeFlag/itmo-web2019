import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from "../Container/Container.style";
import Loader from "../Loader/Loader.style";
import {statusEnum} from "../../utils/statusEnum";

const Wait = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #e1da8a;
`;

const Error = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #f27670;
`;


export class WeatherWidget extends React.Component {
    render() {
        const {
            icon, town, temperature,
            wind, cloudiness, mercuryPressure,
            humidity, status
        } = this.props;
        const {deleteFavoriteTownAction} = this.props;

        if (status === statusEnum.loading) {
            return (
                <Container>
                    <Wait>Подождите, данные загружаются</Wait>
                    <br/>
                    <Loader/>
                </Container>)

        } else if (status === statusEnum.error) {
            // if (town !== "mainTown") {
            //     setTimeout(() => {
            //         deleteFavoriteTownAction(town)
            //     }, 5000)
            // }
            return (
                <Container>
                    <Error>Ошибка при запросе погоды</Error>
                </Container>)
        } else {
            return (
                <Container>
                    {town}
                    {
                        icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    }
                    <p>
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
                    </p>
                </Container>)
        }
    }
}

WeatherWidget.propTypes = {
    icon: PropTypes.string,
    town: PropTypes.string,
    temperature: PropTypes.number,
    wind: PropTypes.number,
    cloudiness: PropTypes.number,
    mercuryPressure: PropTypes.number,
    humidity: PropTypes.number,
    uploaded: PropTypes.bool,
    deleteFavoriteTownAction: PropTypes.func,
};