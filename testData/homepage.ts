const status = {
  uv_index: {
    title: 'UV Index',
    value: 5,
    icon: 'fi-rr-sun'
  },
  wind: {
    title: 'Wind',
    value: '0.2 km/h',
    icon: 'fi-rr-wind'
  },
  humidity: {
    title: 'Humidity',
    value: '5%',
    icon: 'fi-rr-humidity'
  },
  visibility: {
    title: 'Visibility',
    value: '12 km',
    icon: 'fi-rr-eye'
  },
  feels_like: {
    title: 'Feels Like',
    value: '20°C',
    icon: 'fi-rr-thermometer-half'
  },
  chance_of_rain: {
    title: 'Chance of Rain',
    value: '0%',
    icon: 'fi-rr-raindrops'
  },
  pressure: {
    title: 'Pressure',
    value: '1010 hPa',
    icon: 'fi-rr-tachometer-alt-slow'
  },
  sunset: {
    title: 'Sunset',
    value: '18:00',
    icon: 'fi-rr-sunset'
  }
}

const weeklyForecast = [
  {
    day: 'Monday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '25°C'
  },
  {
    day: 'Tuesday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '28°C'
  },
  {
    day: 'Wednesday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '30°C'
  },
  {
    day: 'Thursday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '30°C'
  },
  {
    day: 'Friday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '30°C'
  },
  {
    day: 'Saturday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '30°C'
  },
  {
    day: 'Sunday',
    icon: 'fi-rr-cloud',
    status: 'cloudy',
    temperature: '30°C'
  }
]

export {
  status,
  weeklyForecast
}