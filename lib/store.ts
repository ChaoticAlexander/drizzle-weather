import { configureStore } from "@reduxjs/toolkit";
import { weatherDataReducer } from "./weatherData/weatherDataSlice";

export const createStore = () => (
  configureStore({
    reducer: {
      weatherData: weatherDataReducer
    },
  })
)

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default createStore
