/* eslint-disable @typescript-eslint/require-await */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import { heading, text, container, link } from '@/styles/appVariants'
import { Script } from './script'
import { Icons } from '@/components/icons'

const url = 'https://datsfilipe.dev'

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params
}: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post
  const ogImage = image ?
    `${url}${image}` :
    `${url}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${url}/blog/${slug}`,
      siteName: 'datsfilipe',
      images: [
        {
          url: ogImage,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: ogImage,
          alt: title,
        }
      ],
    },
  }
}

export const revalidate = 1800

export default async function Post({ params }: { params: { slug: string }}) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const tweetIds = post.tweetIds as string[]

  return (
    <section className={container() + ' mt-14 mb-14'}>
      <Script data={post.structuredData} />
      <h1 className={heading() + ' text-4xl'}>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className={text() + ' mb-8'}>
        {new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'UTC'
        }).format(new Date(post.publishedAt))}
      </div>
      <Mdx code={post.body.code} tweetIds={tweetIds} />
      <a
        className={link({ type: 'secondary' })}
        href={`https://twitter.com/intent/tweet?text=After%20reading%20&url=https://datsfilipe.dev/blog/${post.slug}%20from%20@datsfilipe1`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comment on Twitter"
      >
        <Icons.Message className="inline-block w-6 h-6 -mt-[2px]" />{' '}Comment on Twitter
      </a>
    </section>
  )
}