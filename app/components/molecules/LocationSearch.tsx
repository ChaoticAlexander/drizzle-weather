"use client"
import { GeolocationResultItem } from '@/lib/types/geolocation'
import Input from '@/app/components/atoms/input/input'
import Dropdown from  '@/app/components/atoms/dropdown/dropdown'
import { useClickOutside } from "@/lib/hooks/clickOutside"
import { useGeolocationSearch } from "@/lib/hooks/geolocationSearch"

interface Props  {
  onSelected?: (resultItem: GeolocationResultItem) => void
}

export default function LocationSearch({ onSelected }: Readonly<Props>) {
  const { isOpen, setIsOpen, componentRef } = useClickOutside()
  const { results, clearResults, isLoading, fetchLocationResults, saveLocationToStore } = useGeolocationSearch()

  function handleSelectResult(resultItem: GeolocationResultItem) {
    saveLocationToStore(resultItem)
    onSelected?.(resultItem)
    setIsOpen(false)
  }

  function handleOnChange(value: string) {
    if (value) fetchLocationResults(value)
        .then(() => setIsOpen(true))
    else {
        clearResults()
        setIsOpen(false)
    }
  }

  function handleOnFocus(value: string) {
    setIsOpen(value.length > 0)
  }

  return (
    <div ref={componentRef} className="relative">
      <Input
        loading={isLoading}
        placeholder="Search.."
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onClear={handleOnChange}
      />
      {
        isOpen &&
        <Dropdown className="absolute top-full">
          {results?.length
          ? results.map((item) => (
            <button
              key={[item.lat, item.lon].join(',')}
              className="p-2 hover:bg-gray-200 cursor-pointer text-left"
              onClick={() => handleSelectResult(item)}
            >
              <div>{item.name}</div>
              <div className="text-sm text-gray-400">
                { [item.state, item.country].filter(i=>i).join(', ') }
              </div>
            </button>
          ))
          : <div className="text-gray-400 text-center">No results found</div>}
        </Dropdown>
      }
    </div>
  )
}
