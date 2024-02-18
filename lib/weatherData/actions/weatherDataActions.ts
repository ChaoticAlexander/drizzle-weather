import { createAsyncThunk } from "@reduxjs/toolkit";
import { GeolocationResultItem } from '@/app/types/geolocation'
import WeatherDataSchema from '@/app/schemas/weatherDataSchema'

export const getWeatherData = createAsyncThunk('getWeatherData', async (locationItem: GeolocationResultItem) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${locationItem.lat}&lon=${locationItem.lon}&exclude=minutely&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const validatedData = WeatherDataSchema.parse(data);
    console.log('data validated')
    return validatedData;
  } catch (error: any) {
    throw new Error(`Error fetching or validating data: ${error.message}`);
  }
})
