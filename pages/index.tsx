import React from 'react'
import CurrentWeatherColumn from '@/app/components/organisms/homepage/currentWeatherColumn/currentWeatherColumn'
import ForecastColumn from '@/app/components/organisms/homepage/ForecastColumn/forecastColumn'

export default function Home() {
  return (
    <>
      <CurrentWeatherColumn />
      <ForecastColumn />
    </>
  )
}
