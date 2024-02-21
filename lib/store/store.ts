import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { weatherDataReducer } from "./weatherData/weatherDataSlice"

export const createStore = () => (
  configureStore({
    reducer: {
      weatherData: weatherDataReducer
    },
  })
)
const wrapper = createWrapper(createStore)

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default wrapper
