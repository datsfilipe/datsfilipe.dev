import { Navigation } from '@/components/navigation'
import { page } from '@/styles/appVariants'
import { Copyright } from '@/components/copyright'
import { generateRssFeed } from '@/utils/rss'

generateRssFeed()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={page()}>
        <Navigation />
        {children}
      </main>
      <footer className='flex justify-center my-8 items-center'>
        <p className='text-gray-500'>
          <Copyright />
        </p>
      </footer>
    </>
  )
}