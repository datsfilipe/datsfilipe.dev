import * as React from 'react'
import Link from 'next/link'
import Image, { type ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Tweet } from '@/components/tweet'
import { Icons } from '@/components/icons'

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

function Callout(props: { emoji: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex p-4 my-8 rounded-md border bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center mr-4 w-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return (
    <div className="p-6 my-4 w-full rounded-md border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex items-baseline mb-2 font-medium">
            <div className="mr-2 w-4 h-4">
              <Icons.Checkbox className='text-emerald-500 mt-[2px]' />
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <div className="p-6 my-6 w-full rounded-md border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex items-baseline mb-2 font-medium">
            <div className="mr-2 w-4 h-4">
              <Icons.X className='text-red-500 mt-[2px]' />
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
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
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components, StaticTweet }} />
    </article>
  )
}