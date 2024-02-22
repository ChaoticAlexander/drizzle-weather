import style from './CurrentWeatherCard.module.css'
import { useWeatherData } from "@/lib/hooks/weatherData"
import { getChanceOfRain, getMappedWeatherIcon } from "@/lib/helpers"

export default function CurrentWeatherCard() {
  const { weatherData, locationData } = useWeatherData()
  const icon = weatherData ? getMappedWeatherIcon(weatherData?.current.weather[0].icon) : null

  return (
    <div className={style.currentWeatherCard}>
      <div className={style.textColumn}>

        <div className={style.location}>{locationData?.name}</div>
        <div className={style.chanceOfRain}>Chance of rain: {getChanceOfRain(weatherData?.current.rain)}</div>
        <div className={style.temperature}>{weatherData?.current.temp.toFixed(1)}°C</div>
      </div>
      <div className={style.statusIcon}>
        <i className={`fi ${icon}`}></i>
      </div>
    </div>
  )
}
