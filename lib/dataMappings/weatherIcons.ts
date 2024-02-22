import { WeatherIcon } from '@/lib/types/weatherData'

const iconMap: Record<WeatherIcon, string> = {
  '01d': 'fi-rr-sun',
  '02d': 'fi-rr-cloud-sun',
  '03d': 'fi-rr-cloud',
  '04d': 'fi-rr-clouds',
  '09d': 'fi-rr-cloud-showers',
  '10d': 'fi-rr-cloud-sun-rain',
  '11d': 'fi-rr-thunderstorm',
  '13d': 'fi-rr-snowflake',
  '50d': 'fi-rr-fog',
  '01n': 'fi-rr-moon-stars',
  '02n': 'fi-rr-cloud-moon',
  '03n': 'fi-rr-cloud',
  '04n': 'fi-rr-clouds',
  '09n': 'fi-rr-cloud-showers',
  '10n': 'fi-rr-cloud-moon-rain',
  '11n': 'fi-ts-thunderstorm-moon',
  '13n': 'fi-rr-snowflake',
  '50n': 'fi-rr-fog',
}

export { iconMap }