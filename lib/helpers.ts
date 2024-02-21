import {CurrentWeather, HourlyEntry, Precipitation} from "@/lib/types/weatherData"
import { MetricsMapper } from "@/lib/dataMappings/metrics"
import { Metric } from "@/lib/types/common"

/**
 * Filters the hourly entries to only include entries every 3 hours
 * @param entries
 */
const filterHourlyEntries = (entries: HourlyEntry[]): HourlyEntry[] => {
    return entries.filter(entry => {
        const timestamp = entry.dt
        const date = new Date(timestamp * 1000)
        return date.getHours() % 3 === 0
    }).slice(0, 3)
}

/**
 * Returns the precipitation value from the entry
 * @param entry
 */
const getPrecipitation = (entry: Precipitation): number => {
    if (typeof entry === 'number') {
        return entry
    } else if (typeof entry === 'object') {
        return entry['1h']
    } else {
        return 0
    }
}

/**
 * Maps the current weather data to the metrics
 * @param currentWeather
 * @param mappings
 */
const getMappedStatuses = (currentWeather: CurrentWeather, mappings: MetricsMapper[]): Metric[] => {
    return mappings.map(mapping => {
        return {
            ...mapping,
            value: mapping.value(currentWeather)
        }
    })
}

const getChanceOfRain = (precipitation: Precipitation): string  => {
    const value = getPrecipitation(precipitation)
    let chance: number
    if (!value || value <= 0.1) {
        chance = 0; // No chance of rain
    } else if (value <= 2.5) {
        chance = 30; // Low chance of rain
    } else if (value <= 7.5) {
        chance = 60; // Moderate chance of rain
    } else {
        chance = 90; // High chance of rain
    }
    return `${chance}%`
}

export {
    filterHourlyEntries,
    getPrecipitation,
    getMappedStatuses,
    getChanceOfRain
}