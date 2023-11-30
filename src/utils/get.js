import { config } from 'dotenv'
import * as fs from 'fs'
import path from 'path'

const __dirname = path.resolve()
config({ path: path.join(__dirname, '.env') })

const ghToken = process.env.GH_TOKEN
const apiUrl = 'https://api.github.com/graphql'
const query = fs.readFileSync(path.join(__dirname, 'src/utils/query.graphql'), 'utf8')
const outputPath = path.join(__dirname, 'src/utils/projects.json')

const headers = {
  'Authorization': `Bearer ${ghToken}`,
  'Content-Type': 'application/json'
}

const fetchProjects = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query })
  })
  const { data } = await response.json()
  return data
}

const writeProjects = async (data) => {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
}

const main = async () => {
  if (!ghToken) {
    console.error('GH_TOKEN not found')
    return
  }

  if (fs.existsSync(outputPath)) {
    console.error('ghprojects.json already exists')
    return
  }

  try {
    const data = await fetchProjects()
    await writeProjects(data)
    console.log('ghprojects.json created')
  } catch (error) {
    console.error(error)
  }
}

main()