import fs from 'fs'
import { Feed } from 'feed'
import { allBlogs } from 'contentlayer/generated'

export const generateRssFeed = () => {
  if (!allBlogs) return

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

  const feed = new Feed(options)

  if (allBlogs.length === 0) return

  allBlogs.forEach((blog) => {
    feed.addItem({
      author: [AUTHOR],
      title: blog.title,
      link: `${DOMAIN}/blog/${blog.slug.replace(' ', '%20')}`,
      description: blog.summary,
      date: new Date(blog.publishedAt),
      image: `${DOMAIN}/api/og?title=${blog.title}`,
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}