import style from '@/app/styles/homepage.module.css'
import LocationSearch from '@/app/components/molecules/locationSearch'
import CurrentWeatherCard from '@/app/components/molecules/cards/currentWeatherCard/currentWeatherCard'
import HourlyForecastCard from '@/app/components/molecules/cards/hourlyForecastCard/HourlyForecastCard'
import WeeklyForecastCard from '@/app/components/molecules/cards/weeklyForecastCard/weeklyForecastCard'
import { useWeatherData } from '@/lib/hooks/WeatherData'
import { GeolocationResultItem } from "@/lib/types/geolocation"
import { WeatherMetricsCardGrid } from "@/app/components/molecules/cards/WeatherMetricsCardGrid"

export default function Home() {
  const { locationData, weatherData, loading,  fetchWeatherData } = useWeatherData()

  const handleLocationSelected = (location: GeolocationResultItem) => {
    fetchWeatherData(location)
  }

  // Temporary till SSR is implemented
  if (!weatherData && !loading) fetchWeatherData(locationData)
  if (!weatherData) return <div>Loading...</div>

  return (
    <div className={style.homepageContainer}>
      <div className={style.homepageRow}>
        <LocationSearch onSelected={handleLocationSelected} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.homepageRow}>
          <CurrentWeatherCard />
          <HourlyForecastCard />
        </div>
        <div className={style.homepageRow}>
          <WeatherMetricsCardGrid />
          <WeeklyForecastCard />
        </div>
      </div>
    </div>
  )
}
