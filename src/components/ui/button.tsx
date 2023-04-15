import { tv } from 'tailwind-variants'

type ButtonProps = {
  children: React.ReactNode
  use?: 'primary' | 'danger' | 'link' | 'buttonLink'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export const Button = ({ children, use = 'buttonLink', rounded = 'md', ...props }: ButtonProps) => {
  const button = tv({
    base: 'font-bold py-2 px-4',
    variants: {
      type: {
        primary: 'dark:bg-zinc-700 dark:text-white bg-zinc-300 text-black',
        danger: 'bg-red-500 text-white',
        link: 'bg-transparent text-zinc-700 dark:text-white',
        buttonLink: 'dark:bg-zinc-700 dark:text-white bg-zinc-300 text-black',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
  })

  return (
    <button className={button({ type: use, rounded })} {...props}>
      {children}
    </button>
  )
}
