import { Providers } from './providers'
import { Navigation } from '@/components/navigation'
import { ToggleTheme } from '@/components/toggleTheme'

import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima personal website.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} ${raleway.className}`}>
        <Providers>
          <Navigation>
            <li>
              <ToggleTheme />
            </li>
          </Navigation>
          {children}
        </Providers>
      </body>
    </html>
  )
}
