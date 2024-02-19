import { createSlice } from '@reduxjs/toolkit'
import { getWeatherData } from './actions/weatherDataActions'
import { WeatherData } from '@/lib/types/weatherData'
import { filterHourlyEntries } from '@/lib/helpers'


interface WeatherDataInitialState {
  weatherData: WeatherData|null;
  loading: boolean;
  error: string|null;
}

const initialState: WeatherDataInitialState = {
  weatherData: null,
  loading: false,
  error: null
}

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = {
          ...action.payload,
          hourly: filterHourlyEntries(action.payload.hourly)
        }
    });
  }
});

export const weatherDataReducer = weatherDataSlice.reducer;