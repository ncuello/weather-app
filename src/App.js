import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
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

  render() {
    return (
      <div className="App">
        
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
