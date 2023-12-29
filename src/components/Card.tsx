import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

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

interface ImageObject {
  src: string
  alt: string
  loading: boolean
  error: boolean | string
}

type OptionalImageObject = Partial<ImageObject>

export default function Card ({ repo }: CardProps): ReactElement {
  const [image, setImage] = useState<OptionalImageObject>({})

  useEffect(() => {
    const getImage = async (): Promise<void> => {
      let newImage: OptionalImageObject = {
        loading: false
      }

      const requestOptions = {
        method: 'GET',
        headers: {
          'Cache-Control': 'public, max-age=86400' // 24 hours
        }
      }

      if (repo.homepageUrl !== null && repo.homepageUrl !== '') {
        try {
          await fetch('https://corsproxy.io/?' + repo.homepageUrl, requestOptions)
            .then(async res => await res.text())
            .then(text => {
              const match = text.match(/og:image" content="(.+?)"/)
              if (match != null) {
                newImage = {
                  src: match[1] as string,
                  alt: repo.name,
                  loading: true
                }
              }
            })
        } catch (error) {
          newImage = {
            src: '',
            alt: '',
            loading: false,
            error: 'Error fetching source'
          }
        }
      }

      if (newImage.loading === false && repo.url !== null && repo.url !== '') {
        try {
          await fetch('https://corsproxy.io/?' + repo.url, requestOptions)
            .then(async res => await res.text())
            .then(text => {
              const match = text.match(/og:image" content="(.+?)"/)
              if (match != null) {
                newImage = {
                  src: match[1] as string,
                  alt: repo.name,
                  loading: true
                }
              }
            })
        } catch (error) {
          newImage = {
            src: '',
            alt: '',
            loading: false,
            error: 'Error fetching source'
          }
        }
      }

      setImage(newImage)
    }

    getImage().catch(error => {
      console.error(error)
    })
  }, [])

  const date = new Date(repo.defaultBranchRef.target.history.nodes[0].committedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="flex flex-col space-y-4 pb-10">
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        <h3
          className="text-md font-bold bg-stone-600 w-fit px-4 py-2"
        >{repo.name}</h3>
      </a>
      <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
        <div
          className="relative w-full max-h-[12rem] overflow-hidden after:content-[''] after:block after:h-full after:w-full after:absolute after:top-0 after:shadow-card-inner [&:hover>span]:mb-6 [&:hover>span>span]:flex rounded-lg"
        >
          {image?.loading === true
            ? (
            <img
              src={image?.src ?? ''}
              alt={image?.alt ?? ''}
            />
              )
            : (
              <div className="flex items-center justify-center w-full h-48 bg-stone-800">
                <span className="text-sm text-neutral-300">
                  {image?.error ?? 'Loading...'}
                </span>
              </div>
              )
          }
          <span className="flex items-center space-x-2 absolute bottom-0 right-0 m-4 text-xl z-10 transition-all">
            <FaExternalLinkAlt /><span className="hidden text-sm font-medium transition-all">Visit Page</span>
          </span>
        </div>
      </a>
      <p className="text-justify pt-4 text-neutral-300">
        {repo.description}
      </p>
      <span className="text-sm font-medium">
        ~{date}
      </span>
    </div>
  )
}