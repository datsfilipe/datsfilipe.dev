'use client'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCircle } from 'react-icons/fa'
import Link from 'next/link'

type Dimensions = {
  x: number;
  w: number;
}

export function Navigation () {
  const [pathname, setPathname] = useState<string>('')
  const pathnameValueFromHook = usePathname()

  const [screenSize, setScreenSize] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)
  const [motionDivPosition, setMotionDivPosition] = useState<Dimensions>({
    w: 0,
    x: 0
  })

  const navigationButtons = {
    home: useRef<HTMLLIElement>(null),
    about: useRef<HTMLLIElement>(null),
    contact: useRef<HTMLLIElement>(null)
  }

  const initialPosition = () => {
    if (pathname === '/') {
      if (!navigationButtons.home.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.home.current.offsetLeft,
        width: navigationButtons.home.current.offsetWidth
      }
    } else if (pathname === '/about') {
      if (!navigationButtons.about.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.about.current.offsetLeft,
        width: navigationButtons.about.current.offsetWidth
      }
    } else if (pathname === '/contact') {
      if (!navigationButtons.contact.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.contact.current.offsetLeft,
        width: navigationButtons.contact.current.offsetWidth
      }
    } 
  }

  const variants = {
    animate: {
      x: motionDivPosition?.x ? motionDivPosition.x - 10 : 0,
      width: motionDivPosition?.w ? motionDivPosition.w + 20 : 0
    },
    initial: {
      x: initialPosition()?.x || 0,
      width: initialPosition()?.width || 0
    }
  }

  useEffect(() => {
    setMotionDivPosition({
      x: initialPosition()?.x || 0,
      w: initialPosition()?.width || 0
    })
  }, [navigationButtons.home?.current, navigationButtons.about?.current, navigationButtons.contact?.current, pathname, screenSize > 768, screenSize < 768])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })

    return () => window.removeEventListener('resize', () => {
      setScreenSize(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    setPathname(pathnameValueFromHook)
  }, [pathnameValueFromHook])

  return (
    <div className='flex absolute right-0 left-0 justify-center items-center mx-auto h-full font-medium w-fit'>
      <nav className='flex items-center h-full text-base max-sm:text-sm'>
        <ul
          className='flex relative'
          onMouseLeave={() => {
            setMotionDivPosition({
              x: initialPosition()?.x || 0,
              w: initialPosition()?.width || 0
            })
          }}
        >
          <motion.div
            className='absolute self-center h-8 bg-opacity-50 rounded-md dark:bg-opacity-50 bg-stone-400 -z-10 dark:bg-zinc-600' 
            variants={variants}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }}
          />
          <li
            className='flex items-center mx-5 h-full max-md:mx-2'
            onMouseOver={() => {
              if (!navigationButtons.home.current) return
              setMotionDivPosition({ x: navigationButtons.home.current.offsetLeft, w: navigationButtons.home.current.offsetWidth })
            }}
            ref={navigationButtons.home}
          >
            <Link
              href='/'
              aria-label='Home'
              title='Home'
            >
              {
                pathname === '/' && screenSize < 768 ? (
                  <FaCircle className='mt-1 text-stone-400 dark:text-zinc-600' />
                ) : 'Home'
              }
            </Link>
          </li>
          <li
            className='flex items-center mx-5 h-full max-md:mx-2'
            onMouseOver={() => {
              if (!navigationButtons.about.current) return
              setMotionDivPosition({ x: navigationButtons.about.current.offsetLeft, w: navigationButtons.about.current.offsetWidth })
            }}
            ref={navigationButtons.about}
          >
            <Link
              href='/about'
              aria-label='About'
              title='About'
            >
              {
                pathname === '/about' && screenSize < 768 ? (
                  <FaCircle className='mt-1 max-sm:text-sm text-stone-400 dark:text-zinc-600' />
                ) : 'About'
              }
            </Link>
          </li>
          <li
            className='flex items-center mx-5 h-full max-md:mx-2'
            onMouseOver={() => {
              if (!navigationButtons.contact.current) return
              setMotionDivPosition({ x: navigationButtons.contact.current.offsetLeft, w: navigationButtons.contact.current.offsetWidth })
            }}
            ref={navigationButtons.contact}
          >
            <Link
              href='/contact'
              aria-label='Contact'
              title='Contact'
            >
              {
                pathname === '/contact' && screenSize < 768 ? (
                  <FaCircle className='mt-1 text-stone-400 dark:text-zinc-600' />
                ) : 'Contact'
              }
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
