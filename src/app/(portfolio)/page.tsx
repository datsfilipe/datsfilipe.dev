import { FeaturedRepos } from '@/components/featuredRepos'
import Image from 'next/image'
import { tv } from 'tailwind-variants'
import Link from 'next/link'
import aboutMeData from '@/utils/data/about-me.json'

export const revalidate = 86400 // 24 hours

export const metadata = {
  title: 'datsfilipe',
  description: 'Filipe Lima personal website.',
}

const homeVariants = tv({
  slots: {
    main: 'flex flex-col justify-center items-center w-full h-full mx-6',
    container: 'flex flex-col justify-center items-center w-full',
    inlined: 'flex flex-row justify-between items-center w-full mb-8',
    icon: 'rounded-full relative overflow-hidden w-32 h-32',
    title: 'text-4xl font-serif font-bold text-gray-600 dark:text-gray-400',
    description: 'text-md font-serif font-medium text-gray-600 dark:text-gray-400',
    paragraph: 'text-justify text-gray-600 dark:text-gray-400 mt-4',
  },
})

export default function Home() {
  return (
    <main className={homeVariants().main()}>
      <div className={homeVariants().container()}>
        <div className={homeVariants().inlined()}>
          <Link href='/bio' className={homeVariants().icon()}>
            <Image
              src="https://github.com/datsfilipe.png"
              alt="Filipe's avatar"
              fill
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
          </Link>
          <div className='flex flex-col justify-center items-center'>
            <h1 className={homeVariants().title()}>{aboutMeData.name}</h1>
            <p className={homeVariants().description()}>
              {aboutMeData.title}
            </p>
          </div>
        </div>
        <p className={homeVariants().paragraph()}>
          {aboutMeData.description}
        </p>
        {/* @ts-expect-error Server Component */}
        <FeaturedRepos/>
      </div>
    </main>
  )
}