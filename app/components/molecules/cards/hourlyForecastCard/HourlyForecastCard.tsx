import Card from "@/app/components/atoms/card"
import style from './HourlyForecastCard.module.css'
import { useWeatherData } from "@/lib/hooks/WeatherData"
import { filterHourlyEntries, getMappedWeatherIcon, getTime } from "@/lib/helpers"

export default function HourlyForecastCard() {
  const { weatherData } = useWeatherData()
  const filteredHourEntries = filterHourlyEntries(weatherData?.hourly || [])

  return (
    <Card className={style.dailyForecastCard}>
      <div className={style.header}>{"Today's Forecast"}</div>
      <div className={style.content}>
        { filteredHourEntries.map((item) => (
          <div key={item.dt} className={style.forecastColumn}>
            <div className={style.hour}>{getTime(item.dt)}</div>
            <div className={style.statusIcon}>
              <i className={`fi ${getMappedWeatherIcon(item.weather[0].icon)}`}></i>
            </div>
            <div className={style.temperature}>{item.temp.toFixed(1)}°C</div>
          </div>
          )
        )}
      </div>
    </Card>
  )
}
