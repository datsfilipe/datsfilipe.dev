import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const treeList = tv({
  variants: {
    type: {
      main: 'flex flex-col space-y-2 max-w-[18rem] p-2 -ml-6',
      simple: 'flex flex-col'
    }
  },
  defaultVariants: {
    type: 'simple'
  }
})

type TreeListProps = {
  children?: ReactNode
} & VariantProps<typeof treeList>

export default function TreeList ({
  children,
  ...props
}: TreeListProps): React.ReactElement {
  return (
    <ul className={treeList()} {...props}>
      {children}
    </ul>
  )
}