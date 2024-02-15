"use client"
import { useRef, useState, useEffect } from 'react'
import Input from '@/app/components/atoms/input/input'
import Dropdown from  '@/app/components/atoms/dropdown/dropdown'

export default function Searchbar() {
  
  const componentRef = useRef<HTMLDivElement|null>(null)
  const results: string[] = ["result 1", "result 2", "result 3", "result 4", "result 5"]
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

  function handleSelectResult() {
    setIsDropdownOpen(false)
  }

  function handleOnChange(value: string) {
    setIsDropdownOpen(value.length > 0)
  }

  function handleOnFocus(value: string) {
    setIsDropdownOpen(value.length > 0)
  }
  

  return (
    <div ref={componentRef} className="relative">
      <Input
        placeholder="Search.."
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
      {
        isDropdownOpen &&
        <Dropdown className="absolute top-full">
          {results?.length
          ? results.map((result) => (
            <button
              key={result}
              className="p-2 hover:bg-gray-200 cursor-pointer text-left"
              onClick={handleSelectResult}
            >
              {result}
            </button>
          ))
          : <div className="text-gray-400 text-center">No results found</div>}
        </Dropdown>
      }
    </div>
  )
}
