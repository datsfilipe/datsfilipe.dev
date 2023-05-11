'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icons } from '@/components/icons'
import { navItem } from '@/styles/appVariants'

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const Icon = () => {
    if (theme === 'dark') {
      return <Icons.Moon size={18} />
    }
    return <Icons.Sun size={18} />
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={navItem()} aria-label='Toggle Theme'>
      <Icon />
    </button>
  )
}