import Link from 'next/link'
import { ToggleTheme } from '@/components/toggleTheme'
import { appVariants } from '@/styles/appVariants'

export const Navigation = () => {
  return (
    <nav className={appVariants.nav() + ' space-x-4'}>
      <Link href='/bio' className={appVariants.navItem()}>
        Bio
      </Link>
      <Link href='/blog' className={appVariants.navItem()}>
        Blog
      </Link>
      <Link href='/projects' className={appVariants.navItem()}>
        Projects
      </Link>
      {/*<Link href='' target='_blank' rel='noopener noreferrer'>
        <Icons.Rss size={18} />
      </Link>*/}
      <ToggleTheme />
    </nav>
  )
}