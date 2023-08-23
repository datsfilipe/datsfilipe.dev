import type { APIRoute } from 'astro'
import fs from 'node:fs/promises'

import contributionsLinks from '../../resources/contributions.json'
const ghToken = import.meta.env.GITHUB_TOKEN as string

export interface RepositoryInformation {
  name: string
  html_url: string
  description: string
  homepage?: string
  owner: {
    login: string
    avatar_url: string
  }
  stargazers_count: number
  language: string
}

const cachePath = './public/.cache/contributions.json'

const fetchRepositoryInformation = async (
  repository: string
): Promise<RepositoryInformation | undefined> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: {
        Authorization: `token ${ghToken}`
      }
    })

    if (!response.ok) return undefined
    return await response.json()
  } catch (error) {
    console.error(`Error fetching repository information for ${repository}:`, error)
    return undefined
  }
}

const updateCache = async (data: Map<string, RepositoryInformation>): Promise<void> => {
  try {
    await fs.writeFile(cachePath, JSON.stringify([...data]))
  } catch (error) {
    console.error('Error updating cache:', error)
  }
}

const loadDataFromCache = async (): Promise<Map<string, RepositoryInformation>> => {
  try {
    await fs.access(cachePath)
    const cacheContent = await fs.readFile(cachePath, 'utf-8')
    const parsedCache = JSON.parse(cacheContent)
    return new Map(parsedCache)
  } catch (error) {
    console.error('Error reading cache:', error)
  }

  return new Map()
}

export const get: APIRoute = async () => {
  const data = await loadDataFromCache()

  if (data.size === 0) {
    const repositoriesData = await Promise.allSettled(
      [...contributionsLinks.contributions, ...contributionsLinks.repositories].map(
        fetchRepositoryInformation
      )
    )

    repositoriesData
      .filter(
        (repository): repository is PromiseFulfilledResult<RepositoryInformation> =>
          repository.status === 'fulfilled'
      )
      .map((repository) => repository.value)
      .map((repository) => repository !== undefined && repository !== null
        ? data.set(repository.name, repository)
        : null)

    await updateCache(data)
  }

  return new Response(
    JSON.stringify({
      contributions: Array.from(data.values())
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}