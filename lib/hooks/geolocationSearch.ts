import { useState } from "react"
import { useDispatch } from "react-redux"
import { setLocationData } from "@/lib/store/weatherData/weatherDataSlice"
import { getLocationResults } from "@/lib/store/weatherData/actions/geolocationActions"
import { GeolocationResultItem } from "@/lib/types/geolocation"

export function useGeolocationSearch() {
    const dispatch = useDispatch()
    const [results, setResults] = useState<GeolocationResultItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [timeoutInstance, setTimeoutInstance] = useState<NodeJS.Timeout|null>(null)

    const fetchLocationResults = (searchTerm: string) => {
        return new Promise((resolve, reject) => {
            if (timeoutInstance) clearTimeout(timeoutInstance)
            setIsLoading(true)
            const timeout = setTimeout(() => {
                getLocationResults(searchTerm)
                    .then(data => {
                        setResults(data)
                        resolve(true)
                    })
                    .catch(error => {
                        setResults([])
                        setError(error)
                        reject()
                    })
                    .finally(() => {
                        setIsLoading(false)
                        setTimeoutInstance(null)
                    })
            }, 500)
            setTimeoutInstance(timeout)
        })
    }

    const  saveLocationToStore = (locationItem: GeolocationResultItem) => {
        dispatch(setLocationData(locationItem))
    }

    const clearResults = () => {
        setResults([])
    }

    return { results, clearResults, isLoading, error, fetchLocationResults, saveLocationToStore }
}