import style from './dropdown.module.css'

interface Props {
  className: string
  children: React.ReactNode
}
export default function Dropdown({ className, children }: Readonly<Props>) {

  return (
    <div className={`${style.dropdown} ${className}`}>
      { children }
    </div>
  )
}
