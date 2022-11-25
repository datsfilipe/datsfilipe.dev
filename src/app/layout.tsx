import { Toast } from '../components/Toast'

import { CopyrightMark } from '../components/CopyrightMark'
import { Header } from '../components/Header'

import './globals.css'
import type { ReactElement } from 'react'

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
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
