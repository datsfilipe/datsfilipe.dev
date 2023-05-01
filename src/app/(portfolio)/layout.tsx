import { Navigation } from '@/components/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.ENVIRONMENT !== 'dev') return (
    <main className="flex justify-center items-center mx-auto max-w-4xl min-h-screen">
      ⚠️ This website is under construction. Please, come back later.
    </main>
  )

  return (
    <div className="flex relative justify-center items-center mx-auto max-w-4xl min-h-screen">
      <div className="flex justify-center items-center my-10 mx-auto w-full md:my-2">
        {children}
        <div className="flex top-0 flex-col justify-center self-start -mt-2 md:sticky md:h-screen">
          <Navigation />
        </div>
      </div>
    </div>
  )
}