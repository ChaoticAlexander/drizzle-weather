import style from './currentWeatherCard.module.css'
import useWeatherData from "@/lib/hooks/WeatherData"
import { getChanceOfRain } from "@/lib/helpers"

export default function CurrentWeatherCard() {
    const { weatherData, locationData} = useWeatherData()

  return (
    <div className={style.currentWeatherCard}>
      <div className={style.textColumn}>

        <div className={style.location}>{locationData?.name}</div>
        <div className={style.chanceOfRain}>Chance of rain: {getChanceOfRain(weatherData?.current.rain)}</div>
        <div className={style.temperature}>{weatherData?.current.temp.toFixed(1)}°C</div>
      </div>
      <div className={style.statusIcon}>
        <i className="fi fi-rr-cloud"></i>
      </div>
    </div>
  )
}
