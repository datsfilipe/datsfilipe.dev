'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icons } from '@/components/icons'
import { appVariants } from '@/styles/appVariants'

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={appVariants.navItem()}>
      {theme === 'dark' ? <Icons.Sun size={18} /> : <Icons.Moon size={18} />}
    </button>
  )
}