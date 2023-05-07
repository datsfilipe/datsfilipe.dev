import { tv } from 'tailwind-variants'

const app = tv({
  base: [
    'font-primary',
    'selection:bg-zinc-400',
    'selection:bg-opacity-30',
  ],
})

const container = tv({
  base: [
    'bg-neutral-50',
    'dark:bg-neutral-900',
    'text-neutral-900',
    'dark:text-neutral-50',
  ],
})

const page = tv({
  extend: container,
  base: [
    'flex',
    'flex-col',
    'min-h-screen',
  ],
})

const card = tv({
  base: [
    'bg-neutral-300',
    'dark:bg-neutral-800',
    'border',
    'border-neutral-200',
    'dark:border-neutral-700',
    'rounded',
    'shadow',
  ],
})

const nav = tv({
  base: [
    'backdrop-blur-md',
    'z-20',
    'flex',
    'space-x-4',
    'items-center',
    'justify-center',
  ],
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    position: {
      sticky: 'fixed top-0',
      static: 'static',
    },
  },
  defaultVariants: {
    direction: 'row',
    position: 'sticky',
  },
})

const field = tv({
  base: [
    'bg-neutral-900',
    'dark:bg-neutral-100',
    'text-neutral-50',
    'dark:text-neutral-900',
    'hover:bg-neutral-800',
    'dark:hover:bg-neutral-200',
    'transition-colors',
    'duration-200',
    'rounded',
    'shadow',
    'focus:bg-neutral-800',
    'dark:focus:bg-neutral-200',
    'font-primary',
  ],
})

const text = tv({
  base: [
    'text-neutral-900',
    'dark:text-neutral-50',
  ],
})

const heading = tv({
  extend: text,
  base: [
    'text-xl',
    'font-bold',
    'font-serif',
  ],
})

const paragraph = tv({
  extend: text,
  base: [
    'text-md',
    'font-primary',
  ],
})

const button = tv({
  extend: field,
  base: [
    'px-4',
    'py-2',
    '&>svg:[mr-2]',
  ],
})

const input = tv({
  extend: field,
  base: [
    'px-4',
    'py-2',
    'placeholder-neutral-200',
    'dark:placeholder-neutral-700',
    'focus:placeholder-transparent',
  ],
})

const label = tv({
  extend: text,
  base: [
    'text-md',
    'font-primary',
  ],
})

export const appVariants = {
  container,
  page,
  card,
  field,
  text,
  heading,
  paragraph,
  button,
  input,
  label,
  app,
  nav,
}