'use client'
import { tv } from 'tailwind-variants'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { ToggleTheme } from '@/components/toggleTheme'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

const navigationVariants = tv({
  slots: {
    normalNav: 'flex items-center ml-4 justify-between flex-wrap p-4 sticky',
    ul: 'list-reset flex flex-col',
    item: '[&>a]:flex [&>a]:items-center [&>a>svg]:mr-2 mb-4 font-serif font-medium text-lg hover:text-gray-800 hover:dark:text-gray-200 transition-colors duration-200',
  },
})

const List = ({ pathname, ...props }: { pathname: string } & React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={navigationVariants().ul()} {...props}>
    <li className={navigationVariants().item() + (pathname === '/' ? ' text-gray-800 dark:text-gray-200' : ' text-gray-600 dark:text-gray-400')}>
      <Link href="/">
        <Icons.Home />
        Home
      </Link>
    </li>
    <li className={navigationVariants().item() + (pathname === '/blog' ? ' text-gray-800 dark:text-gray-200' : ' text-gray-600 dark:text-gray-400')}>
      <Link href="/blog">
        <Icons.WritingSign />
        Blog
      </Link>
    </li>
    <li>
      <ToggleTheme />
    </li>
  </ul>
)

const Dropdown = (props: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="absolute top-10 right-10">
      <div className="relative">
        <Button onClick={() => setOpen(!open)}>
          <Icons.Menu />
        </Button>
        {open && (
          <div className="absolute top-0 right-0 p-4 mt-12 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
            {props.children}
          </div>
        )}
      </div>
    </div>
  )
}

export const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(768)
  const [mounted, setMounted] = useState(false)

  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (windowWidth < 768) {
    return (
      <Dropdown>
        <List pathname={pathname} />
      </Dropdown>
    )
  }

  return (
    <nav className={navigationVariants().normalNav()}>
      <List pathname={pathname}/>
    </nav>
  )
}