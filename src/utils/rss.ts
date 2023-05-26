import fs from 'fs'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
import { allBlogs } from 'contentlayer/generated'

const DOMAIN = 'https://datsfilipe.dev'
const AUTHOR = {
  name: 'Filipe Lima',
  email: 'datsfilipe@skiff.com',
  link: DOMAIN,
}

const options = {
  author: AUTHOR,
  title: 'Filipe Lima',
  description: 'Filipe Lima Blog',
  id: DOMAIN,
  copyright: 'CC BY-NC-SA 4.0 @ Filipe Lima',
  link: DOMAIN,
  Image: `${DOMAIN}/api/og`,
  feedLinks: {
    rss2: `${DOMAIN}/rss.xml`,
  }
}

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
})

export const generateRssFeed = () => {
  if (!allBlogs || process.env.NODE_ENV === 'production') return

  const feed = new Feed(options)

  if (allBlogs.length === 0) return

  allBlogs.forEach((blog) => {
    const body = blog.body.raw
    const content = mdParser.render(body).replace('src="/', `src="${DOMAIN}/`)

    feed.addItem({
      author: [AUTHOR],
      title: blog.title,
      link: `${DOMAIN}/blog/${blog.slug.replace(' ', '%20')}`,
      description: blog.summary,
      date: new Date(blog.publishedAt),
      image: `${DOMAIN}/api/og?title=${blog.title}`,
      content,
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}