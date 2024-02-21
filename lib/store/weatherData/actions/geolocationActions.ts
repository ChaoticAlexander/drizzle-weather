import {GeolocationResultItem, GeolocationResultsSchema} from '@/lib/types/geolocation'

/**
 * Fetches location results from the server
 * @param searchTerm
 */
export const getLocationResults = async (searchTerm: string) => {
  try {
    const response = await fetch(`/api/location/search?q=${searchTerm}`)
    const data: GeolocationResultItem[] = await response.json()
    // TODO: Handle case of duplicate results
    return GeolocationResultsSchema.parse(data)
  } catch (error: any) {
    throw new Error(`Error fetching or validating data: ${error.message}`)
  }
}

// export const getUserLocationByIP = async (ipAddress:  string) => {
//   // Use the IP address to get approximate location data
//   const locationResponse = await fetch(`https://ipinfo.io/${ipAddress}/json`)
//   return await locationResponse.json()
// }
