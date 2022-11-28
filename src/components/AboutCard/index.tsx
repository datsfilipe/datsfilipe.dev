import type { ReactNode } from 'react'
import { MdCircle } from 'react-icons/md'
import { Card } from '../Card'
import { CustomLink } from '../CustomLink'
import { Paragraph } from '../Paragraph'

interface AboutCardProps {
  title: string;
  reference: string;
  tags: string[];
  year: string;
  children: ReactNode;
}

export function AboutCard ({ title, reference, tags, year, children }: AboutCardProps) {
  const [ titlePiece, referencePiece ] = title.split(' - ')

  return (
    <Card>
      <div className='mr-2 w-32 h-full max-md:w-16'>
        {year}
      </div>
      <div className='w-full'>
        <em className='flex flex-wrap'>
          {titlePiece} -&nbsp;<CustomLink href={reference} target='_blank'>{referencePiece}</CustomLink>
        </em>
        <Paragraph className='mt-2 mb-2'>
          {children}
        </Paragraph>
        <div className='flex flex-wrap items-center'>
          {tags.map((tag, index) => (
            <span key={index} className='flex items-center'>
              <MdCircle />&nbsp;{tag}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
