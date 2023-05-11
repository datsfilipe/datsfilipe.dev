import { Providers } from './providers'
import { Inter, Lato, Source_Code_Pro } from 'next/font/google'
import '@/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-lato',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-source-code-pro',
})

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima social links.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.variable} ${lato.variable} ${sourceCodePro.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}