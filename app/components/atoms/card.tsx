interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Readonly<Props>) {
  return (
    <div className={`w-full rounded-xl bg-gray-100 p-8`}>
      {children}
    </div>
  )
}
