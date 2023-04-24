import { tv } from 'tailwind-variants'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { Error } from '@/components/error'

type Repository = {
  name: string
  stars: number
  language: string
  url: string
}

const getRepos = async (username: string): Promise<Repository[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  const repos = await res.json() as { name: string, stargazers_count: number, language: string, html_url: string }[]

  return repos.length ? repos.map(repo => ({
    name: repo.name,
    stars: repo.stargazers_count,
    language: repo.language || 'default',
    url: repo.html_url
  })).filter(repo => repo.language.toLowerCase() !== 'scss').sort((a, b) => b.stars - a.stars).slice(0, 6) : []
}

const featuredReposVariants = tv({
  slots: {
    container: 'flex flex-col items-end w-full',
    title: 'my-6 font-serif text-2xl font-bold text-gray-400',
    list: 'flex flex-row flex-wrap justify-center items-center w-full'
  }
})

const FeaturedRepos = async () => {
  const repos = await getRepos('datsfilipe')

  return (
    <div className={featuredReposVariants().container()}>
      <h1 className={featuredReposVariants().title()}>Featured Repositories</h1>
      <div className={featuredReposVariants().list()}>
        {repos.length ? repos.map((repo: Repository) => {
          const Icon = Icons[repo.language[0].toUpperCase() + repo.language.slice(1).toLowerCase()] || Icons.Language // uppercase first letter

          return (
            <a key={repo.name} className="m-2 hover:cursor-pointer" href={repo.url} target="_blank" rel="noopener noreferrer">
              <Badge
                items={[
                  { object: <Icon/> },
                  {
                    object: <Icons.Star/>,
                    text: repo.stars
                  }
                ]}
              >
                {repo.name}
              </Badge>
            </a>
          )
        }) : (
          <Error>Error fetching repositories, probably because of rate limit :(</Error>
        )}
      </div>
    </div>
  )
}

export { FeaturedRepos }