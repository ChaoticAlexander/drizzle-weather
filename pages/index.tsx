import { status, weeklyForecast } from '@/testData/homepage'
import { GeolocationResultItem } from '@/app/types/geolocation'
import { useDispatch } from 'react-redux'
import { getWeatherData } from '@/lib/weatherData/actions/weatherDataActions'
import style from '@/app/styles/homepage.module.css'
import LocationSearch from '@/app/components/molecules/locationSearch'
import CurrentWeatherCard from '@/app/components/molecules/cards/currentWeatherCard/currentWeatherCard'
import DailyForecastCard from '@/app/components/molecules/cards/dailyForecastCard/dailyForecastCard'
import StatusCard from '@/app/components/molecules/cards/statusCard/statusCard'
import WeeklyForecastCard from '@/app/components/molecules/cards/weeklyForecastCard/weeklyForecastCard'

export default function Home() {
  const dispatch = useDispatch()

  function handleLocationSelected(resultItem: GeolocationResultItem) {
    dispatch(getWeatherData(resultItem))
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
          <div className={style.statusCards}>
            { Object.keys(status).map((key) => {
              const statusKey = key as keyof typeof status
              return <StatusCard
                key={key}
                title={status[statusKey].title}
                value={status[statusKey].value}
                icon={status[statusKey].icon}
              />
            })}
          </div>
          <WeeklyForecastCard weeklyForecastData={weeklyForecast} />
        </div>
      </div>
    </div>
  )
}
