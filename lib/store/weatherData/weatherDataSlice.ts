import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getWeatherData } from './actions/weatherDataActions'
import { WeatherData } from '@/lib/types/weatherData'
import { filterHourlyEntries } from '@/lib/helpers'
import { GeolocationResultItem } from "@/lib/types/geolocation"


interface WeatherDataInitialState {
  locationData: GeolocationResultItem
  weatherData: WeatherData|null
  loading: boolean
  error: string|null
}

const initialState: WeatherDataInitialState = {
  locationData: {
    name: 'London',
    lat: 51.5074,
    lon: 0.1278,
    country: 'GB'
  },
  weatherData: null,
  loading: false,
  error: null
}

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    setLocationData: (state, action: PayloadAction<GeolocationResultItem>) => {
      state.locationData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message!
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.loading = false
        state.weatherData = {
          ...action.payload,
          hourly: filterHourlyEntries(action.payload.hourly)
        }
    })
  }
})

export const { setLocationData } = weatherDataSlice.actions
export const weatherDataReducer = weatherDataSlice.reducer
