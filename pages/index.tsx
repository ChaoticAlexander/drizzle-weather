import { weeklyForecast } from '@/testData/homepage'
import style from '@/app/styles/homepage.module.css'
import LocationSearch from '@/app/components/molecules/locationSearch'
import CurrentWeatherCard from '@/app/components/molecules/cards/currentWeatherCard/currentWeatherCard'
import DailyForecastCard from '@/app/components/molecules/cards/dailyForecastCard/dailyForecastCard'
import WeeklyForecastCard from '@/app/components/molecules/cards/weeklyForecastCard/weeklyForecastCard'
import useWeatherData from '@/lib/hooks/WeatherData'
import useCurrentWeatherMetrics from '@/lib/hooks/CurrentWeatherMetrics'
import {GeolocationResultItem} from "@/lib/types/geolocation";
import {WeatherMetricsCardGrid} from "@/app/components/molecules/cards/WeatherMetricsCardGrid";

export default function Home() {
  const [_weatherData, fetchWeatherData] = useWeatherData()
  const metrics = useCurrentWeatherMetrics()
  const handleLocationSelected = (location: GeolocationResultItem) => {
    fetchWeatherData(location)
  }
  return (
    <div className={style.homepageContainer}>
      <div className={style.homepageRow}>
        <LocationSearch onSelected={handleLocationSelected} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.homepageRow}>
          <CurrentWeatherCard />
          <DailyForecastCard />
        </div>
        <div className={style.homepageRow}>
          <WeatherMetricsCardGrid statuses={metrics} />
          <WeeklyForecastCard weeklyForecastData={weeklyForecast} />
        </div>
      </div>
    </div>
  )
}
