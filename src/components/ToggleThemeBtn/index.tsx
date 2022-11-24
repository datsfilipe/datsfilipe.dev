'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const variants = {
  light: {
    rotate: 0
  },
  dark: {
    rotate: 360
  }
}

export function ToggleThemeBtn () {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof localStorage !== 'undefined') {
      const themeInfo = localStorage.getItem('theme-info') as 'light' | 'dark'
      if (themeInfo) return themeInfo
    }

    if (typeof window !== 'undefined') {
      const themeInfo = window.matchMedia('(prefers-color-scheme: dark)')
      if (themeInfo.matches) return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme-info', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme-info', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return (
    <div className='flex justify-between items-center p-1 rounded-xl w-fit bg-stone-300 dark:bg-neutral-700'>
      <motion.button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 mr-1 bg-amber-100 rounded-lg dark:text-neutral-50 dark:bg-neutral-700'
        variants={variants}
        initial='light'
        animate={theme}
        transition={{ duration: 0.3 }}
      >
        <HiSun />
      </motion.button>
      <motion.button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 rounded-lg dark:bg-gray-400 bg-stone-300 dark:text-neutral-900'
        variants={variants}
        initial='light'
        animate={theme}
      >
        <HiMoon />
      </motion.button>
    </div>
  )
}
