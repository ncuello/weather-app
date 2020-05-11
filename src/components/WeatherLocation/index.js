import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Spinner from 'react-bootstrap/Spinner';
import {PropTypes} from 'prop-types';

/** 
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Río de Janeiro"} country={"Brasil"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
**/

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    

    handleUpdateClick = (props) => {
        const {city} = this.state;
        const api_weather = getUrlWeatherByCity(city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });

        
    }

    render(){
        console.log("render");
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress/> }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,

}

export default WeatherLocation;