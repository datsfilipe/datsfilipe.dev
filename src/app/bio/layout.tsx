export const metadata = {
  title: 'datsfilipe | bio',
  description: 'Bio page of Filipe Lima',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}