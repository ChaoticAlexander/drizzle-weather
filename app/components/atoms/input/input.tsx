import { useRef } from 'react'
import style from './input.module.css'

interface Props {
  placeholder?: string
  value?: string
  onChange?: Function
  onFocus?: Function
}

export default function Input({ placeholder, value, onChange, onFocus }: Readonly<Props>) {

  const inputField = useRef<HTMLInputElement|null>(null)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value)
  }

  function handleOnFocus(e: React.FocusEvent<HTMLInputElement>) {
    onFocus?.(e.target.value)
  }

  function handleOnClear() {
    if (!inputField.current) return
    inputField.current.value = ''
    onChange?.('')
  }

  return (
    <div className="input-container relative">
      <input
        ref={inputField}
        className={style.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
      {
        !!inputField?.current?.value.length && 
        <button className={style.clearButton} onClick={handleOnClear}>
          <i className="fi fi-sr-cross-circle" />
        </button>
      }
    </div>
  )
}
