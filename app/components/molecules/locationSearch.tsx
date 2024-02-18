"use client"
import { useRef, useState, useEffect } from 'react'
import { getLocationResults } from '@/lib/weatherData/actions/geolocationActions'
import { GeolocationResultItem } from '@/app/types/geolocation'
import Input from '@/app/components/atoms/input/input'
import Dropdown from  '@/app/components/atoms/dropdown/dropdown'

interface Props  {
  value?: string
  onSelected?: (resultItem: GeolocationResultItem) => void
}

export default function LocationSearch({ value,  onSelected }: Readonly<Props>) {
  
  const componentRef = useRef<HTMLDivElement|null>(null)
  const [ results, setResults ] = useState<GeolocationResultItem[]>([])
  const [ timeoutId, setTimeoutId ] = useState<number|null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Defines a function to close the dropdown when clicking outside of it
  useEffect(() => {
    if (!isDropdownOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef?.current && !componentRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  function handleSearch(value: string) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    const id = window.setTimeout(() => {
      getLocationResults(value).then((data) => {
        setResults(data)
      })
    }, 1000)
    setTimeoutId(id)
  }

  function handleSelectResult(resultItem: any) {
    onSelected?.(resultItem)
    setIsDropdownOpen(false)
  }

  function handleOnChange(value: string) {
    if (value) handleSearch(value)
    setIsDropdownOpen(value.length > 0 && results.length > 0)
  }

  function handleOnFocus(value: string) {
    setIsDropdownOpen(value.length > 0)
  }
  

  return (
    <div ref={componentRef} className="relative">
      <Input
        value={value}
        placeholder="Search.."
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
      {
        isDropdownOpen &&
        <Dropdown className="absolute top-full">
          {results?.length
          ? results.map((item) => (
            <button
              key={[item.lat, item.lon].join(',')}
              className="p-2 hover:bg-gray-200 cursor-pointer text-left"
              onClick={() => handleSelectResult(item)}
            >
              <div>{item.name}</div>
              <div className="text-sm text-gray-500">
                { [item.state, item.country].join(', ') }
              </div>
            </button>
          ))
          : <div className="text-gray-400 text-center">No results found</div>}
        </Dropdown>
      }
    </div>
  )
}
