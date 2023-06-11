import aboutMeData from '@/utils/data/about-me.json'
import { Card } from '@/components/card'
import { link, text } from '@/styles/appVariants'

export const revalidate = 86400 // 24 hours

export const metadata = {
  title: 'home',
  description: 'Filipe Lima website.',
}

type Repository = {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

const repos = [
  'datsfilipe/web-ascii-theater',
  'datsfilipe/datsfilipe.dev',
  'datsfilipe/vercel-ui-clone',
  'datsfilipe/react-jokenpo',
  'datsfilipe/dotfiles',
  'datsfilipe/github-search',
]

const getRepositoryInfo = async (repo: string) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`)
  const data = await response.json() as Repository
  return data
}

export default async function Home() {
  const repositories = await Promise.all(repos.map(getRepositoryInfo))

  const CustomLink = ({ children, href }: { children: string, href: string }) => (
    <a
      className={link()}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={children}
    >
      {children}
    </a>
  )

  return (
    <section className='flex flex-col mx-auto mt-14 max-w-4xl space-y-8'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-secondary font-bold'>Hi, I&apos;m <span id='about-name'>{aboutMeData.name}</span>,</h1>
        <p className={text() + 'text-lg font-primary font-bold'}>{aboutMeData.title}.</p>
      </div>
      <div className={text() + ' text-md sm:text-lg text-justify font-primary space-y-2'}>
        <p>
          I&apos;m a creative Brazilian developer, born in 2002, currently studying Computer Science at <CustomLink href='https://www.wyden.com.br'>Wyden</CustomLink> and passionate about learning new things.
        </p>
        <p>
          My expertise lies in front-end web development using technologies such as React.js, Next.js, and TypeScript. I have contributed to open-source projects like <CustomLink href='https://betterdiscord.app/developers'>BetterDiscord</CustomLink> and other minor projects on <CustomLink href='https://github.com/datsfilipe'>Github</CustomLink>.
        </p>
        <p>
          When I&apos;m not programming, I enjoy listening to music (rock, pop, and indie mostly) and watching sports/e-sports matches, such as Basketball, Soccer, League of Legends, and Counter-Strike. I also enjoy customizing my operating system, which we call <CustomLink href='https://jie-fang.github.io/blog/basics-of-ricing'>&ldquo;ricing&rdquo;</CustomLink>, and it has given me basic to intermediate knowledge in shell scripting, Lua, Linux, window managers, and other softwares. You can see some of my rices in <CustomLink href='https://myrices.datsfilipe.dev'>myrices.datsfilipe.dev</CustomLink>.
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-secondary font-bold'>
          {'<Projects>'}
        </h2>
        <div className='ml-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {repositories.map((repo) => (
            <Card
              key={repo.name}
              title={repo.name}
              description={repo.description}
              url={repo.html_url}
              stars={repo.stargazers_count}
              language={repo.language}
            />
          ))}
        </div>
        <strong className='text-2xl font-secondary'>
          {'</Projects>'}
        </strong>
      </div>
    </section>
  )
}