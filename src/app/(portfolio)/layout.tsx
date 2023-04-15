import { Navigation } from '@/components/navigation'

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima personal website.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center py-2 mx-auto max-w-4xl min-h-screen">
      {children}
      <Navigation/>
    </div>
  )
}
