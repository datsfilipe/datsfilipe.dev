import { tv } from 'tailwind-variants'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Link from 'next/link'
import socialLinksData from '@/utils/data/social-links.json'
import aboutMeData from '@/utils/data/about-me.json'

export const revalidate = 86400 // 24 hours

export const metadata: Metadata = {
  title: 'datsfilipe | bio',
  description: 'Social links, contact information and more about Filipe Lima.',
}

const bioVariants = tv({
  slots: {
    main: 'flex flex-col items-center space-y-4 w-4/5 mx-auto min-h-screen max-h-screen justify-center',
    icon: 'rounded-full relative overflow-hidden w-32 h-32',
    title: 'text-2xl md:text-3xl font-bold font-serif',
    description: 'text-md md:text-lg dark:text-gray-400 text-gray-700',
    horizontalList: 'flex flex-row space-x-2 w-full sm:justify-center text-lg md:text-xl items-center overflow-x-auto scrollbar-hide',
    verticalList: 'flex flex-col space-y-4 w-full text-lg md:text-xl sm:max-w-lg',
  }
})

const Icon = (name: string) => {
  const Icon = Icons[name]
  return <Icon />
}

export default function Bio() {
  return (
    <main className={bioVariants().main()}>
      <Link href='/' className={bioVariants().icon()}>
        <Image
          src="https://github.com/datsfilipe.png"
          alt="Filipe's avatar"
          priority
          fill
        />
      </Link>
      <div className="flex flex-col items-center">
        <h1 className={bioVariants().title()}>{aboutMeData.name}</h1>
        <p className={bioVariants().description()}>{aboutMeData.title}</p>
      </div>
      <div className={bioVariants().horizontalList()}>
        {socialLinksData.noContext.map((item) => (
          <Button
            use="link"
            href={item.link}
            key={item.icon}
          >
            {Icon(item.icon)}
          </Button>
        ))}
      </div>
      <div className={bioVariants().verticalList()}>
        {socialLinksData.context.map((item) => (
          <Button
            use="buttonLink"
            href={item.link}
            key={item.icon}
          >
            {Icon(item.icon)}
            &nbsp;{item.title}
          </Button>
        ))}
      </div>
    </main>
  )
}