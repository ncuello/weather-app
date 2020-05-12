import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import { Grid, Col, Row} from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de mexico,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log("handleSelectedLocation");
  }

  render() {
    return (
      <div className="App">
        
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}>
        </LocationList>
      </div>
    );
  }
}

export default App;
