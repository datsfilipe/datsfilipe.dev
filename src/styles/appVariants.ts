import { tv } from 'tailwind-variants'

const app = tv({
  base: [
    'font-primary',
    'selection:bg-zinc-400',
    'selection:bg-opacity-30',
    'bg-neutral-50',
    'dark:bg-neutral-900',
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
    'p-4',
    'mx-auto',
    'max-w-4xl',
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
  ]
})

const navItem = tv({
  base: [
    'text-neutral-900',
    'dark:text-neutral-50',
    'hover:underline',
    'duration-200',
    'ease-in-out',
    'transition-colors',
  ],
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
    'dark:text-neutral-400',
    'text-neutral-600',
    'font-primary',
  ],
})

const heading = tv({
  base: [
    'text-2xl',
    'font-bold',
    'font-secondary',
    'text-neutral-900',
    'dark:text-neutral-50',
  ],
})

const link = tv({
  base: [
    'font-primary',
    'hover:underline',
    'duration-200',
    'ease-in-out',
    'transition-colors',
  ],
  variants: {
    type: {
      primary: [
        'text-neutral-900',
        'dark:text-neutral-50',
      ],
      secondary: [
        'dark:text-gray-500',
        'text-gray-500',
      ],
    }
  },
  defaultVariants: {
    type: 'primary',
  },
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
    'font-bold',
  ],
})

const post = tv({
  base: [
    'prose',
    'prose-quoteless',
    'prose-neutral',
    'dark:prose-invert',
    'font-primary',
    'text-base',
    'text-justify',
  ],
})

export {
  container,
  page,
  card,
  field,
  text,
  heading,
  button,
  input,
  label,
  app,
  nav,
  navItem,
  link,
  post,
}