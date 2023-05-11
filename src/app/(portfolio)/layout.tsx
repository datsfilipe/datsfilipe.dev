import { Navigation } from '@/components/navigation'
import { page } from '@/styles/appVariants'
import { Copyright } from '@/components/copyright'
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