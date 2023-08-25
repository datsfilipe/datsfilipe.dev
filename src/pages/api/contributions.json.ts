import type { APIRoute } from 'astro'
import fs from 'node:fs/promises'
import { z } from 'astro/zod'

import contributionsLinks from '../../resources/contributions.json'

const ghToken = import.meta.env.GITHUB_TOKEN as string

const repositoryInformationSchema = z.object({
  name: z.string(),
  html_url: z.string(),
  description: z.string().nullable(),
  homepage: z.string().nullable(),
  owner: z.object({
    login: z.string(),
    avatar_url: z.string()
  }),
  stargazers_count: z.number(),
  language: z.string().nullable()
})

export type RepositoryInformation = z.infer<typeof repositoryInformationSchema>

const cacheFilePath = './public/.cache/contributions.json'

const fetchRepository = async (repository: string): Promise<Response> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: {
        Authorization: `token ${ghToken}`
      }
    })

    return response
  } catch (error) {
    console.error(`Error fetching repository information for ${repository}:`, error)
    return new Response(null, { status: 500 })
  }
}

const parseRepository = async (repository: string): Promise<RepositoryInformation | undefined> => {
  try {
    const response = await fetchRepository(repository)

    if (response.ok) {
      const data = await response.json()
      return repositoryInformationSchema.parse(data)
    }

    return undefined
  } catch (error) {
    console.error(`Error parsing repository information for ${repository}:`, error)
    return undefined
  }
}

const updateCache = async (data: Map<string, RepositoryInformation>): Promise<void> => {
  try {
    await fs.writeFile(cacheFilePath, JSON.stringify([...data]))
  } catch (error) {
    console.error('Error updating cache:', error)
  }
}

const loadDataFromCache = async (): Promise<Map<string, RepositoryInformation> | undefined> => {
  try {
    await fs.access(cacheFilePath)
    const cacheContent = await fs.readFile(cacheFilePath, 'utf-8')
    const parsedCache = JSON.parse(cacheContent)
    return new Map(parsedCache)
  } catch (error) {
    console.error('Error reading cache:', error)
    await fs.mkdir('./public/.cache', { recursive: true })
  }

  return undefined
}

const formatRepository = (repository: RepositoryInformation): RepositoryInformation => {
  return {
    name: repository.name,
    html_url: repository.html_url,
    description: repository.description,
    homepage: repository.homepage,
    owner: {
      login: repository.owner.login,
      avatar_url: repository.owner.avatar_url
    },
    stargazers_count: repository.stargazers_count,
    language: repository.language
  }
}

const getUpdatedRepositoryInformation = async (
  data: Map<string, RepositoryInformation>
): Promise<void> => {
  const repositories = [...contributionsLinks.contributions, ...contributionsLinks.repositories]
  repositories.map(
    async (repository: string) => {
      if (!data.has(repository)) {
        const parsedRepository = await parseRepository(repository)

        if (parsedRepository !== undefined) {
          data.set(repository, formatRepository(parsedRepository))
        }

        await updateCache(data)
        console.warn('[warn] Updated cache')
      }
    }
  )
}

const loadRepositoriesData = async (): Promise<Map<string, RepositoryInformation> | undefined> => {
  try {
    const data = await loadDataFromCache()

    if (data !== undefined) {
      await getUpdatedRepositoryInformation(data)
      return data
    } else {
      const newData = new Map()

      const repositories = [...contributionsLinks.contributions, ...contributionsLinks.repositories]
      await Promise.all(
        repositories.map(
          async (repository: string) => {
            const parsedRepository = await parseRepository(repository)

            if (parsedRepository !== undefined) {
              newData.set(repository, formatRepository(parsedRepository))
            }
          }
        )
      )

      await updateCache(newData)
      return newData
    }
  } catch (error) {
    console.error('Error loading repositories data:', error)
    return undefined
  }
}

export const get: APIRoute = async () => {
  try {
    const data = await loadRepositoriesData()
    if (data !== undefined && data.size > 0) {
      return {
        status: 200,
        body: JSON.stringify(Array.from(data.values()))
      }
    } else {
      return new Response(JSON.stringify([]), {
        status: 404,
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  } catch (error) {
    console.error('Error loading repositories data:', error)
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}