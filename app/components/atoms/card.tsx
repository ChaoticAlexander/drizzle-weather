interface Props {
  children: React.ReactNode,
  className?: string
}

export default function Card({ children, className = '' }: Readonly<Props>) {
  return (
    <div className={`w-full rounded-xl bg-gray-100 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
