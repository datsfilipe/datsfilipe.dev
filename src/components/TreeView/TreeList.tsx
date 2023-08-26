import type { ReactElement, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const tree = tv({
  slots: {
    item: 'first:mt-2 text-stone-300'
  }
})

const { item } = tree({})

interface TreeListProps {
  children?: ReactNode
}

export default function TreeList ({
  children
}: TreeListProps): ReactElement {
  return (
    <li className={item()}>
      {children}
    </li>
  )
}