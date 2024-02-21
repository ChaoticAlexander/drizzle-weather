import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { GeolocationResultItem } from "@/lib/types/geolocation"
import { getWeatherData } from "@/lib/store/weatherData/actions/weatherDataActions"
import { AppDispatch } from "@/lib/store/store"

/**
 * Custom hook to fetch weather data and return the current weather data
 */
export default function useWeatherData() {
    const dispatch: AppDispatch = useDispatch()
    const weatherData = useSelector((state: RootState) => state.weatherData.weatherData)
    const locationData = useSelector((state: RootState) => state.weatherData.locationData)

    const fetchWeatherData = (resultItem: GeolocationResultItem) => {
        dispatch(getWeatherData(resultItem))
    }

    return { weatherData, locationData, fetchWeatherData }
}