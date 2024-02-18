import { GeolocationResultItem } from '@/app/types/geolocation'
import { GeolocationResultsSchema } from '@/app/schemas/geolocationSchema';

export const getLocationResults = async (searchTerm: string) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: GeolocationResultItem[] = await response.json();
    const parsedData = GeolocationResultsSchema.parse(data);
    return parsedData;
  } catch (error: any) {
    throw new Error(`Error fetching or validating data: ${error.message}`);
  }
}

export const getUserLocationByIP = async (ipAddress:  string) => {
  // Use the IP address to get approximate location data
  const locationResponse = await fetch(`https://ipinfo.io/${ipAddress}/json`);
  const locationData = await locationResponse.json();
  return locationData;
}
