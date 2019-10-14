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

  handleForecastchange = (forecastKey) => {
    this.setState({forecastKey: forecastKey})
  }

  render () {
    const { fetchingData, weatherData, forecastKey } = this.state;
    console.log("this is weather data:", weatherData);

    console.log(forecastKey);
    console.log(weatherData[forecastKey]);

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
              <Navbar changeForecast ={this.handleForecastchange} />

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
