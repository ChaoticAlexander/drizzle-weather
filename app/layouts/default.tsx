import Sidebar from "@/app/components/molecules/sidebar/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <main className="w-full">
        {children}
      </main>
    </>
  )
}
