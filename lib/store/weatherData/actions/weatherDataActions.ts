import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import {GeolocationResultItem} from '@/lib/types/geolocation'
import {WeatherDataSchema} from '@/lib/types/weatherData'

/**
 * Fetches weather data from the server
 * @param locationItem
 */
export const getWeatherData: AsyncThunk<any, GeolocationResultItem, {}> = createAsyncThunk('getWeatherData', async (locationItem: GeolocationResultItem) => {
  try {
    const response = await fetch(`/api/weather/data?lat=${locationItem.lat}&lon=${locationItem.lon}`);
    const data = await response.json();
    return WeatherDataSchema.parse(data);
  } catch (error: any) {
    throw new Error(`Error fetching or validating data: ${error.message}`);
  }
})
