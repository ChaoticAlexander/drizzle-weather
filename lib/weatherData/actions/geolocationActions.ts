import { GeolocationResultItem } from '@/app/types/geolocation'

export const getLocationResults = async (searchTerm: string) => {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: GeolocationResultItem[] = await response.json();
  return data;
}

export const getUserLocationByIP = async (ipAddress:  string) => {
  // Use the IP address to get approximate location data
  const locationResponse = await fetch(`https://ipinfo.io/${ipAddress}/json`);
  const locationData = await locationResponse.json();
  return locationData;
}
