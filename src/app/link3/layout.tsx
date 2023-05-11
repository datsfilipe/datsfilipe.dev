import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'links',
  description: 'Filipe Lima social links.',
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