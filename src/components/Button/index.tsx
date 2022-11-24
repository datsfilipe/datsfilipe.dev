import type { ReactNode, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export function Button ({ children, ...props }: ButtonProps) {
  const { className, ...rest } = props

  const classes = className?.includes('p-')
    ? `${className ? className : ''}`
    : `${className ? className : ''} py-2 px-8`

  return (
    <button
      {...rest}
      className={`${classes} flex items-center text-lg font-medium rounded-xl transition-all hover:brightness-90 hover:cursor-pointer w-fit bg-stone-300 border border-stone-400 dark:border-stone-500 text-neutral-900 dark:text-stone-300 dark:bg-neutral-700`}
    >
      {children}
    </button> 
  )
}
