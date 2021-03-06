import React from 'react';
import moment from 'moment'

const MinutelyForecast = props => {

  const renderForecasts = props.forecastData.map(({precipIntensity, precipProbability, time}, index) => {
    return (
      <div key={index} className={'forecast-card'}>
      <p>Current Time: {moment.unix(time).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>Intensity of Percipitation: {precipIntensity}</p>
      <p>Chance of Percipitation: {precipProbability}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>Minutely Forecast </h2>
        {renderForecasts}
    </div>
  )
}

export default MinutelyForecast;
