import { CurrentWeather } from "@/lib/types/weatherData"

interface MetricsMapper {
    title: string
    icon: string
    value: (cw: CurrentWeather) => string | number
}

const metricsMappers: MetricsMapper[] = [
    {
        title: 'UV Index',
        icon: 'fi-rr-sun',
        value: (cw) => cw.uvi,
    },
    {
        title: 'Wind',
        icon: 'fi-rr-wind',
        value: (cw) => `${cw.wind_speed} km/h`
    },
    {
        title: 'Humidity',
        icon: 'fi-rr-humidity',
        value: (cw) => `${cw.humidity}%`
    },
    {
        title: 'Visibility',
        icon: 'fi-rr-eye',
        value: (cw) => `${cw.visibility/1000} km`
    },
    {
        title: 'Feels Like',
        icon: 'fi-rr-thermometer-half',
        value: (cw) => `${cw.feels_like.toFixed(1)}°C`
    },
    {
        title: 'Pressure',
        icon: 'fi-rr-tachometer-alt-slow',
        value: (cw) => `${cw.pressure} hPa`
    },
    {
        title: 'Sunrise',
        icon: 'fi-rr-sunrise',
        value: (cw) => {
            const date = new Date(cw.sunrise * 1000)
            return date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
        }
    },
    {
        title: 'Sunset',
        icon: 'fi-rr-sunset',
        value: (cw) => {
            const date = new Date(cw.sunset * 1000)
            return date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
        }
    }
]

export {
    metricsMappers
}

export type {
    MetricsMapper,
}
