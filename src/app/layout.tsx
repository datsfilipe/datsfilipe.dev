import { Inter, Merriweather, M_PLUS_Rounded_1c } from '@next/font/google'

import { Toast } from '../components/Toast'

import { CopyrightMark } from '../components/CopyrightMark'
import { Header } from '../components/Header'

import './globals.css'
import type { ReactElement } from 'react'

interface RootLayoutProps {
  children: ReactElement;
}

const inter = Inter({
  variable: '--inter-font',
  style: 'normal'
})

const merriweather = Merriweather({
  variable: '--merriweather-font',
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

const mplus = M_PLUS_Rounded_1c({
  variable: '--mplus-font',
  weight: '700',
  style: 'normal'
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} ${mplus.variable}`}
    >
      <head />
      <body>
        <div className='flex flex-col w-full min-h-screen selection:bg-orange-500 selection:bg-opacity-30 h-fit scroll-smooth bg-neutral-50 text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900'>
          <Header />
          {children}
          <CopyrightMark />
        </div>
        <Toast />
      </body>
    </html>
  )
}
