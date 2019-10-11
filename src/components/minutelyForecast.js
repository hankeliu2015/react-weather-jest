import React from 'react';
import moment from 'moment'

const MinutelyForecast = props => {

  return (
    <div>
      <h2>Minutely Forecast </h2>
      <div style={{border: 'solid 1 px black', padding: '16px', margin: '16px'}}>
        <h3></h3>

          <p>Current Time: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>


      </div>

    </div>
  )
}

export default MinutelyForecast;
