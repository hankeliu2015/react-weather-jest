import React from 'react';
import moment from 'moment'

const CurrentForecast = props => {
  return (
    <div>
      <h2>Current Forecast </h2>
      <div style={{border: 'solid 1px green', padding: '16px', margin: '16px'}}>
        <h3>{props.forecast.summary}</h3>
          <p>Time Zone: {props.timeZone}</p>
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
