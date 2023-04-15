import { tv } from 'tailwind-variants'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

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

export default function Bio() {
  return (
    <main className={bioVariants().main()}>
      <div className={bioVariants().icon()}>
        <Image
          src="https://github.com/datsfilipe.png"
          alt="Filipe's avatar"
          priority
          fill
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className={bioVariants().title()}>Filipe Lima</h1>
        <p className={bioVariants().description()}>Software Engineer Student</p>
      </div>
      <div className={bioVariants().horizontalList()}>
        <Button
          use="link"
          href="https://github.com/datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Github />
        </Button>
        <Button
          use="link"
          href="https://twitter.com/datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Twitter />
        </Button>
        <Button
          use="link"
          href="https://www.linkedin.com/in/datsfilipe/"
          target="_blank"
          noreferrer
        >
          <Icons.Linkedin />
        </Button>
        <Button
          use="link"
          href="https://www.reddit.com/user/datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Reddit />
        </Button>
        <Button
          use="link"
          href="mailto:datsfilipe.pro@proton.me"
          target="_blank"
          noreferrer
        >
          <Icons.Mail />
        </Button>
        <Button
          use="link"
          href="https://www.youtube.com/@datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Youtube />
        </Button>
      </div>
      <div className={bioVariants().verticalList()}>
        <Button
          use="buttonLink"
          href="https://datsfilipe.dev"
          target="_blank"
          noreferrer
        >
          <Icons.World />
          &nbsp;Portfolio
        </Button>
        <Button
          use="buttonLink"
          href="https://github.com/sponsors/datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Heart />
          &nbsp;Sponsor me on GitHub
        </Button>
        <Button
          use="buttonLink"
          href="https://ko-fi.com/datsfilipe"
          target="_blank"
          noreferrer
        >
          <Icons.Coffee />
          &nbsp;Buy me a coffee
        </Button>
        <Button
          use="buttonLink"
          href="https://datsfilipe.dev/cv"
          target="_blank"
          noreferrer
        >
          <Icons.FileText />
          &nbsp;Download my CV
        </Button>
      </div>
    </main>
  )
}
