import type { ReactElement } from 'react'
import { FaGithub } from 'react-icons/fa'

interface CardProps {
  repo: {
    name: string
    url: string
    description: string
    homepageUrl: string
    updatedAt: string
    defaultBranchRef: {
      target: {
        history: {
          nodes: [{
            committedDate: string
          }]
        }
      }
    }
  }
}

export default function Card ({ repo }: CardProps): ReactElement {
  const date = new Date(repo.defaultBranchRef.target.history.nodes[0].committedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const author = repo.url.split('/')[3]

  return (
    <div className="flex flex-col space-y-4 pb-10">
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        <h3
          className="text-md font-bold bg-stone-600 w-fit px-4 py-2"
        >{repo.name}</h3>
      </a>
      <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
        <div
          className="bg-[#fff] text-black flex justify-between min-h-[12rem] h-fit relative w-full overflow-hidden [&:hover>span]:mb-6 [&:hover>span>span]:flex rounded-lg"
        >
          <div className="pt-6 pl-6 pb-6 pr-4 h-full">
            <h4 className="text-xl">{author}/<b>{repo.name}</b></h4>
            <p className="text-justify text-[12px] mt-2 text-neutral-600 pb-8">
              {repo.description}
            </p>
            <span className="text-sm font-medium absolute bottom-6">
              ~{date}
            </span>
          </div>
          <img src={'https://github.com/' + (author as string) + '.png'} alt={author} className="w-16 h-16 mt-6 mr-6 rounded-full" />
          <span className="flex items-center space-x-2 absolute bottom-0 right-0 m-4 text-xl z-10 transition-all">
            <FaGithub className="w-6 h-6" /><span className="hidden text-sm font-medium transition-all">Visit Page</span>
          </span>
        </div>
      </a>
    </div>
  )
}