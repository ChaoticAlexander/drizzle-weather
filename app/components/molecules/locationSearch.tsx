"use client"
import { useRef, useState, useEffect } from 'react'
import { getLocationResults } from '@/lib/store/weatherData/actions/geolocationActions'
import { GeolocationResultItem } from '@/lib/types/geolocation'
import Input from '@/app/components/atoms/input/input'
import Dropdown from  '@/app/components/atoms/dropdown/dropdown'

interface Props  {
  onSelected?: (resultItem: GeolocationResultItem) => void
}

export default function LocationSearch({ onSelected }: Readonly<Props>) {
  
  const componentRef = useRef<HTMLDivElement|null>(null)
  const [ loading, setLoading ] = useState(false)
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
      setLoading(true)
      getLocationResults(value).then((data) => {
        setResults(data)
        setLoading(false)
        setIsDropdownOpen(true)
      })
    }, 1000)
    setTimeoutId(id)
  }

  function handleSelectResult(resultItem: GeolocationResultItem) {
    onSelected?.(resultItem)
    setIsDropdownOpen(false)
  }

  function handleOnChange(value: string) {
    if (value) handleSearch(value)
  }

  function handleOnFocus(value: string) {
    setIsDropdownOpen(value.length > 0)
  }

  function handleOnClear() {
    setResults([])
    setIsDropdownOpen(false)
  }
  

  return (
    <div ref={componentRef} className="relative">
      <Input
        loading={loading}
        placeholder="Search.."
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
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
