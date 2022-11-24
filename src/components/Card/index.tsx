import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
}

export function Card ({ children }: CardProps) {
  return (
    <div className='flex p-4 w-full rounded-lg bg-noise-bg bg-stone-50 text-neutral-700 dark:text-neutral-300 dark:bg-zinc-900'>
      {children}
    </div>
  )
}
