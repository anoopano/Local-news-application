import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Container, Form } from 'react-bootstrap';

export class WeatherInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            data: null,
            isLoaded: false
        }
    }

    //function to fetch weather information
    async  getWeatherData(lat, lon) {
        const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`

        try {
            this.setState({ isFetching: true });
            const response = await axios.get(weatherApi);
            this.setState({ data: response.data, isFetching: false, isLoaded: true });

        } catch (error) {
            console.log(error);
            this.setState({ isFetching: false })
        }

    }

    //function to get access to users location and to call getWeatherData function
    weatherInit = () => {

        const success = (position) => {
            this.getWeatherData(position.coords.latitude, position.coords.longitude);
        }

        const error = () => {
            alert('Unable to retrieve location.');
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert('Your browser does not support location tracking, or permission is denied.');
        }
    }

    componentDidMount() {
        this.weatherInit();
    }

    render() {
        const { data, isFetching, isLoaded } = this.state;

        if (isLoaded) {

            return (
                <div className="d-flex justify-content-md-center mt-3">
                    <p className="ml-3">{data.name},</p>
                    <p className="ml-3">{data.main.temp}&#8451;,</p>
                    <p className="ml-3">{data.weather[0].main}</p>
                </div>
            )
        } else if (isFetching) {

            return (
                <Container className="d-flex justify-content-md-center mt-3 align-center">
                    <Spinner animation="border" />
                </Container>
            )
        } else {

            return (
                <Container>
                    <p>Unable to fetch weather information</p>
                </Container>
            )
        }

    }
}

export default WeatherInfo
