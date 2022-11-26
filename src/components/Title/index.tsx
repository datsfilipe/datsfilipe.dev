import { HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Title ({ children, ...props }: TitleProps) {
  const { className, ...rest } = props

  const classes = className?.includes('text-')
    ? `${className ? className : ''}`
    : `${className ? className : ''} text-4xl`

  return (
    <h1 className={`${classes} font-bold text-orange-700 dark:text-orange-600`} {...rest}>
      {children}
    </h1>
  )
}
