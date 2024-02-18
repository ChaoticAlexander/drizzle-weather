import { createAsyncThunk } from "@reduxjs/toolkit";
import { GeolocationResultItem } from '@/app/types/geolocation'

export const getWeatherData = createAsyncThunk('getWeatherData', async (locationItem: GeolocationResultItem) => {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${locationItem.lat}&lon=${locationItem.lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
})
