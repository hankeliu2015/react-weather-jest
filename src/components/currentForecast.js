import React from 'react';
import moment from 'moment'

const CurrentForecast = props => {
  // debugger
  // console.log(props.forecast)
  return (
    <div>
      <h2>Current Forecast </h2>
      <div style={{border: 'solid 1 px black', padding: '16px', margin: '16px'}}>
        <h3>{props.forecast.summary}</h3>
          <p>Time Zone: {props.forecast.timezone}</p>
          <p>Current Time: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
          <p>Temperature: {props.forecast.temperature}</p>
          <p>feels Like: {props.forecast.apparentTemperature}</p>
          <p>Chance of Percipitation: {props.forecast.precipProbability}</p>
          <p>Humidity: {props.forecast.humidity}</p>

      </div>



    </div>
  )
}

export default CurrentForecast;
