interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Precipitation {
  '1h': number 
}

interface BaseWeatherData {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
  rain?: number|Precipitation;
  snow?: number|Precipitation;
}

interface FeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface Temperature extends FeelsLike {
  max: number;
  min: number;
}

interface CurrentWeather extends BaseWeatherData {
  feels_like: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
}

interface DailyEntry extends BaseWeatherData {
  feels_like: FeelsLike;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  temp: Temperature;
}

interface HourlyEntry extends BaseWeatherData {
  feels_like: number;
  pop: number;
  temp: number;
  visibility: number;
}

interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  hourly: HourlyEntry[];
  daily: DailyEntry[];
}