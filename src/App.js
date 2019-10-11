import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APIURL = `https://api.darksky.net/forecast/{process.env.REACT_APP_DARK_SKY_KEY}/37.8267,-122.4233`

class App extends Component {
  state = {
    fetchingData: true,
    weatherData: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      console.log(latitude)
      console.log(longitude)
    });
  }


  render () {
    const { fetchingData } = this.state;
    console.log(fetchingData);

    return (
      <div className="App">
        <header className="App-header">
          <h3>React Weather App</h3>
        </header>

        {fetchingData ? <img src={logo} className="App-logo" alt="logo" /> : <p>Data is received</p> }

      </div>
    );
  }
}

export default App;

{/*
<img src={logo} className="App-logo" alt="logo" />

  */}
