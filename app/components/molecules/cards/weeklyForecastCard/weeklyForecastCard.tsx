import Card from '@/app/components/atoms/card'
import style from './weeklyForecastCard.module.css'
import { useWeatherData } from "@/lib/hooks/WeatherData"
import { getDay, getMappedWeatherIcon } from "@/lib/helpers"

export default function WeeklyForecastCard() {
  const { weatherData } = useWeatherData();
  const weeklyForecastEntries = weatherData?.daily.slice(1, 8)

  return (
    <Card className={style.WeeklyForecastCard}>
      <div className={style.header}>7-Day Forecast</div>
      <div className={style.content}>
        { weeklyForecastEntries?.map((item) => { console.log(item.temp); return (
          <div key={getDay(item.dt)} className={style.forecastRow}>
            <div className={style.day}>{getDay(item.dt)}</div>
            <div className={style.status}>
              <i className={`fi ${getMappedWeatherIcon(item.weather[0].icon)} ${style.statusIcon}`}></i>
              <span className={style.statusName}>{item.weather[0].description}</span>
            </div>
            <div className={style.temperature}>{item.temp.day.toFixed(1)}°C</div>
          </div>
          )}
        )}
      </div>
    </Card>
  )
}
