import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const treeList = tv({
  variants: {
    type: {
      main: 'flex flex-col space-y-2 max-w-[18rem] p-2 -ml-6',
      simple: 'flex flex-col ml-4 first:ml-0'
    }
  },
  defaultVariants: {
    type: 'simple'
  }
})

type TreeListProps = {
  type?: 'main' | 'simple'
  children?: ReactNode
} & VariantProps<typeof treeList>

export default function TreeList ({
  type,
  children,
  ...props
}: TreeListProps): React.ReactElement {
  return (
    <ul className={treeList({
      type: type ?? 'simple'
    })} {...props}>
      {children}
    </ul>
  )
}