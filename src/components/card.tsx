import { Icons } from './icons'

type CardProps = {
  title: string
  description: string
  url: string
  stars: number
  language: string
}

export const Card = ({
  title,
  description,
  url,
  stars,
  language,
}: CardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col p-4 border border-neutral-300 dark:border-neutral-800 rounded-md hover:scale-105 z-10 transition-all duration-200 ease-in-out"
    aria-label={title}
  >
    <h3 className="text-xl font-bold font-secondary">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    <div className="flex flex-row justify-between h-full items-center mt-4">
      <div className="flex flex-row items-center mt-auto space-x-2">
        <span className="text-gray-600 dark:text-gray-400">{language}</span>
        <span className='mx-2'>•</span>
        <span className="text-gray-600 dark:text-gray-400 flex items-center">
          <Icons.Star size={16} className="mr-1 -mt-[2px]" />
          {stars}
        </span>
      </div>
    </div>
  </a>
)