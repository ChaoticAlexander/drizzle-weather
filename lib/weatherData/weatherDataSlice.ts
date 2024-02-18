import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from './actions/weatherDataActions';

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: {
    currentLocation: {},
    weatherData: [],
    testProp: 'test',
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.fulfilled, (state, action) => {
      state.weatherData = action.payload;
    });
  }
});

export const { setWeatherData } = weatherDataSlice.actions;
export const weatherDataReducer = weatherDataSlice.reducer;