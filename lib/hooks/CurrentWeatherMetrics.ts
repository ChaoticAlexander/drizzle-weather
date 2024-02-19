import {useEffect, useState} from "react";
import {Metric} from "@/lib/types/common";
import {getMappedStatuses} from "@/lib/helpers";
import {metricsMappers} from "@/lib/dataMappings/metrics";
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store/store";

/**
 * Custom hook to return the current weather metrics
 */
export default function useCurrentWeatherMetrics() {
    const currentWeather = useSelector((state: RootState) => state.weatherData.weatherData?.current)
    const [metrics, setMetrics] = useState<Metric[]>([])
    useEffect(() => {
        if (currentWeather) {
            setMetrics(getMappedStatuses(currentWeather, metricsMappers))
        }
    }, [currentWeather])
    return metrics
}