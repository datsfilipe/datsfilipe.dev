import { FeaturedRepos } from '@/components/featuredRepos'
import Image from 'next/image'
import { tv } from 'tailwind-variants'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Link from 'next/link'

const homeVariants = tv({
  slots: {
    main: 'flex flex-col justify-center items-center w-full h-full mx-6',
    container: 'flex flex-col justify-center items-center w-full',
    inlined: 'flex flex-row justify-between items-center w-full mb-8',
    icon: 'rounded-full relative overflow-hidden w-32 h-32',
    title: 'text-4xl font-serif font-bold text-gray-400',
    description: 'text-md font-serif font-medium text-gray-400',
    paragraph: 'text-justify text-gray-400 mt-4',
  },
})

export default function Home() {
  return (
    <main className={homeVariants().main()}>
      <div className={homeVariants().container()}>
        <div className={homeVariants().inlined()}>
          <div className={homeVariants().icon()}>
            <Link href='/bio'>
              <Image
                src="https://github.com/datsfilipe.png"
                alt="Filipe's avatar"
                fill
                priority
              />
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className={homeVariants().title()}>Filipe Lima</h1>
            <p className={homeVariants().description()}>
              Software Engineer Student
            </p>
          </div>
        </div>
        <p className={homeVariants().paragraph()}>
          Hey there! I&apos;m a passionate Front-end Engineer who loves building beautiful and functional websites and tools. I&apos;ve got some pretty solid technical skills under my belt, including React.js, Typescript, and Scss, which help me work efficiently and effectively. I&apos;m especially skilled at replicating interfaces, so you can count on me to make your designs come to life. Take a look around my portfolio and feel free to reach out if you&apos;re interested in working together!
        </p>
        <FeaturedRepos/>
      </div>
    </main>
  )
}