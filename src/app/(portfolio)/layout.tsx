import { Navigation } from '@/components/navigation'
import { appVariants } from '@/styles/appVariants'
import { COPYRIGHT } from '@/components/copyright'
import Image from 'next/image'
import icon from '@/app/icon.svg'
import { generateRssFeed } from '@/utils/rss'

generateRssFeed()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV !== 'development') return (
    <main className="flex justify-center items-center mx-auto max-w-4xl min-h-screen">
      ⚠️ This website is under construction. Please, come back later.
    </main>
  )

  return (
    <>
      <div className='flex justify-between items-center mt-4 mx-4'>
        <Image
          src={icon as string}
          alt='datsfilipe icon'
          width={32}
          height={32}
          className='filter invert dark:invert-0'
        />
        <Navigation />
      </div>
      <main className={appVariants.page()}>
        {children}
      </main>
      <footer className='flex justify-center items-center'>
        <p className='text-sm text-gray-500'>{COPYRIGHT}</p>
      </footer>
    </>
  )
}