import { createAsyncThunk } from "@reduxjs/toolkit"
import {GeolocationResultItem} from '@/lib/types/geolocation'
import {WeatherData, WeatherDataSchema} from '@/lib/types/weatherData'

/**
 * Fetches weather data from the server
 * @param locationItem
 */
export const getWeatherData = createAsyncThunk<WeatherData, GeolocationResultItem>('getWeatherData', async (locationItem) => {
  try {
    const response = await fetch(`/api/weather/data?lat=${locationItem.lat}&lon=${locationItem.lon}`)
    const data = await response.json()
    return WeatherDataSchema.parse(data)
  } catch (error: any) {
    throw new Error(`Error fetching or validating data: ${error.message}`)
  }
})
