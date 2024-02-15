import React from 'react'

export default function CurrentWeatherCard() {
  return (
    <div>
      <div className="text">
        <div className="location">Utrecht</div>
        <div className="chance-of-rain">Chance of rain: 0%</div>
        <div className="temperature">20°C</div>
      </div>
      <div className="status-icon">
        <i className="fi fi-sr-cloud"></i>
      </div>
    </div>
  )
}
