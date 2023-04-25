'use client'
import { tv } from 'tailwind-variants'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { ToggleTheme } from '@/components/toggleTheme'
import { usePathname } from 'next/navigation'

const navigationVariants = tv({
  slots: {
    nav: 'flex items-center justify-between flex-wrap p-4',
    ul: 'list-reset flex flex-col ml-4',
    item: '[&>a]:flex [&>a]:items-center [&>a>svg]:mr-2 mb-4 font-serif font-medium text-lg text-gray-400 hover:text-gray-200 transition-colors duration-200',
  },
})

export const Navigation = () => {
  let pathname = usePathname() || '/'

  return (
    <nav className={navigationVariants().nav()}>
      <ul className={navigationVariants().ul()}>
        <li className={navigationVariants().item() + (pathname === '/' ? ' text-gray-200' : '')}>
          <Link href="/">
            <Icons.Home />
            Home
          </Link>
        </li>
        <li className={navigationVariants().item() + (pathname === '/blog' ? ' text-gray-200' : '')}>
          <Link href="/blog">
            <Icons.WritingSign />
            Blog
          </Link>
        </li>
        <li className={navigationVariants().item() + (pathname === '/guestbook' ? ' text-gray-200' : '')}>
          <Link href="/guestbook">
            <Icons.Message />
            Guestbook
          </Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  )
}