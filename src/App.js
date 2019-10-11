import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    fetchingData: true,
    weatherData: {}
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
