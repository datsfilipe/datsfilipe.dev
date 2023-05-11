import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import { text, link, container, heading } from '@/styles/appVariants'

export const metadata: Metadata = {
  title: 'blog',
  description: 'My collection of posts about software development (mostly) and other things.',
}

export default function Blog() {
  return (
    <section className={container() + ' mt-24'}>
      <h1 className={heading()}>Blog</h1>
      {allBlogs.length ? allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div className='mt-4' key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              aria-label={post.title}
              className={link()}
            >
              <b>{post.title}</b>
            </Link>
            <p className={text()}>{
              new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
              }).format(new Date(post.publishedAt))
            }</p>
          </div>
        )) : <div className={text() + ' mt-4'}>
          <p>There are no posts yet.</p>
          <b className='mt-2'>Check back later! 🫠</b>
        </div>}
    </section>
  )
}