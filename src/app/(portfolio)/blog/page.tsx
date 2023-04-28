import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import { ViewCounter } from './view-counter'
import { tv } from 'tailwind-variants'

export const metadata: Metadata = {
  title: 'datsfilipe | blog',
  description: 'My collection of posts about software development (mostly) and other things.',
}

const blogVariants = tv({
  slots: {
    main: 'flex flex-col justify-center items-center mx-6 w-full h-full',
    section: 'flex flex-col m-6 w-full h-full',
    title: 'mb-5 font-serif text-3xl font-bold',
    link: 'flex flex-col mb-4 space-y-1',
    blog: 'flex flex-col w-full',
  },
})

export default function Blog() {
  return (
    <main className={blogVariants().main()}>
      <section className={blogVariants().section()}>
        <h1 className={blogVariants().title()}>Blog</h1>
        {allBlogs.length ? allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              className={blogVariants().link()}
              href={`/blog/${post.slug}`}
            >
              <div className={blogVariants().blog()}>
                <p>{post.title}</p>
                <ViewCounter slug={post.slug} trackView={false}/>
              </div>
            </Link>
          )) : <div className='flex flex-col mt-6 text-gray-600 dark:text-gray-400'>
            <p>There are no posts yet.</p>
            <b className='mt-2'>Check back later! 🫠</b>
          </div>}
      </section>
    </main>
  )
}