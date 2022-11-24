'use client'
import { Toaster } from 'react-hot-toast'

const getTheme = () => {
  if (typeof localStorage !== 'undefined') {
    const themeInfo = localStorage.getItem('theme-info') as 'light' | 'dark'
    if (themeInfo) return themeInfo
  }

  if (typeof window !== 'undefined') {
    const themeInfo = window.matchMedia('(prefers-color-scheme: dark)')
    if (themeInfo.matches) return 'dark'
  }

  return 'light'
}

export function Toast() {
  return (
    <Toaster
      position='bottom-center'
      toastOptions={{
        duration: 5000,
        style: {
          background: getTheme() === 'dark' ? '#404040' : '#fafafa',
          color: getTheme() === 'dark' ? '#d6d3d1' : '#171717',
        }
      }}
    />
  )
}
