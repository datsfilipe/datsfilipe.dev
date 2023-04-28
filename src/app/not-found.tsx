import { Icons } from '@/components/icons'
import { tv } from 'tailwind-variants'

const navigationVariants = tv({
  slots: {
    main: 'flex flex-col justify-center items-center mx-auto h-screen p-4',
    section: 'flex w-full p-6',
    header: 'w-1/2 flex p-4 flex-col justify-center items-center',
    title: 'mb-2 font-serif text-3xl font-bold font-serif',
    icon: 'w-1/2 h-full p-12 text-zinc-700 dark:text-zinc-400',
    info: 'mt-6 text-center text-gray-700 dark:text-gray-400',
  },
})

export default function NotFound() {
  return (
    <main className={navigationVariants().main()}>
      <div className={navigationVariants().section()}>
        <Icons.Error404 className={navigationVariants().icon()} />
        <div className={navigationVariants().header()}>
          <h1 className={navigationVariants().title()}>
            Page not found :&apos;(
          </h1>
          <p className={navigationVariants().info()}>
            The page you&apos;re looking for doesn&apos;t exist.<br/>
            <b>Maybe you want to go back! 🕵🏻</b>
          </p>
        </div>
      </div>
    </main>
  )
}