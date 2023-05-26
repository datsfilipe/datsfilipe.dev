import { Providers } from './providers'
import { Inter, Lato, Source_Code_Pro } from 'next/font/google'
import '@/styles/global.css'
import { type Metadata } from 'next'

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

const ogImage = 'https://datsfilipe.dev/api/og?title=datsfilipe%20personal%20website'
const url = 'https://datsfilipe.dev'
const description = 'Filipe Lima personal website.'
const title = 'datsfilipe'

export const metadata: Metadata = {
  title: {
    template: 'datsfilipe • %s',
    default: 'datsfilipe',
  },
  description,
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'datsfilipe',
    images: [
      {
        url: ogImage,
      }
    ],
  },
  twitter: {
    title,
    description,
  },
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