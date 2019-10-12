import React from 'react';
import moment from 'moment'

const DailyForecast = props => {

  const renderForecasts = props.forecastData.map(({precipIntensity, precipProbability, time, sunriseTime, sunsetTime, temperatureMax, temperatureMin}, index) => {
    return (
      <div key={index} className={'forecast'}>
      <p>Current Time: {moment.unix(time).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>Hi: {temperatureMax}</p>
      <p>Low: {temperatureMin}</p>
      <p>Intensity of Percipitation: {precipIntensity}</p>
      <p>Chance of Percipitation: {precipProbability}</p>
      <p>Sunrise: {moment.unix(sunriseTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>Sunset: {moment.unix(sunsetTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>Daily Forecast </h2>
        {renderForecasts}
    </div>
  )
}

export default DailyForecast;
