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
      
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(resp => resp.json())
      .then(weatherData => this.setState({
        fetchingData: false,
        weatherData: weatherData}))
    });
  }

  reqeuestWeatherData = (lat, lng) => {
    // console.log("openCage DMS data:",lat, lng);
    let latitude = this.parseDMS(lat);
    let longitude = this.parseDMS(lng);

    fetchJsonp(`${APIURL}${latitude},${longitude}`)
    .then(resp => resp.json())
    .then(weatherData => {
      debugger
      this.setState({
        fetchingData: false,
        weatherData: weatherData})
      })
  }

  parseDMS = (dmsData) => {
    var splitedData = dmsData.split(/[^\d\w.]+/);
    var ddData = this.convertDMSToDD(splitedData[0], splitedData[1], splitedData[2], splitedData[3]);
    return ddData;
  }

  convertDMSToDD = (degrees, minutes, seconds, direction) => {
    var dd = parseInt(degrees) + parseInt(minutes)/60 + parseInt(seconds)/(60*60);

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
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
              <Navbar changeForecast ={this.handleForecastchange} reqeuestWeatherData={this.reqeuestWeatherData} />

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
