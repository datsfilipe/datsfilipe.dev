'use client'
/* eslint-disable jsx-a11y/alt-text */
import { Tweet as TweetComponent } from 'react-tweet'
import Image from 'next/image'
import type { TweetComponents } from 'react-tweet'

const components: TweetComponents = {
  AvatarImg: (props) => <Image {...props} className='!m-0' />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}

const Tweet = ({ id }: { id: string }) => {
  return (
    <div className='not-prose'>
      <TweetComponent id={id} components={components} />
    </div>
  )
}

export { Tweet }