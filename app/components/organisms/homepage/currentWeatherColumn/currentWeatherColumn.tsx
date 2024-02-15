import Searchbar from "@/app/components/molecules/searchbar"
import CurrentWeatherCard from "@/app/components/molecules/cards/currentWeatherCard/currentWeatherCard"

export default function CurrentWeatherColumn() {

  const currentWeatherData = {
    uvIndex: {
      title: "UV Index",
      value: 3,
      icon: ''
    },
    wind: {
      title: "Wind",
      value: '0.2 km/h',
      icon: ''
    },
    humidity: {
      title: "Humidity",
      value: '56%',
      icon: ''
    },
    visibility: {
      title: "Visibility",
      value: '12 km',
      icon: ''
    },
    feelsLike: {
      title: "Feels like",
      value: '30°C',
      icon: ''
    },
    chanceOfRain: {
      title: "Chance of rain",
      value: '0%',
      icon: ''
    },
    pressure: {
      title: "Pressure",
      value: '1008 hPa',
      icon: ''
    },
    sunset: {
      title: "Sunset",
      value: '20:58',
      icon: ''
    }
  }

  return (
    <div className="current-weather-column">
      <Searchbar />
      <div className="content">
        <CurrentWeatherCard />
        <div className="status-cards"></div>
      </div>
    </div>
  )
}
