import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from './actions/weatherDataActions';

const filterHourlyEntries = (data) => {
  return data.filter(entry => {
    const timestamp = entry.dt;
    const date = new Date(timestamp * 1000);
    return date.getHours() % 3 === 0;
  }).slice(0, 3);
}

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
      console.log('after', filterHourlyEntries(action.payload.hourly))
    });
  }
});

export const { setWeatherData } = weatherDataSlice.actions;
export const weatherDataReducer = weatherDataSlice.reducer;