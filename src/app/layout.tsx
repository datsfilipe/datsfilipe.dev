import localFont from '@next/font/local'

import { Toast } from '../components/Toast'

import { CopyrightMark } from '../components/CopyrightMark'
import { Header } from '../components/Header'

import './globals.css'
import type { ReactElement } from 'react'

interface RootLayoutProps {
  children: ReactElement;
}

const inter = localFont({
  variable: '--inter-font',
  src: [
    {
      path: '../assets/fonts/Inter/inter-v12-latin-regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})

const merriweather = localFont({
  variable: '--merriweather-font',
  src: [
    {
      path: '../assets/fonts/Merriweather/merriweather-v30-latin-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Merriweather/merriweather-v30-latin-700.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const mplus = localFont({
  variable: '--mplus-font',
  src: [
    {
      path: '../assets/fonts/M-PLUS-Rounded-1c/m-plus-rounded-1c-v15-latin-700.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
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
