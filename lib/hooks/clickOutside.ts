import { useEffect, useRef, useState } from 'react'

function useClickOutside(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState(initialState)
    const componentRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [isOpen])

    return { isOpen, setIsOpen, componentRef }
}

export  { useClickOutside }
