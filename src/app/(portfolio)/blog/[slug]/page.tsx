/* eslint-disable @typescript-eslint/require-await */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import { heading, text, container } from '@/styles/appVariants'
import { Script } from './script'

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
  const ogImage = image
    ? `https://datsfilipe.dev${image}`
    : `https://datsfilipe.dev/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://datsfilipe.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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
      <h1 className={heading()}>
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
    </section>
  )
}