import Link from 'next/link'
import { ToggleTheme } from '@/components/toggleTheme'
import { navItem, nav } from '@/styles/appVariants'
import { Icons } from './icons'

export const Navigation = () => {
  return (
    <nav className={nav() + ' space-x-4 my-4 font-secondary'}>
      <Link href='/' className={navItem()}>
        Home
      </Link>
      <Link href='/bio' className={navItem()}>
        Bio
      </Link>
      <Link href='/blog' className={navItem()}>
        Blog
      </Link>
      <Link href='/rss.xml' target='_blank' rel='noopener noreferrer'>
        <Icons.Rss size={18} />
      </Link>
      <ToggleTheme />
    </nav>
  )
}