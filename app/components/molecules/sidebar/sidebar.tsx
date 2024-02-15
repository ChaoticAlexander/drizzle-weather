import Link from 'next/link'
import style from './sidebar.module.css'

export default function Sidebar() {

  const menuItems = [
    { name: 'Current', path: '/', icon: 'fi-sr-cloud-sun' },
    { name: 'Search', path: '/search', icon: 'fi-sr-list' },
  ]

  return (
    <header className={style.sidebar}>
      { menuItems.map((item) => {
        return (
          <Link
            className={style.menuItem}
            href={item.path}
            key={item.name}
          >
            <i className={`fi ${item.icon}`} />
            {item.name}
          </Link>
        )
      })}
    </header>
  )
}
