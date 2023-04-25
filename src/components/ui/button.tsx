import { tv } from 'tailwind-variants'

type ButtonProps = {
  use?: 'primary' | 'danger' | 'link' | 'buttonLink'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  href?: string
  className?: never
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>

export const Button = ({ children, use = 'primary', rounded = 'md', ...props }: ButtonProps) => {
  const button = tv({
    base: 'font-bold py-2 px-4 flex items-center',
    variants: {
      type: {
        primary: 'dark:bg-zinc-700 dark:text-white bg-zinc-300 text-black',
        danger: 'bg-red-500 text-white',
        link: 'bg-transparent text-zinc-700 dark:text-gray-400 hover:text-zinc-500 dark:hover:text-gray-300 duration-200 ease-in-out transition-colors',
        buttonLink: 'dark:bg-zinc-700 dark:text-white bg-zinc-300 text-black hover:scale-105 duration-200 ease-in-out transition-transform',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
  })

  if (use === 'link' || use === 'buttonLink') {
    return (
      <a className={button({ type: use, rounded })} {...props} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    )
  }

  return (
    <button className={button({ type: use, rounded })} {...props}>
      {children}
    </button>
  )
}