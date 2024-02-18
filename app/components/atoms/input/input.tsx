import { useState } from 'react'
import style from './input.module.css'

interface Props {
  placeholder?: string
  value?: string
  loading?: boolean
  onChange?: Function
  onFocus?: Function
  onClear?: Function
}

export default function Input({ placeholder, value, loading, onChange, onFocus, onClear }: Readonly<Props>) {

  const [ inputValue, setInputValue ] = useState<string>(value ?? '')
  const shouldShowClearButton = !!inputValue.length && !loading

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
    onChange?.(e.target.value)
  }

  function handleOnFocus(e: React.FocusEvent<HTMLInputElement>) {
    onFocus?.(e.target.value)
  }

  function handleOnClear() {
    setInputValue('')
    onClear?.()
  }

  return (
    <div className="input-container relative">
      <input
        className={style.input}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
      {
        shouldShowClearButton && 
        <button className={style.inputAction} onClick={handleOnClear}>
          <i className="fi fi-sr-cross-circle" />
        </button>
      }
      {
        loading && 
        <div className={style.loadingIcon}>
          <i className="fi fi-sr-spinner" />
        </div>
      }
    </div>
  )
}
