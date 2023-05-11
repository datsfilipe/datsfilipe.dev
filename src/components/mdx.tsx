import * as React from 'react'
import Link from 'next/link'
import Image, { type ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Tweet } from '@/components/tweet'
import { post } from '@/styles/appVariants'

const CustomLink = ({ href, ...props}: { href?: string; children?: React.ReactNode }) => {
  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href?.startsWith('#')) {
    return <a href={href} {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
}

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} className="rounded-md" {...props} />
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
}

interface MdxProps {
  code: string
  tweetIds: string[]
}

export function Mdx({ code, tweetIds }: MdxProps) {
  const Component = useMDXComponent(code)
  const StaticTweet = ({ id }: { id: string }) => {
    const tweetId = tweetIds.find((tweetId) => tweetId === id)
    return tweetId ? <Tweet id={tweetId} /> : null
  }

  return (
    <article className={post() + ' mb-14 text-base'}>
      <Component components={{ ...components, StaticTweet }} />
    </article>
  )
}