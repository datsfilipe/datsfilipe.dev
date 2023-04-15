import { Providers } from './providers'

import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima social links.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.variable} ${raleway.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
