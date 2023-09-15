import fs from 'fs'
import path from 'path'

export const setImages = (folderPath) => {
  const files = fs.readdirSync(folderPath)
  const images = []

  files.forEach((file) => {
    const filePath = path.join(folderPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      const nestedImages = setImages(filePath)
      images.push(...nestedImages)
    } else if (/\.(md|mdx)$/.test(file.toLowerCase())) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const newContent = fileContent.replace(/\!\[([^\]]*)\]\(\.\/([^)]*)\)/g, '![$1](/$2)')

      if (newContent !== fileContent) {
        fs.writeFileSync(filePath, newContent)
        console.log('Changes applied successfully.')
      }
    } else if (/\.(svg|png|jpg)$/.test(file.toLowerCase())) {
      images.push(filePath)

      const publicPath = path.join(process.cwd(), 'public', 'assets')
      const publicFilePath = path.join(publicPath, file)
      const filePathFull = path.join(process.cwd(), filePath)
      if (!fs.existsSync(publicFilePath)) {
        fs.copyFileSync(filePathFull, publicFilePath)
      }
    }
  })

  return images
}

const folderPath = './src/content/brain'
setImages(folderPath)