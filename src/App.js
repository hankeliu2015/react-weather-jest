import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
import Navbar from './Navbar';
import CurrentForecast from './components/currentForecast';
import MinutelyForecast from './components/minutelyForecast';
import HourlyForecast from './components/hourlyForecast';
import DailyForecast from './components/dailyForecast';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/` // will get current log and lat from following function

class App extends Component {
  state = {
    fetchingData: true,
    weatherData: {},
    forecastKey: 'currently'
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      // console.log(latitude)
      // console.log(longitude)
      // console.log('API Key:', process.env.REACT_APP_DARK_SKY_KEY)
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(resp => resp.json())
      .then(weatherData => this.setState({
        fetchingData: false,
        weatherData: weatherData}))
    });
  }

  updateLatLng = (lat, lng) => {
    console.log("openCage lat / Lng data:",lat, lng);
    let latitude = this.ParseDMS(lat);
    let longitude = this.ParseDMS(lng);
// debugger
    // pass the lat and lng to the state and resent fetch to darkkey api.
    fetchJsonp(`${APIURL}${latitude},${longitude}`)
    .then(resp => resp.json())
    .then(weatherData => {
      this.setState({
        fetchingData: false,
        weatherData: weatherData})
      })
  }

  convertDMSToDD = (degrees, minutes, seconds, others, direction) => {
    var dd = parseInt(degrees) + parseInt(minutes)/60 + parseInt(seconds)/(60*60);

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
  }

  ParseDMS = (input) => {
      var parts = input.split(/[^\d\w]+/);
      var lat = this.convertDMSToDD(parts[0], parts[1], parts[2], parts[3], parts[4]);
      debugger
      // var lng = this.convertDMSToDD(parts[4], parts[5], parts[6], parts[7]);
      return lat
  }

  handleForecastchange = (forecastKey) => {
    this.setState({forecastKey: forecastKey})
  }

  render () {
    const { fetchingData, weatherData, forecastKey } = this.state;

    console.log("Darksky weather data:", weatherData);
    console.log("State.ForeCastKey Value:",forecastKey);

    return (
      <div className="App">
        <header className="App-header">
          <h3>React Weather App</h3>
        </header>

        <div className="App-intro">
          {fetchingData
            ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <Navbar changeForecast ={this.handleForecastchange} updateLatLng={this.updateLatLng} />

              {/*
                <CurrentForecast forecast={forecastKey === null? weatherData.currently : weatherData[forecastKey]} />
                */}

            {forecastKey === 'currently' && <CurrentForecast forecast={weatherData[forecastKey]} timeZone={weatherData.timezone} /> }

            {forecastKey === 'minutely' && <MinutelyForecast forecastData={weatherData[forecastKey].data} /> }

            {forecastKey === 'hourly' && <HourlyForecast forecastData={weatherData[forecastKey].data} /> }

            {forecastKey === 'daily' && <DailyForecast forecastData={weatherData[forecastKey].data} /> }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
