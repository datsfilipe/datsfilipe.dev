import { HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Title ({ children, ...props }: TitleProps) {
  const { className, ...rest } = props

  const classes = className?.includes('text-')
    ? `${className ? className : ''} font-bold text-orange-500`
    : `${className ? className : ''} text-4xl font-bold text-orange-500`

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  )
}
