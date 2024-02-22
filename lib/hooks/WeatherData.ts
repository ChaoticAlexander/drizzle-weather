import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { GeolocationResultItem } from "@/lib/types/geolocation"
import { getWeatherData } from "@/lib/store/weatherData/actions/weatherDataActions"
import { AppDispatch } from "@/lib/store/store"

/**
 * Custom hook to fetch weather data and return the current weather data
 */
export function useWeatherData() {
    const dispatch: AppDispatch = useDispatch()
    const { weatherData, locationData, loading } = useSelector((state: RootState) => state.weatherData)

    const fetchWeatherData = (resultItem: GeolocationResultItem) => {
        dispatch(getWeatherData(resultItem))
    }

    return { weatherData, locationData, loading, fetchWeatherData }
}