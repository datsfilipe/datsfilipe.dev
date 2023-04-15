import { tv } from 'tailwind-variants'

const homeVariants = tv({
  slots: {
    main: 'flex flex-col justify-center items-center w-full h-full',
  },
})

export default function Home() {
  return (
    <main className={homeVariants().main()}>
    </main>
  )
}
