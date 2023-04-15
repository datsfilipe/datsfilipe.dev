import { Navigation } from '@/components/navigation'
import { ToggleTheme } from '@/components/toggleTheme'

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima personal website.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation>
        <li>
          <ToggleTheme />
        </li>
      </Navigation>
      {children}
    </>
  )
}
