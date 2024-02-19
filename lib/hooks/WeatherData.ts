import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store/store";
import {GeolocationResultItem} from "@/lib/types/geolocation";
import {getWeatherData} from "@/lib/store/weatherData/actions/weatherDataActions";

export default function useWeatherData() {
    const dispatch = useDispatch()
    const currentWeather = useSelector((state: RootState) => state.weatherData.weatherData)
    const fetchWeatherData = (resultItem: GeolocationResultItem) => {
        dispatch(getWeatherData(resultItem))
    }

    return [ currentWeather, fetchWeatherData ] as const
}