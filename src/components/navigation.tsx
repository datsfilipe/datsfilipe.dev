import { tv } from 'tailwind-variants'
import Link from 'next/link'
import { ToggleTheme } from '@/components/toggleTheme'

const navigationVariants = tv({
  slots: {
    nav: 'flex items-center justify-between flex-wrap p-2',
    ul: 'list-reset flex flex-col ml-4',
    item: 'inline-block mb-4 font-serif font-medium text-lg text-gray-400 hover:text-gray-200 transition-colors duration-200',
  },
})

export const Navigation = () => {
  return (
    <nav className={navigationVariants().nav()}>
      <ul className={navigationVariants().ul()}>
        <li className={navigationVariants().item()}>
          <Link href="/">Home</Link>
        </li>
        <li className={navigationVariants().item()}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={navigationVariants().item()}>
          <Link href="/guestbook">Guestbook</Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  )
}
